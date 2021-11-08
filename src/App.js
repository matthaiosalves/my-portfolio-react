import React from 'react';
import './App.css';

function App() {

  return (
    <>
      <div className="container">

        <section className="section-1 center" id="section-1">
          <h1 className="section-1-heading">
            Front-End Developer
          </h1>
          <img src="https://raw.githubusercontent.com/matthaiosalves/me/main/matheusalves.jpg" className="person-img" alt="a"/>
          <h3 className="person-name">Matheus Alves</h3>
          <a href="#section-3" className="section-1-btn">Projetos</a>
        </section>

        <nav className="navbar center">
          <a href="#section-1" className="navbar-link">Início</a>
          <a href="#section-2" className="navbar-link">Sobre</a>
          <a href="#section-3" className="navbar-link">Portfolio</a>
          <a href="#section-4" className="navbar-link">Contato</a>
        </nav>

        <section className="section-2" id="section-2">
          <h1 className="section-heading section-2-heading">Hard Skills</h1>
          <div className="progress-bars-wrapper">

            <div className="progress-bar">
              <p className="progress-text">
                React
              </p>
              <div className="progress-percent"></div>
            </div>

            <div className="progress-bar">
              <p className="progress-text">
                Vanilla
              </p>
              <div className="progress-percent"></div>
            </div>

            <div className="progress-bar">
              <p className="progress-text">
                Electron
              </p>
              <div className="progress-percent"></div>
            </div>

            <div className="progress-bar">
              <p className="progress-text">
                PHP
              </p>
              <div className="progress-percent"></div>
            </div>

            <div className="progress-bar">
              <p className="progress-text">
                MySQL
              </p>
              <div className="progress-percent"></div>
            </div>

            <div className="progress-bar">
              <p className="progress-text">
                Figma
              </p>
              <div className="progress-percent"></div>
            </div>

          </div>
          <div className="services">
            <div className="service">
              <i className="far fa-lightbulb"></i>
              <h2 className="service-heading">Criatividade</h2>
            </div>
            <div className="service">
              <i className="fas fa-cut"></i>
              <h2 className="service-heading">Solução de problemas</h2>
            </div>
            <div className="service">
              <i className="fas fa-tachometer-alt"></i>
              <h2 className="service-heading">Eficácia</h2>
            </div>
            <div className="service">
              <i className="fas fa-rocket"></i>
              <h2 className="service-heading">Dinâmico</h2>
            </div>
          </div>
        </section>

        <section className="section-3" id="section-3">
          <h1 className="section-heading section-3-heading">Meus Projetos</h1>
          <div className="projects-wrapper center">

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">CSS Effect Snow</h2>
                <h4 className="project-technologies">HTML / CSS </h4>
              </div>
              <img src="project-1.png" className="project-img" alt="a"/>
              <a
                href="https://matthaiosalves.github.io/Hinata/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Website El Club</h2>
                <h4 className="project-technologies">HTML / CSS </h4>
              </div>
              <img src="project-2.png" className="project-img" alt="a"/>
              <a
                href="https://elclubhb.netlify.app/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Online library</h2>
                <h4 className="project-technologies">HTML / CSS / JS / JQuery</h4>
              </div>
              <img src="project-3.png" className="project-img" alt="a"/>
              <a
                href="https://matthaiosalves.github.io/livros/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">CSS Effect Rain</h2>
                <h4 className="project-technologies">HTML / CSS</h4>
              </div>
              <img src="project-4.png" className="project-img"alt="a" />
              <a
                href="https://matthaiosalves.github.io/chuva/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">CSS Effect Heart</h2>
                <h4 className="project-technologies">HTML / CSS </h4>
              </div>
              <img src="project-5.png" className="project-img" alt="a"/>
              <a
                href="https://matthaiosalves.github.io/Heart/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Welcome Page</h2>
                <h4 className="project-technologies">HTML / CSS / JS</h4>
              </div>
              <img src="project-6.png" className="project-img" alt="a"/>
              <a
                href="https://elclubhb.netlify.app/join/index.html"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Cara ou coroa</h2>
                <h4 className="project-technologies">HTML / CSS / JS</h4>
              </div>
              <img src="call-or-put.png" className="project-img" alt="a"/>
              <a
                href="https://call-or-put.netlify.app/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Jornal FA</h2>
                <h4 className="project-technologies">HTML / CSS / JS</h4>
              </div>
              <img src="img13.png" className="project-img" alt="a" />
              <a
                href="https://jornalfahb.blogspot.com/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Bella Zen</h2>
                <h4 className="project-technologies">HTML / CSS / JS</h4>
              </div>
              <img src="bella-zen.png" className="project-img" alt="a"/>
              <a
                href="https://bella-zen-spa.netlify.app/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">PodCast | UI/UX</h2>
                <h4 className="project-technologies">HTML / CSS / VanillaJs</h4>
              </div>
              <img src="podcast.png" className="project-img" alt="a"/>
              <a
                href="https://podcast-player-rdb.netlify.app/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Araujo Store</h2>
                <h4 className="project-technologies">HTML / CSS / JS</h4>
              </div>
              <img src="araujo.png" className="project-img" alt="a"/>
              <a
                href="https://araujo-store-uniplan.netlify.app/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Docsneakers</h2>
                <h4 className="project-technologies">HTML / CSS / JS</h4>
              </div>
              <img src="doc.png" className="project-img" alt="Docsneakers"/>
              <a
                href="https://docsneakers.netlify.app/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Máfia da Batata</h2>
                <h4 className="project-technologies">HTML / CSS / Vanilla</h4>
              </div>
              <img src="https://i.imgur.com/cBKujmj.gif" className="project-img" alt="a"/>
              <a
                href="https://mafia-da-batata.netlify.app/"
                className="project-link"
                
              >Visitar</a
              >
            </div>

            <div className="project">
              <div className="project-text">
                <h2 className="project-name">Controle Financeiro</h2>
                <h4 className="project-technologies">Reactjs | TypeScript</h4>
              </div>
              <img src="https://i.imgur.com/TdPMfym.gif" className="project-img" alt="a"/>
              <a
                href="https://controle-de-financas.netlify.app/"
                className="project-link"
                
              >Visitar</a
              >
            </div>


          </div>
        </section>

        <footer className="section-5 center" id="section-4">
          <div className="social-media">
            <a href="https://github.com/matthaiosalves" className="social-media-link">
              <i className="fab fa-github-square"></i>
            </a>
            <a href="https://www.instagram.com/MatthaiosAlves/" className="social-media-link">
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
          <p className="copyright">
            Desenvolvido por Matheus Alves
          </p>

        </footer>

        <div className="contato">
          <div className="wrapper">
            <a href="https://api.whatsapp.com/send?phone=5561985811224&text=Ol%C3%A1%2C%20estou%20interessado%20em%20vossos%20servi%C3%A7os%3B1" >
              <img src="zap.png" alt="a"/>
            </a>
          </div>
        </div>

      </div>

    </>
  );

}

export default App;
