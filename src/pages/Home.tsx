import { Element } from "react-scroll";

const Home: React.FC = () => {
  return (
    <div>
      <Element
        name="inicio"
        className="h-screen bg-blue-100 flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold">Inicio</h1>
      </Element>

      <Element
        name="actualidad"
        className="h-screen bg-green-100 flex items-center justify-center"
      >
        <h2 className="text-3xl font-semibold">Actualidad</h2>
      </Element>

      <Element
        name="noticias"
        className="h-screen bg-yellow-100 flex items-center justify-center"
      >
        <h2 className="text-3xl font-semibold">Noticias</h2>
      </Element>

      <Element
        name="participacion"
        className="h-screen bg-purple-100 flex items-center justify-center"
      >
        <h2 className="text-3xl font-semibold">Participación Ciudadana</h2>
      </Element>

      <Element
        name="proyectos"
        className="h-screen bg-pink-100 flex items-center justify-center"
      >
        <h2 className="text-3xl font-semibold">Proyectos</h2>
      </Element>
    </div>
  );
};

export default Home;
