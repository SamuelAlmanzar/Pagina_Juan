import Header from "../../Components/header/page";
import Welcome from "../Home/_components/Welcome/page"
import Skills from "./_components/Skills/page";
import Testimonies from "./_components/testimonies/page";
import Footer from "../../Components/footer/page";
import Pregunta_registro from "./_components/Registro/page";
const Home = () => {
  return (
    <div>
      <Header />
      <Welcome/>
      <Skills/>
      <Pregunta_registro/>
      <Testimonies/>
      <Footer/>

    </div>
  );
};

export default Home;
