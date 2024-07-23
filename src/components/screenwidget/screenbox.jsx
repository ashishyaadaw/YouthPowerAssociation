import React, { useState } from "react";

function Screenbox({ screenData, setScreenData }) {
  let text = getText(screenData.filepath);

  async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    document.getElementById("screenText").innerHTML = y;
  }
  return (
    <div
      className={`h-full w-full fixed top-0 left-0 right-0 z-50 bg-[#12121267] ${
        screenData.screenbox ? "" : "hidden"
      }`}
    >
      <div className="h-auto min-h-10 top-3 rounded-md absolute w-3/4 bg-white ml-[13%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() =>
            setScreenData({
              screenbox: false,
            })
          }
          class={` w-8 h-8 absolute right-0 top-0 m-1 pt-1 bg-pink-200 rounded-full hover:stroke-slate-950 stroke-red-900 hover:cursor-pointer`}
          fill=""
          viewBox="0 -1 32 39"
          stroke=""
          stroke-width="1"
        >
          <g>
            <path
              fill="#808184"
              d="M16,0C11.726,0,7.708,1.664,4.687,4.687C1.665,7.708,0,11.727,0,16s1.665,8.292,4.687,11.313   C7.708,30.336,11.726,32,16,32s8.292-1.664,11.313-4.687C30.335,24.292,32,20.273,32,16s-1.665-8.292-4.687-11.313   C24.292,1.664,20.274,0,16,0z M26.606,26.606C23.773,29.439,20.007,31,16,31s-7.773-1.561-10.606-4.394S1,20.007,1,16   S2.561,8.227,5.394,5.394S11.993,1,16,1s7.773,1.561,10.606,4.394S31,11.993,31,16S29.439,23.773,26.606,26.606z"
            ></path>
            <path
              fill="#808184"
              d="M22.01,9.989c-0.195-0.195-0.512-0.195-0.707,0L16,15.293l-5.303-5.304c-0.195-0.195-0.512-0.195-0.707,0   s-0.195,0.512,0,0.707L15.293,16L9.99,21.304c-0.195,0.195-0.195,0.512,0,0.707c0.098,0.098,0.226,0.146,0.354,0.146   s0.256-0.049,0.354-0.146L16,16.707l5.303,5.304c0.098,0.098,0.226,0.146,0.354,0.146s0.256-0.049,0.354-0.146   c0.195-0.195,0.195-0.512,0-0.707L16.707,16l5.303-5.304C22.206,10.501,22.206,10.185,22.01,9.989z"
            ></path>
          </g>
        </svg>
        <div id="screenText"></div>
      </div>
    </div>
  );
}

export default Screenbox;
