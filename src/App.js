import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

/*Scenes */
import Navbar from "./scenes/Navbar";
import Landing from "./scenes/Landing";
import Footer from "./scenes/Footer";

import VLibras from "@djpfs/react-vlibras";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isDesktop = useMediaQuery("(min-width: 1366px)");
  return (
    /* Header */
    <>
      <div className="header dark:bg-[#F5EEE4] bg-[#000a1f] h-[auto]">
        <div className="wrapper max-w-[1366px] my-0 mx-[auto] items-center">
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>

        <div className="max-w-[1366px] mx-[auto] items-center">
          {isDesktop && <Landing selectedPage={setSelectedPage} />}
        </div>
        <div className="max-w-[1366px] mx-[auto] items-center">
          {isDesktop && (
            <Footer
              selectedPage={setSelectedPage}
              className="max-w-[1366px] mx-[auto] items-center"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
