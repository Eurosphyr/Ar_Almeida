"use client"

import { useState, memo } from "react"
import styles from "./CardsReparo.module.css"

// Using arrow function and destructuring for cleaner syntax
const CardServico = ({ title, description, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Using object shorthand and template literals
  return (
    <div
      className={styles.serviceCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.imageContainer}>
        <img
          src={imageSrc || "https://via.placeholder.com/250"}
          alt={title}
          className={styles.image}
          loading="lazy" // Modern browser optimization
        />
      </div>

      <div className={`${styles.overlay} ${isHovered ? styles.showOverlay : ""}`}>
        {/* Using conditional rendering with optional chaining */}
        {isHovered && (
          <div className={styles.textContent}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        )}

        <div className={styles.label}>
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}

// Export memoized component to prevent unnecessary re-renders
export default memo(CardServico)
