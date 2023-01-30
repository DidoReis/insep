import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

/* Images */
import leitura from "../assets/img/leitura.png";
import vlibras from "../assets/img/vlibras.png";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("min-width: 1366px");

  return (
    <section
      id="home"
      className="HERO-SECTION  flex w-[100%] items-center justify-between md:flex md:justify-between md:items-center md:h-full "
    >
      {/* Image Section */}

      <div className=" left-[100%] right-[-100%] top-0 bottom-0 Right-hero h-[515.99] py-0  md:order-2 flex justify-between z-10  md:mt-32">
        {isAboveMediumScreens ? (
          <div
          /*  className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]" */
          >
            <img
              alt="profile"
              className="z-10 max-w-[400px] md:max-w-[600px]"
              src="assets/img/rightimage.svg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="
            w-[558px] h-[516px] top-[122px] pb-12 mr-20"
            src="assets/img/rightimage.svg"
          />
        )}
        <div className="icons-tools ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: -70 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={leitura}
              alt="leitura de tela"
              className="w-[40px] h-[40px] top-[184px] left-[1294px] mb-4 cursor-pointer"
            />

            <img
              src={vlibras}
              alt="leitura de tela"
              className="w-[40px] h-[40px] top-[184px] left-[1294px] cursor-pointer"
            />
          </motion.div>
        </div>
      </div>

      {/* Main Section */}

      <div className="p-[119px] z-30 basis-2/5 mt-12 md:mt 32">
        {/* Headings */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="md:text-start z-10 font-Lexend font-light not-italic text-[48px] leading-[60px] dark:text-[#46382F] text-[#ffffff] w-[360px ] h-[123px] left-[119px] top-[205px]">
            Que bom ter
            <br />
            você aqui!
          </h1>
          <p className="font-Lexend font-medium text-[14px] leading-[24px] dark:text-[#46382f] text-[#ffffff] h-[98px] w-[360px] left-[119px] top-[360px] z-10 text-center md:text-start">
            O <b>INSEP</b> é uma instituição ligada ao terceiro setor, composta
            majoritariamente por pessoas com deficiência. Seu apoio e
            contribuição é muito importante pra nós.
          </p>
        </motion.div>
        {/* Button Contribua */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            onClick={() => setSelectedPage("contato")}
            href="#contact"
          >
            <button className="BTN text-center font-Lexend mt-[63px] py-[12px] px-[34px] rounded-[24px] font-semibold text-[14px] tracking-[0.18px] items-center text-[#46382f] inline-block  bg-[#ff9500]">
              <p className="after:content-[url('assets/img/next.png')] after:absolute after:w-[14px] after:h-[14px] after:flex-none mr-2 after:items-center leading-[17.5px] after:p-1 after:top-[55%]">
                Contribua conosco
              </p>
            </button>
          </AnchorLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
