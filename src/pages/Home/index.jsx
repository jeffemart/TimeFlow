import React from "react";
import { Link } from "react-router-dom"; // Importe o componente Link
import "./index.css";
import undrawGrandSlam from "../../assets/images/undraw_grand_slam_84ep.svg";
import Nav from "../../components/Home/Nav";
import Footer from "../../components/Home/Footer";

function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <div className="text-bx">
          <h1>
            {" "}
            Titulo do negocio <b> Subtítulo destaque </b>{" "}
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>

          <div className="input-bx">
            <input type="email" placeholder="Endereço de email" />
            <button>Ver Mais</button>
          </div>

          <div className="medias-socias">
            <Link to="#">
              <i className="fa fa-instagram"></i>
            </Link>{" "}
            {/* Substitua o <a> pelo <Link> */}
            <Link to="#">
              <i className="fa fa-facebook"></i>
            </Link>{" "}
            {/* Substitua o <a> pelo <Link> */}
            <Link to="#">
              <i className="fa fa-twitter"></i>
            </Link>{" "}
            {/* Substitua o <a> pelo <Link> */}
            <Link to="#">
              <i className="fa fa-youtube-play"></i>
            </Link>{" "}
            {/* Substitua o <a> pelo <Link> */}
            <Link to="#">
              <i className="fa fa-whatsapp"></i>
            </Link>{" "}
            {/* Substitua o <a> pelo <Link> */}
          </div>
        </div>

        <div className="img-bx">
          <img src={undrawGrandSlam} alt="Imagem de marketing" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
