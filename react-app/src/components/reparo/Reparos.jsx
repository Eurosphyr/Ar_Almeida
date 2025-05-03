import ConteudoReparo from './ConteudoReparo';
import styles from './ConteudoReparo.module.css';

export default function Servicos() {
  return (
    <main>
      <ConteudoReparo />
      <div className={styles['button-container']}>
        <a href="/contrate" className={styles['hero-button']}>
          Contrate agora
        </a>
      </div>
    </main>
  );
}