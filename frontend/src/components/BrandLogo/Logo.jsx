import React from "react";

function Logo({width, height, fontSize, subTextSize}) {
  const logoSize = {width: width, height: height, fontSize: fontSize}
  const subTextStyle = {fontSize: subTextSize}
  return (
    <section className="flex flex-col items-center justify-center py-1">
      <section className="relative">
        <section style={logoSize} className="bg-neutral-800 font-times w-28 p-2 text-white font-thin text-4xl flex items-center justify-center text-center gap-1">
          <span>R</span>
          <span className="pb-1">|</span>
          <span>G</span>
        </section>
      </section>
      <h2 style={subTextStyle} className="font-xs text-[12px] uppercase tracking-tighter py-0">Royar Gayrimenkul</h2>
    </section>
  );
}

export default Logo;
