import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const GET_PRODUCTS = gql`
  query GetProducts {
    products(order_by: { created_at: desc }) {
      id
      title
      color
      size
      price
      description
      created_at
    }
  }
`;

function Home() {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    fetchPolicy: "network-only",
  });

  const products = data?.products ?? [];
  console.log("🚀 ~ Home ~ products:", products);

  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Home</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Home</h1>
          <p className={styles.description}>
            Product management overview panel connected to the database.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>Home Overview</h3>
          <button className={styles.btnAdd} onClick={() => navigate("/add")}>
            Add New
          </button>
        </div>

        <div className={styles.panelContent}>
          <div className={styles.contentPlaceholder}>
            {loading && <p>Loading...</p>}
            {error && <p>Error...</p>}

            {!loading && !error && products.length === 0 ? (
              <p>No products found.</p>
            ) : null}

            {!loading && !error
              ? products.map((item) => (
                  <div
                    key={item.id}
                    className={styles.itemBox}
                    onClick={() => navigate(`/detail/${item.id}`)}
                  >
                    {/* <img
                      src={item.image_url}
                      width="120"
                      className={styles.itemImage}
                      alt={item.title}
                    /> */}
                    <h3>{item.title}</h3>
                    <p>Price: {item.price}</p>
                    <p>Color:{item.color}</p>
                    <p>Size:{item.size}</p>
                    <p>Desc: {item.description}</p>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
