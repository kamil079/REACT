import React from "react";
import '../css/style.css'

const MobileMenu = () => {
  return (
    <section class="mobile">
      <header class="mobile-menu">
        <a href="#" class="open-menu"></a>
        <nav>
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
          <a href="#" class="close-menu">
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
