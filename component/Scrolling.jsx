import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "./Hero.css";

export const Scrolling = () => {
  return (
    <div className="text-2xl  justify-center my-5 block ">
      <div className="text-2xl lg:text-3xl text-neutral-700 w-full ">
        <Marquee
          speed={40}
          gradient={false}
          gradientColor="#0a0a0a"
          gradientWidth={"100px"}
          className="font-bold uppercase"
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {[
              { name: "HTML", src: "../src/assets/html-5-svgrepo-com.svg" },
              { name: "CSS", src: "../src/assets/css-3-svgrepo-com.svg" },
              { name: "JavaScript", src: "../src/assets/javascript.svg" },
              { name: "TypeScript", src: "../src/assets/typescript-icon-svgrepo-com.svg" },
              { name: "Tailwind CSS", src: "../src/assets/tailwind-svgrepo-com.svg" },
              { name: "Vercel", src: "../src/assets/vercel-fill-svgrepo-com.svg" },
              { name: "Figma", src: "../src/assets/figma-svgrepo-com.svg" },
              { name: "Firebase", src: "../src/assets/firebase-svgrepo-com.svg" },
              { name: "Vite", src: "../src/assets/vite-svgrepo-com.svg" },
              { name: "React", src: "../src/assets/react.svg" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
                className="icon-item"
              >
                <img
                  src={item.src}
                  style={{ marginRight: "5px", maxWidth: "40px" }}
                  className="m-5"
                />
                {item.name}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
