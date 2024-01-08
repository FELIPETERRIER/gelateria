import React from "react";

import Rodape from "../../componentes/Rodape";
import Topo from "../../componentes/Topo";
import './style.css'


function Home() {
  return (

    <div className="home">
      <Topo />
      <main>
        <section>
          <div className="banner">
            <div className="banner-text"><h1>Sorvete Artesanal</h1></div>
          </div>
        </section>
        <section>
          <div className="secao-sabores">

            <img src="../../assets/banner-sabores.jpg" alt="Varios sabores de sorvete" />
            <div className="sabores-text">

              <h2>Nosso sabores</h2>
              <span>Novos e deliciosos</span>
              <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
                gelateria todos os nossos produtos são naturais, à base de
                frutas e sem nenhum conservante! Também temos opções sem lactose
                e sem açúcar. Venha conhecer e perceber que tem como o sorvete
                ser delicioso e saudável ao mesmo tempo!</p>
            </div>
          </div>

        </section>

        <section>
          <div className="secao-eventos">
          <div className="eventos-text">
            <h2>Nossos Eventos</h2>
            <span>Delicias com sorvete!</span>
            <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
              prontinhos para te atender e oferecer os melhores eventos com os melhores
              sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
            </p>
            </div>
         
          <img src='../../assets/eventos-image.jpg' alt="imagens de copos de sorvete" />
          </div>
        </section>



        <section>
          <div className="secao-sobre">
            <img src="../../assets/sobre-image.jpg" alt="Jovens brindando com sorvete" />
            <div className="sobre-text">
            <h2>Sobre nós</h2>
            <span>Alegria em cada casquinha!</span>
            <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para o
              nosso cliente e você não pode ficar fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete
              da cidade.
            </p>
            </div>
          </div>



        </section>
      </main>


      <Rodape />
    </div >
  );
}

export default Home;