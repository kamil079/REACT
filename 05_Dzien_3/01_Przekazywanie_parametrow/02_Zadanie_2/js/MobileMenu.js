import React, { useState } from "react";
import '../css/style.css'

const MobileMenu = () => {
  const [hideShow, setHideShow] = useState('hide')
  

  const toggle=()=>{
    setHideShow(hideShow ? '' : 'hide')
  }
  return (
    <section className="mobile">
      <header className="mobile-menu">
        <a href="#" className="open-menu" onClick={()=>toggle()} ></a>
        <nav className={hideShow}>
          <ul>
            <li>
              <a href="#">O nas</a>
            </li>
            <li>
              <a href="#">Zespół</a>
            </li>
            <li>
              <a href="#">Produkty</a>
            </li>
            <li>
              <a href="#">Kontakt</a>
            </li>
          </ul>
          <a href="#" className="close-menu" onClick={()=>toggle()}>
            Zamknij menu
          </a>
        </nav>
      </header>
    </section>
  );
};

export default () => {
  return <MobileMenu />;
};
