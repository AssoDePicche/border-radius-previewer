export default function copyCSS(component) {
  const style = getComputedStyle(component).borderRadius;

  navigator.clipboard.writeText(`border: ${style};`);
}
