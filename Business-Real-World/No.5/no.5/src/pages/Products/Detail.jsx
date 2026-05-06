import React from "react";
import styles from "../Home/Home.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { gql } from "@apollo/client";

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

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: Number(id),
    },
  });
  const product = data?.products_by_pk;

  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Home &gt; Detail</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Detail</h1>
          <p className={styles.description}>
            Review the selected product information in a cleaner summary view.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>Product Detail</h3>
        </div>

        <div className={styles.detailContent}>
          {loading && (
            <div className={styles.detailMessage}>
              <p>Loading product...</p>
            </div>
          )}

          {error && (
            <div className={styles.detailMessage}>
              <p>
                {error.message || "Something went wrong while fetching data."}
              </p>
            </div>
          )}

          {!loading && !error && !product ? (
            <div className={styles.detailMessage}>
              <p>No product found.</p>
            </div>
          ) : null}

          {product && (
            <div className={styles.detailItem}>
              <div className={styles.itemTitle}>
                <h2 className={styles.detailName}>{product.title}</h2>
                <p className={styles.detailPrice}>{product.price}</p>
              </div>

              <div className={styles.detailInfo}>
                <p>
                  <strong>ID:</strong> {product.id}
                </p>
                <p>
                  <strong>Color:</strong> {product.color || "-"}
                </p>
                <p>
                  <strong>Size:</strong> {product.size || "-"}
                </p>
              </div>

              <div className={styles.itemDesc}>
                <h3>Description</h3>
                <p className={styles.detailDescriptionText}>
                  {product.description || "No description available."}
                </p>
              </div>

              <div className={styles.detailActions}>
                <button
                  className={styles.submitButton}
                  type="button"
                  onClick={() => navigate(`/edit/${product.id}`)}
                >
                  Edit product
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Detail;
