import React from "react";
import styles from "./Home.module.css";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

function Home() {
  const GET_PRODUCTS = gql`
    query {
      products {
        id
        title
        description
        img_url
      }
    }
  `;

  const product = [
    {
      id: "1",
      title: "Ao",
      description: "Ao de mac",
      image_url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
    {
      id: "2",
      title: "Quan",
      description: "quan de mac",
      image_url:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    },
    {
      id: "3",
      title: "kinh",
      description: "kinh de deo",
      image_url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
    {
      id: "4",
      title: "mu",
      description: "mu de doi",
      image_url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
  ];

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error...</p>;
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Home</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Home</h1>
          <p className={styles.description}>
            Product management overview panel. Data section is intentionally
            empty for now.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>Home Overview</h3>
        </div>

        <div className={styles.panelContent}>
          <div className={styles.contentPlaceholder}>
            {product.reverse().map((item) => (
              <div key={item.id} className={styles.itemBox}>
                <img
                  src={item.image_url}
                  width="120"
                  className={styles.itemImage}
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
