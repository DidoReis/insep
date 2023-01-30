import Separator from "../components/Separator";

const Footer = () => {
  return (
    <footer className="max-w-[1366px] h-[330px] my-0 mx-auto bottom-[1px] bg-[#2E231E] ">
      <div className="flex text-white bg-[#2E231E] gap-[80px] pl-[56px]">
        {/* Logo Session */}
        <div className="Logo-footer">
          <div className="Images flex">
            <img
              src="assets/img/logo-footer.svg"
              alt="Logo Footer"
              className="relative w-[99px] h-[87px] top-[19px]"
            />
            <img
              src="assets/img/insep-svg.svg"
              alt="Insep-footer"
              className="w-[175px] h-[48.16px] left-[178px] ml-[23px] mt-[40.14px]"
            />
          </div>
          <p className="font-Heebo not-italic text-[13px] leading-[16px] left-[4.1px] right-[74.16px] top-[31.11px] relative bottom-[44.22%]">
            Desenvolver talentos, habilidades e competências,
            <br />
            este é o nosso ideal!
          </p>
        </div>

        {/* Social-media-icons */}
        <div className="container w-[226px] h-[60.2px] left-[433px] mt-[40.14px]">
          <h3 className="w-[226px] font-Heebo not-italic font-bold text-[16px] leading-[28px]">
            Nos encontre nas redes sociais
          </h3>
          <div className="logos-sociais flex pt-2">
            <a href="https://www.facebook.com" className="pr-6">
              <img src="assets/img/facebook.svg" alt="Facebook-Logo" />
            </a>
            <a href="https://www.instagram.com" className="pr-6">
              <img src="assets/img/instagram.svg" alt="Instagram-Logo" />
            </a>
            <a href="https://www.linkedin.com" className="pr-6">
              <img src="assets/img/linkedin.svg" alt="Linkedin-Logo" />
            </a>
          </div>
        </div>
        {/* Details-Session */}
        <div className="detalhes w-[239px] h-[148.5px] left-[739px] mt-[40.14px]">
          <h3 className="font-bold text-[16px] leading-[28px]">Destaques</h3>
          <div className="images-destaques flex py-[10px] pr-[10px]">
            <img src="assets/img/dest1.png" alt="destaque-1" />
            <p className="font-Heebo absolute text-[14px] w-[194px] h-[24px] ml-10 mt-1 font-normal">
              A arte esquecida dos artistas...
            </p>
          </div>
          <div className="images-destaques flex py-[10px] pr-[10px]">
            <img src="assets/img/dest2.png" alt="destaque-1" />
            <p className="font-Heebo absolute text-[14px] w-[194px] h-[24px] ml-10 mt-1 font-normal">
              A arte esquecida dos artistas...
            </p>
          </div>
          <div className="images-destaques flex py-[10px] pr-[10px]">
            <img src="assets/img/dest3.png" alt="destaque-1" />
            <p className="font-Heebo absolute text-[14px] w-[194px] h-[24px] ml-10 mt-1 font-normal">
              A arte esquecida dos artistas...
            </p>
          </div>
        </div>
        {/* Address-session */}
        <div className="address w-[252px] h-[108.37px] left-[1058px] mt-[40.14px]">
          <h3 className="font-Heebo font-bold text-[16px] leading-[28px]">
            Endereço
          </h3>
          <h4 className="font-semibold font-Heebo text-[15px] leading-[16px] mt-[6px]">
            Sede administrativa
          </h4>
          <p className="font-Heebo font-normal text-[13px] leading-[16px] mt-[8.03px]">
            Rua Jasmim da Espanha, 215 - Sobreloja,
            <br />
            Jardim Brasília, São Paulo - Sp, 03585-040
          </p>
        </div>
      </div>
      <div className="w-[975px] h-[1px] mt-[34.05px] mb-2 bg-white flex"></div>
      <div className=" my-0 mx-auto bottom-1">
        <div className="relative w-[815px] left-[163px]">
          <div className="menu-footer flex">
            <ul className="flex font-Heebo text-[15px] font-medium leading-[16px] justify-between h-[40.14px] items-center gap-8 text-white mt-[17.6px] mb-[17.6px]">
              <li>
                <a href="#Cursos">Cursos</a>
              </li>
              <li>
                <a href="#">Parcerias</a>
              </li>
              <li>
                <a href="#">Mídia kit</a>
              </li>
              <li>
                <a href="#">Colabore Conosco</a>
              </li>
              <li>
                <a href="#">Politica & Regras de Uso</a>
              </li>
              <div className="separator-lateral absolute w-[40.14px] rotate-90 h-[1px] left-[624px] bg-white"></div>
            </ul>

            <div className="copyright font-Heebo text-[13px] leading-[20px] font-medium ml-[135px] text-white mt-[27.6px] mb-[17.6px]">
              © INSEP | 2022 <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[975px] h-[1px] mt-2 mb-[18.06px] bg-white"></div>
    </footer>
  );
};

export default Footer;
