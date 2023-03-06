export default function stylize(css) {
  const style = document.createElement("style");

  style.innerHTML = `${css}`;

  document.head.appendChild(style);
}
