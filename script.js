const controles = document.getElementById("controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");
controles.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
  texto(value) {
    this.element.innerText = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
};
function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;

  handleStyle[name](value);
  showCss();
  saveValues(name, value);
}

function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach((property) => {
    handleStyle[property](localStorage[property]);
    controles.elements[property].value = localStorage[property];
  });
  showCss();
}

setValues();
