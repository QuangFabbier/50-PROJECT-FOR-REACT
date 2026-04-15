import React from "react";
import styles from "../Home/Home.module.css";
import { useParams } from "react-router-dom";

function Detail() {
  const product = [
    {
      id: "1",
      title: "Ao",
      description:
        "Ao de mac Ao de mac Ao de mac Ao de mac Ao de mac Ao de mac Ao de mac Ao de mac Ao de mac Ao de mac Ao de mac Ao de mac Ao de mac Ao de mac",
      price: "20.000.000đ",
      image_url: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
  ];
  const { id } = useParams();
  return (
    <section className={styles.page}>
      <div className={styles.pageHeader}>
        <p className={styles.breadcrumb}>Home &gt; Detail</p>
        <div className={styles.contentTitle}>
          <h1 className={styles.title}>Detail</h1>
          <p className={styles.description}>
            Product detail panel skeleton. Data fields will be added later.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.panelHeader}>
          <h3>Detail Panel</h3>
        </div>

        <div className={styles.detailContent}>
          <div className={styles.itemPlaceholder}>
            {product.map((item) => (
              <div key={item.id} className={styles.detailItem}>
                <img src={item.image_url} className={styles.detailImage} />
                <div>
                  <div className={styles.itemTitle}>
                    <h3>{item.title}</h3>
                    <h3>{item.price}</h3>
                  </div>
                  <div className={styles.colorType}>
                    <h3>Size</h3>
                    <button className={styles.colorButton}>Black</button>
                    <button className={styles.colorButton}>White</button>
                    <button className={styles.colorButton}>Green</button>
                  </div>
                  <div className={styles.cartButton}>
                    <button className={styles.cartButton}>Add to cart</button>
                  </div>
                  <div className={styles.itemDesc}>
                    <h3>Description</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
