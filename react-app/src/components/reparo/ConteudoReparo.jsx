import { memo } from "react"
import CardsServico from "./CardsReparo"
import styles from "./ConteudoReparo.module.css"
import preventiva from "../../images/Preventiva.jpg"
import corretiva from "../../images/Corretiva.jpg"
import preditiva from "../../images/Preditiva.jpg"

// Using array of objects for better data management
const services = [
  {
    id: 1,
    title: "Manutenção Preventiva",
    description: "Nossas equipes efetuam manutenções preventivas mediante contrato, com intervenções periódicas.",
    imageSrc: preventiva,
  },
  {
    id: 2,
    title: "Manutenção Corretiva",
    description:
      "Efetuamos manutenções corretivas programadas em paradas de equipamentos, ou com equipes full time efetuando manutenções preventivas e corretivas simultaneamente.",
    imageSrc: corretiva,
  },
  {
    id: 3,
    title: "Manutenção Preditiva",
    description: "Preparamos o equipamento com fichas e planejamento para a implantação de manutenções preditivas.",
    imageSrc: preditiva,
  },
]

const ConteudoReparo = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Manutenções</h2>
      <div className={styles.grid}>
        {/* Using array methods for cleaner rendering */}
        {services.map(({ id, title, description, imageSrc }) => (
          <CardsServico key={id} title={title} description={description} imageSrc={imageSrc} />
        ))}
      </div>
    </section>
  )
}

// Export memoized component
export default memo(ConteudoReparo)
