import React, { useEffect, useState } from "react";

const FontChange = () => {
  const [font, setFont] = useState(false);

  useEffect(() => {});

  const handleFontChange = () => {
    console.log("clique");
  };

  return (
    <button
      onClick={handleFontChange}
      className="change-size flex w-[27.75px] h-[26.8px] flex-row order-4  flex-grow-0"
    >
      <span className="font-Lexend flex w-[15.6px] h-[12.8px] leading-[1.9] left-0 top-0 text-[14px] text-[#FEAC39]">
        A <p className=" leading-[1.3] flex text-[18px] text-white">A</p>
      </span>
    </button>
  );
};

export default FontChange;
