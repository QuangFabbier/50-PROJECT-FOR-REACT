import React, { useEffect, useState } from "react";
import styles from "../Home/Home.module.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
// import { useNavigate } from "react-router";

const emptyProduct = {
  image_url: "",
  title: "",
  price: "",
  color: "",
  description: "",
};

function Add() {
  const [products, setProducts] = useState([]);
  const [productSelector, setProductSelector] = useState(emptyProduct);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  // const navigate = useNavigate();

  const handleUpload = (e) => {
    // console.log("🚀 ~ handleUpload ~ e.target.files:", e.target.files);
    // const url = URL.createObjectURL(e.target.files[0]);
    // setProductSelector({ ...productSelector, image: url });
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setSelectedFile(null);
    setPreviewUrl("");
  };

  useEffect(() => {
    console.log("test", productSelector);
  }, [productSelector]);

  const handleChange = (e) => {
    e.preventDefault();
    setProductSelector((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleAdd = async (e) => {
    e.preventDefault();

    const INSERT_PRODUCT = gql`
      mutation InsertProduct($object: products_insert_input!) {
        insert_products_one(object: $object) {
          id
          title
          description
          image_url
          created_at
        }
      }
    `;

    const imageUrl = await uploadImageToCloudinary(selectedFile);

    setProducts((prev) => {
      return [
        ...prev,
        {
          ...productSelector,
          image_url: imageUrl,
          id: Date.now(),
        },
      ];
    });
    setProductSelector(emptyProduct);
    setPreviewUrl("");
    setSelectedFile(null);
    // navigate("/home");
  };

  const uploadImageToCloudinary = async (file) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "product_img");

    console.log("🚀 ~ uploadImageToCloudinary ~ file:", file);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dgdnyyqwu/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

    console.log("🚀 ~ uploadImageToCloudinary ~ data:", data);
    console.log(
      "🚀 ~ uploadImageToCloudinary ~ data.secure_url:",
      data.secure_url,
    );

    return data.secure_url;
  };

  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Home &gt; Add</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Add</h1>
          <p className={styles.description}>
            Add product panel skeleton. Form controls will be implemented later.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>Add Panel</h3>
        </div>

        <div className={styles.panelContent}>
          <div className={styles.contentAdd}>
            <form className={styles.addForm}>
              <div className={styles.uploadBlock}>
                <p className={styles.formSectionLabel}>Product image</p>
                {/* previewUrl */}
                {previewUrl === "" ? (
                  <label className={styles.uploadBox}>
                    <input
                      name="image_url"
                      className={styles.fileInput}
                      type="file"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleUpload}
                    />
                    <span className={styles.uploadIcon}>+</span>
                    <span className={styles.uploadTitle}>
                      Upload cover image
                    </span>
                    <span className={styles.uploadHint}>
                      PNG, JPG up to 5MB. A preview can be added later.
                    </span>
                  </label>
                ) : (
                  <>
                    {" "}
                    <div className={styles.uploadBox}>
                      <button
                        className={styles.cancelBtn}
                        onClick={handleCancel}
                      >
                        <FontAwesomeIcon icon={faX} />
                      </button>

                      <img
                        className={styles.imageBox}
                        src={previewUrl}
                        alt="Product preview"
                      />
                    </div>
                  </>
                )}
              </div>

              <div className={styles.formGrid}>
                <label className={styles.formField}>
                  <span className={styles.formLabel}>Title</span>
                  <input
                    name="title"
                    value={productSelector.title}
                    className={styles.formInput}
                    type="text"
                    placeholder="Minimal chair"
                    onChange={handleChange}
                  />
                </label>

                <label className={styles.formField}>
                  <span className={styles.formLabel}>Price</span>
                  <input
                    name="price"
                    value={productSelector.price}
                    className={styles.formInput}
                    type="text"
                    placeholder="$120.00"
                    onChange={handleChange}
                  />
                </label>

                <label className={styles.colorField}>
                  <span className={styles.colorLabel}>Color</span>
                  <input
                    className={styles.formInput}
                    type="text"
                    name="color"
                    value={productSelector.color}
                    onChange={handleChange}
                  ></input>
                </label>

                <label
                  className={`${styles.formField} ${styles.formFieldFull}`}
                >
                  <span className={styles.formLabel}>Description</span>
                  <textarea
                    name="description"
                    value={productSelector.description}
                    className={`${styles.formInput} ${styles.formTextarea}`}
                    placeholder="Write a short product summary for the catalog..."
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className={styles.formActions}>
                <button
                  className={styles.submitButton}
                  type="submit"
                  onClick={handleAdd}
                >
                  Add product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Add;
