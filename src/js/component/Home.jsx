
import React from "react";
import Menu from "./Menu";
import Junbotron from "./Junbotron";
import Cards from "./Cards";
import Footer from "./Footer";

import desierto1 from "../../assets/1Desierto_atacama.jpg";
import desierto2 from "../../assets/2Desierto_arabia.jpg";
import desierto3 from "../../assets/3Desierto_sahara.jpg";
import desierto4 from "../../assets/4Desierto_tabernas.jpg";


///create your first component
const Home = () => {
    const menuStart = "Start Bootstrap"
    const menuHome = "Home";
    const menuAbout = "About";
    const menuServices = "Services";
    const menuContact = "Contact";
    const menu = [menuStart, menuHome, menuAbout, menuServices, menuContact];
    const junboTitle = "Una cálida bienvenida!";
    const junboText = "El desierto es un paisaje bioclimático (o bioma) que puede ser cálido o helado y que se caracteriza por tener bajos índices de precipitación, un clima seco, temperaturas extremas y un suelo árido. En los desiertos habitan escasas especies de flora y fauna (y también poblaciones humanas) que pudieron adaptarse a estas duras condiciones de vida.";
    const cardTitleOne = "Desierto de Atacama";
    const cardTextOne = "El desierto de Atacama es el más árido de la Tierra, su superficie ha sido comparada con la de Marte y su intensidad solar con la de Venus, el planeta más caliente del sistema solar. Investigadores han revelado que en un punto de este desierto, se han registrado los rayos de sol más intensos de todo el planeta";
    const cardTitleTwo = "Desierto de Arabia";
    const cardTextTwo = "Hace 400 mil años, el imponente desierto arábigo estaba repleto de vegetación con hipopótamos, ganado salvaje y humanos antiguos. Ni siquiera las dunas perennes del desierto arábigo han estado ahí desde el inicio de los tiempos.";
    const cardTitleThree = "Desierto del Sahara";
    const cardTextThree = "Entre las colinas de África y Arabia, durante los meses más calurosos del año, sopla el simún: un viento venenoso que tiñe de rojo el paisaje, y se adentra hasta los confines más escondidos del Desierto del Sahara. Este fenómeno natural abrasa la superficie con temperaturas que superan los 50ºC, soplando sobre el desierto durante julio y agosto.";
    const cardTitleFour = "Desierto de Tabernas";
    const cardTextFour = "Desde los años 60, el Desierto de Tabernas ha sido el escenario de miles de rodajes cinematográficos y publicitarios, lo que le ha llevado a ser conocido como el 'Hollywood europeo'. Por sus áridos parajes han pasado algunos de los más prestigiosos actores y directores del mundo del cine, como son los casos de Steven Spielberg, Sergio Leone...";
    const footerText = "Copyright © Your WebSite 2024";


    return (
        <body>
            <Menu
                menu={menu}
            />

            <Junbotron
                titleJunbo={junboTitle}
                textJunbo={junboText}
            />

            {/* ----- COMIENZO DE LAS CARDS ----- */}
            <div className="container-fluid contenedor-cards">
                <div className="row fila-cartas">
                    <Cards
                        imagen={desierto1}
                        tituloFoto={cardTitleOne}
                        textoFoto={cardTextOne}
                    />
                    <Cards
                        imagen={desierto2}
                        tituloFoto={cardTitleTwo}
                        textoFoto={cardTextTwo}
                    />
                    <Cards
                        imagen={desierto3}
                        tituloFoto={cardTitleThree}
                        textoFoto={cardTextThree}
                    />
                    <Cards
                        imagen={desierto4}
                        tituloFoto={cardTitleFour}
                        textoFoto={cardTextFour}
                    />
                </div>
            </div>
            <Footer
                textFooter={footerText}
            />
        </body >
    );
};

export default Home;
