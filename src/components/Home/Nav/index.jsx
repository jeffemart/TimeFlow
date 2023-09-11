import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Importe o componente Link

function Nav() {
  
  const menuRef = useRef(null);
  const menuBarRef = useRef(null);
  const iconMenuRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;
    const menuBar = menuBarRef.current;
    const iconMenu = iconMenuRef.current;

    const toggleMenu = () => {
      if (iconMenu.getAttribute("src") === 'imagens/menu.png') {
        iconMenu.setAttribute("src", "imagens/close.png");
      } else {
        iconMenu.setAttribute("src", "imagens/menu.png");
      }

      menu.classList.toggle('active');
    };

    menuBar.addEventListener('click', toggleMenu);

    return () => {
      menuBar.removeEventListener('click', toggleMenu);
    };
  }, []);
  
  return(
    <>
      {/* nav */}
      <nav>
        <div className="logo">
          <Link to="/">Create.co</Link> {/* Substitua o <a> pelo <Link> */}
        </div>
        <ul ref={menuRef}>
          <li><Link to="/">Home</Link></li> {/* Substitua o <a> pelo <Link> */}
          <li><Link to="/blog">Blog</Link></li> {/* Substitua o <a> pelo <Link> e defina a rota correta */}
          <button><Link to='/login'>Login</Link></button>
        </ul>
        <div className="menu-icon" ref={menuBarRef}>
          <img src="imagens/menu.png" alt="Menu Icon" ref={iconMenuRef} />
        </div>
      </nav>
      {/* end nav */}
    </>
  )
}

export default Nav;