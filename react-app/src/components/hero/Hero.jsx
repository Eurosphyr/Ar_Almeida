import styles from './Hero.module.css';
const Hero = () => {
  return (
    <div className={styles['hero-container']}>
      {/* The background image is set via CSS */}
      <div className={styles['hero-overlay']}></div>

      <div className={styles['hero-content']}>
        <h1 className={styles['hero-title']}>Contrate os serviços mais seguros e confiáveis do mercado</h1>
        <a href="/orcamento" className={styles['hero-button']}>
          Contrate agora
        </a>
      </div>
    </div>
  )
}

export default Hero;
