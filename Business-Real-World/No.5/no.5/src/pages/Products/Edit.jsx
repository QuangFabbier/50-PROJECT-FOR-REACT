import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../Home/Home.module.css";
import { gql } from "@apollo/client";
import { useQuery, useMutation } from "@apollo/client/react";

const colorOptions = [
  "red",
  "blue",
  "green",
  "yellow",
  "white",
  "black",
  "brown",
];
const sizeOptions = ["sm", "s", "m", "l", "xl", "xxl", "xsm"];

const GET_PRODUCT_DETAIL = gql`
  query GetProductDetail($id: Int!) {
    products_by_pk(id: $id) {
      id
      title
      description
      price
      color
      size
    }
  }
`;
const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: Int!, $data: products_set_input!) {
    update_products_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`;

const emptyProduct = {
  // image_url: "",
  id: "",
  title: "",
  price: "",
  description: "",
  color: "",
  size: "",
};

function Edit() {
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const { id } = useParams();
  const [editSelector, setEditSelector] = useState(null);
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: { id: Number(id) },
  });
  const currentProduct = editSelector || data?.products_by_pk || emptyProduct;

  const handleChange = (e) => {
    setEditSelector({
      ...currentProduct,
      [e.target.name]: e.target.value,
    });
  };
  // const handleOnChangeEdit = (e) => {
  //   e.preventDefault();
  //   setEditSelector((prev) => {
  //     return {
  //       ...prev,
  //       [e.target.name]: e.target.value,
  //     };
  //   });
  // };
  const handleUpdate = async (e) => {
    e.preventDefault();

    await updateProduct({
      variables: {
        id: Number(id),
        data: {
          title: currentProduct.title,
          description: currentProduct.description,
          price: Number(currentProduct.price),
          color: currentProduct.color,
          size: currentProduct.size,
        },
      },
    });

    alert("update success");
  };
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Home &gt; Edit</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Edit</h1>
          <p className={styles.description}>
            UI form for editing product #{id}. You can add the update logic
            later.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>Edit Panel</h3>
        </div>

        <div className={styles.panelContent}>
          {loading && <p>Loading product...</p>}
          {error && <p>{error.message}</p>}

          <div className={styles.contentAdd}>
            <form className={styles.addForm}>
              <div className={styles.formGrid}>
                <label className={styles.formField}>
                  <span className={styles.formLabel}>Title</span>
                  <input
                    name="title"
                    className={styles.formInput}
                    type="text"
                    placeholder="Product title"
                    value={currentProduct.title}
                    onChange={handleChange}
                  />
                </label>

                <label className={styles.formField}>
                  <span className={styles.formLabel}>Price</span>
                  <input
                    name="price"
                    className={styles.formInput}
                    type="number"
                    placeholder="$120.00"
                    value={currentProduct.price}
                    onChange={handleChange}
                  />
                </label>

                <label className={styles.colorField}>
                  <span className={styles.colorLabel}>Color</span>
                  <select
                    className={styles.addColor}
                    name="color"
                    value={currentProduct.color}
                    onChange={handleChange}
                  >
                    <option value="">Choose color</option>
                    {colorOptions.map((item) => (
                      <option key={item} value={item}>
                        {item.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={styles.colorField}>
                  <span className={styles.colorLabel}>Size</span>
                  <select
                    className={styles.addColor}
                    name="size"
                    value={currentProduct.size}
                    onChange={handleChange}
                  >
                    <option value="">Choose size</option>
                    {sizeOptions.map((item) => (
                      <option key={item} value={item}>
                        {item.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </label>

                <label
                  className={`${styles.formField} ${styles.formFieldFull}`}
                >
                  <span className={styles.formLabel}>Description</span>
                  <textarea
                    name="description"
                    className={`${styles.formInput} ${styles.formTextarea}`}
                    placeholder="Write product description..."
                    value={currentProduct.description}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className={styles.formActions}>
                <button
                  className={styles.submitButton}
                  type="button"
                  onClick={handleUpdate}
                >
                  Update product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Edit;
