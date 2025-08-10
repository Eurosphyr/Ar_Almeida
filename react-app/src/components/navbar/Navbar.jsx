import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../images/ARAlmeida.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles['navbar-logo-container']}>
        <img src={Logo} alt='Logo' />
        <p>A.R. Almeida</p>
      </div>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li>
            <a href='/#'>Serviços</a>
          </li>
          <li>
            <a href='/#'>Informações</a>
          </li>
          <li>
            <Link to="/parceiros">
              <button className={styles.orcamentoButton}>Parceiros</button>
            </Link>
          </li>
          <li>
            <Link to="/orcamento">
              <button className={styles.orcamentoButton}>Orçamento</button>
            </Link>
          </li>
        </ul>
      </nav>
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;
