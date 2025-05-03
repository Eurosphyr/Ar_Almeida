import CardsServico from "./CardsServico";
import styles from "./ConteudoCard.module.css";
import reformaequip from "../../images/ReformaEquip.jpeg"; 
import reformarolamento from "../../images/ReformaRolamento.jpg";
import pecasreposicao from "../../images/PecasReposicao.jpg";
import projetosengenharia from "../../images/ProjetosEngenharia.jpg";
import relocacaoequip from "../../images/RelocacaoEquip.jpg";
import montagemequip from "../../images/MontagemEquip.jpg";
import consultatecnica from "../../images/ConsultaTecnica.jpg";
import reparocomponente from "../../images/ReparoComponente.jpg";

const services = [
  {
    id: 1,
    title: "Reformas de Equipamentos",
    description: "A reforma e/ou modernização inclui desde o levantamento de dados, elaboração de escopo de fornecimento, o projeto preliminar, o detalhamento do projeto, o fornecimento dos materiais necessário e a montagem dos mesmos no equipamento com mão de obra própria.",
    imageSrc: reformaequip,
  },
  {
    id: 2,
    title: "Reformas de Caminhos de Rolamento",
    description: "A reforma de Caminho de Rolamento compreende desde o levantamento topográfico e inspeções das condições do mesmo, o projeto de melhorias, a recomendação adequada a cada situação e a execução da totalidade dos serviços incluindo materiais e mão de obra.",
    imageSrc: reformarolamento,
  },
  {
    id: 3,
    title: "Peças de reposição e componentes",
    description: "Fornecemos peças de reposição e/ou componentes para pontes rolantes de todos os fabricantes, nacionais e importados. Nossa engenharia de desenvolvimento está preparada para atender as técnicas modernas de materiais e tratamento térmico, objetivando maior durabilidade e melhor desempenho. Para Pontes Rolante Villares fornecemos todas as peças conforme desenho original.",
    imageSrc: pecasreposicao,
  },
  {
    id: 4,
    title: "Projetos de Engenharia",
    description: "Nosso departamento de engenharia está capacitado a fornecer os seguintes trabalhos: Aumento de capacidade (repotenciação), Alteração de velocidade dos movimentos de levantamento e translação, Modificação da altura de levantamento, Aumento ou diminuição no vão da ponte.",
    imageSrc: projetosengenharia,
  },
  {
    id: 5,
    title: "Relocação de Equipamentos",
    description: "Relocação de equipamentos dentro da mesma planta com ou sem alteração das características da ponte (modificação de vão, altura de levantamento e capacidade).",
    imageSrc: relocacaoequip,
  },
  {
    id: 6,
    title: "Montagem de Equipamentos Novos",
    description: "Montagem de pontes rolantes, caminhos de rolamentos e eletrificação longitudinal de equipamentos novos de fabricação nacional e importada.",
    imageSrc: montagemequip,
  },
  {
    id: 7,
    title: "Consulta Técnica",
    description: "Fornecemos laudos técnicos sobre: Inspeções retratando as condições do equipamento em nível de Segurança Operacional, conforme normas CMAA, AISE, DIN e ABNT. Inspeção periódica em ganchos tipo anzol, ancora e lamelares. Acompanhamento operacional objetivando melhorias e/ou solução de problemas específicos. Curso para Operadores sobre Inspeção Diária e Segurança Operacional.",
    imageSrc: consultatecnica,
  },
  {
    id: 8,
    title: "Reparos de Componentes",
    description: "Executamos reparos em componentes, em nossas instalações, tais como: Freios, Redutores, Talhas elétricas, Caixa de Gancho.",
    imageSrc: reparocomponente,
  },
];

export default function ConteudoCard() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Nossos serviços</h2>
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
