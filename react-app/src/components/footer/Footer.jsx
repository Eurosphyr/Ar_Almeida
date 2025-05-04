import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.info}>
                <p>Razão Social: A.R.Almeida Manutenção e Serviços Ltda</p>
                <p>Fundação: 31 / 03 / 2004</p>
                <p>CNPJ: 06.220.494/0001-04</p>
                <p>CMC: 159.637</p>
                <p>Rua: Tupinambás N° 323</p>
                <p>Vila Alzira – Santo André – SP</p>
                <p>CEP: 09195 – 110</p>
                <p>Fone/Fax: (11) 4427-5941 - (11) 99991-9729</p>
                <p>e-mail: a.r.almeida@uol.com.br</p>
            </div>
            <div className={styles.actions}>
                <button>Contato 1</button>
                <button>Contato 2</button>
            </div>
        </div>
    </div>
  )
}

export default Footer