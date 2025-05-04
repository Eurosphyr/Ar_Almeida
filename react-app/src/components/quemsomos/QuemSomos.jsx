import styles from "./QuemSomos.module.css"
import { ArrowRight } from "lucide-react"
import QuemSomosImg from "../../images/QuemSomos.jpeg"
export default function QuemSomos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Quem somos</h2>

        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <div className={styles.imagePlaceholder}>
                <img src={QuemSomosImg} alt='quem somos' className={styles.Imagem} />
            </div>
          </div>

          <div className={styles.textContent}>
            <p>
              A Empresa A.R.Almeida Manutenção e Serviços Ltda, foi constituída em Março de 2004 e tem em seu quadro
              profissionais com larga vivência em manutenção, projetos de reforma e modernização de EQUIPAMENTOS DE
              LEVANTAMENTO E MOVIMENTAÇÃO DE CARGA para Indústrias no ramo Siderúrgico, Automobilístico, Alumínio,
              Mineração, Portuário, Hidroelétrico, Papel e Celulose e de Serviços, através de experiência adquirida
              junto as licenciadoras P&H, SUMITOMO, ECL E DEMAG.
            </p>
            <p className={styles.highlight}>
              Estamos capacitados e habilitados a oferecer serviços conforme norma técnica específica para garantir
              qualidade e segurança nos serviços realizados.
            </p>
            <a href="/contato" className={styles.contactLink}>
              Entre em contato <ArrowRight className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
