import Navbar from "./Navbar";
import Footer from "./Footer";
import useMediaQuery from "../hooks/useMediaQuery";

const QuemSomos = ({ setSelectedpage }) => {
  const isAboveMediumScreen = useMediaQuery("min-width: 1366px");
  return (
    <section
      id="quem somos"
      className="flex w-[100%] items-center justify-between md:flex md:justify-between md:items-center md:h-full"
    >
      <Navbar />
      <div className="title">
        <h1>Quem Somos</h1>
      </div>
    </section>
  );
};

export default QuemSomos;
