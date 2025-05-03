import CardsServico from "./CardsReparo";
import styles from "./ConteudoReparo.module.css";
import preventiva from "../../images/Preventiva.jpg"; // Substitua com a imagem correta
import corretiva from "../../images/Corretiva.jpg"; // Substitua com a imagem correta
import preditiva from "../../images/Preditiva.jpg"; // Substitua com a imagem correta

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
    description: "Efetuamos manutenções corretivas programadas em paradas de equipamentos, ou com equipes full time efetuando manutenções preventivas e corretivas simultaneamente.",
    imageSrc: corretiva,
  },
  {
    id: 3,
    title: "Manutenção Preditiva",
    description: "Preparamos o equipamento com fichas e planejamento para a implantação de manutenções preditivas.",
    imageSrc: preditiva,
  },
];

export default function ConteudoReparo() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Manutenções</h2>
      <div className={styles.grid}>
        {services.map((service) => (
          <CardsServico
            key={service.id}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>
    </section>
  );
}
