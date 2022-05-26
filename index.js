window.addEventListener("load", () => {
  const columnsElement = document.querySelector("#columns");
  document.querySelector("input").addEventListener("change", (evt) => {
    columnsElement.style.transform = `translateX(${-210 * evt.target.value}mm)`;
  });
});
