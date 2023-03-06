import stylize from "./module/stylize.js";

const inputs = document.querySelectorAll("input");

function getInput(input) {
  const component = document.getElementById(input);

  const value = String(component.value);

  return value.length > 0 ? value : "0";
}

const ids = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

inputs.forEach((item) =>
  item.addEventListener("input", () => {
    var borderRadius = "";

    for (let i = 0; i < ids.length; i++) {
      borderRadius += getInput(ids[i]) + " ";
    }

    const css = `
      #box {
        border-radius: ${borderRadius};
      }
    `;

    stylize(css);
  })
);

export default inputs;
