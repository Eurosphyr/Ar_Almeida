"use client"

import { useState } from "react"
import styles from "./CardsReparo.module.css"

export default function CardServico({ title, description, imageSrc }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={styles.serviceCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img src={imageSrc || "https://via.placeholder.com/250"} alt={title} className={styles.image} />
      </div>

      <div className={`${styles.overlay} ${isHovered ? styles.showOverlay : ""}`}>
        {isHovered ? (
          <div className={styles.textContent}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ) : null}

        <div className={styles.label}>
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}
