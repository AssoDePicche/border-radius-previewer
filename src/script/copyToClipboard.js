import copyCSS from "./module/copyCSS.js";

const copy = document.getElementById("copy");

copy.addEventListener("click", () => {
  const box = document.getElementById("box");

  copyCSS(box);
});

export default copy;
