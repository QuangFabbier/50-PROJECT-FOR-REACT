import React, { useEffect, useState } from "react";
import styles from "../Home/Home.module.css";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const emptyProduct = {
  image: "",
  name: "",
  price: "",
  size: "",
  desc: "",
};

function Add() {
  const [products, setProducts] = useState([]);
  const [productSelector, setProductSelector] = useState(emptyProduct);

  const handleUpload = (e) => {
    console.log("🚀 ~ handleUpload ~ e.target.files:", e.target.files);
    const url = URL.createObjectURL(e.target.files[0]);
    setProductSelector({ ...productSelector, image: url });
  };

  const handleCancel = () => {
    setProductSelector({
      image: "",
    });
  };

  useEffect(() => {
    console.log("test", productSelector);
  }, [productSelector]);

  const handleChange = (e) => {
    setProductSelector((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleAdd = () => {
    setProducts((prev) => {
      console.log("🚀 ~ handleAdd ~ prev:", prev);

      return [
        ...prev,
        {
          ...productSelector,
          id: Date.now(),
        },
      ];
    });
    setProductSelector(emptyProduct);
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
                {productSelector.image === "" ? (
                  <label className={styles.uploadBox}>
                    <input
                      name="image"
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
                        src={productSelector.image}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className={styles.formGrid}>
                <label className={styles.formField}>
                  <span className={styles.formLabel}>Product name</span>
                  <input
                    name="name"
                    value={productSelector.name}
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
                  <span className={styles.formLabel}>Short description</span>
                  <textarea
                    name="desc"
                    value={productSelector.desc}
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
