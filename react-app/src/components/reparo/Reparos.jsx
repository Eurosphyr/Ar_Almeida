import ConteudoReparo from './ConteudoReparo';
import styles from './ConteudoReparo.module.css';

export default function Reparo() {
  return (
    <main>
      <div className={styles['text-container']}>
        <h2 className={styles['centered-text']}>Manutenções</h2>
      </div>
      <ConteudoReparo />
      <div className={styles['button-container']}>
        <a href="/contrate" className={styles['hero-button']}>
          Contrate agora
        </a>
      </div>
    </main>
  );
}