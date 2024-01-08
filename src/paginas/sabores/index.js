import React from "react";


import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";

import './style.css'


function Sabores() {
  return (

    <div className="sobre">
      <Topo />
      <main>
        <section>
          <div className="banner-sabores">
            <h1>Nossos sabores</h1>
          </div>

        </section>
        <section >
          <h1>SABORES DE SORVETE</h1>
          <div className="cards">
          <div className="card">
            <img src="assets/sabor-oreo.png" alt="Sorvete de oreo"/>
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>
          <div className="card">
          <img src="assets/sabor-pistache.png" alt="sorvete sabor pistache"/>
              <h3>Sorvete Pistache</h3>
              <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>
          <div className="card">
          <img src="assets/sabor-cookies-avela.png" alt="sorvete sabor cookie com avelã"/>
              <h3>Sorvete Cookies & Avelã</h3>
              <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
          <div className="card">
          <img src="assets/sorbet-kiwi.png" alt="sorbet sabor kiwi"/>
              <h3>Sorvete de Kiwi</h3>
              <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
          </div>
          <div className="card">
          <img src="assets/sorbet-morango.png" alt="sorbet sabor morango"/>
              <h3>Sorvete de Morango</h3>
              <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div className="card">
          <img src="assets/sorbet-limao.png" alt="sorbet limão siciliano"/>
              <h3>Sorvete de Limão Siciliano</h3>
              <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p> 
          </div>
          </div>
        </section>
      </main>
      <Rodape />
    </div>
  );
};


export default Sabores;