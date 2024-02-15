import courses from "../../assets/images/home/courses.jpg";
import cuisine from "../../assets/images/home/cuisine.jpg";
import devoirs from "../../assets/images/home/devoirs.jpg";
import jardinier from "../../assets/images/home/jardinier.jpg";
import menage from "../../assets/images/home/menage.jpg";
import plombier from "../../assets/images/home/plombier.jpg";
import { InformationContainer } from "./style.jsx";
import { Container } from "./style.jsx";
import { Title } from "./style.jsx";
import { Description } from "./style.jsx";
import { ImageContainer } from "./style.jsx";
import { Image } from "./style.jsx";

function Home() {
  return (
    <Container className="container">
      <div className="row">
        <Title className="col-12 mt-5 text-center">
          ECHANGEO
          <br />
          Simplifiez votre vie avec des services entre particuliers!
        </Title>
      </div>
      <InformationContainer className="row d-flex col-12 justify-content-center">
        <div className="row col-12 justify-content-center">
          <ImageContainer className="col-4 col-md-3">
            <Image src={devoirs} alt="" />
          </ImageContainer>

          <ImageContainer className="col-4 col-md-3">
            <Image src={cuisine} alt="" />
          </ImageContainer>
          <ImageContainer className="col-4 col-md-3">
            <Image src={courses} alt="" />
          </ImageContainer>
        </div>
        <div className="row col-12 justify-content-center">
          <Description className="col-12 col-md-9">
            Echangeo est la plateforme idéale pour trouver des prestataires de
            services fiables et abordables pour tous vos besoins quotidiens. Que
            vous ayez besoin d'aide pour le ménage, l'électricité, la plomberie,
            le montage de meubles, le jardinage ou tout autre service, Echangeo
            vous met en relation avec des particuliers compétents et disponibles
            dans votre région !
          </Description>
        </div>
        <div className="row col-12 justify-content-center">
          <ImageContainer className="col-4 col-md-3">
            <Image src={jardinier} alt="" />
          </ImageContainer>
          <ImageContainer className="col-4 col-md-3">
            <Image src={menage} alt="" />
          </ImageContainer>
          <ImageContainer className="col-4 col-md-3">
            <Image src={plombier} alt="" />
          </ImageContainer>
        </div>
      </InformationContainer>
    </Container>
  );
}

export default Home;
