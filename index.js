window.addEventListener("load", () => {
  const columnsElement = document.querySelector("#columns");
  const pageLinks = Array.from(document.querySelectorAll(".pagination > a"));
  for (const link of pageLinks) {
    const index = parseInt(link.href.charAt(link.href.length - 1), 10);
    link.addEventListener("click", () => {
      columnsElement.style.transform = `translateX(${-210 * (index - 1)}mm)`;
    });
    if (window.location.hash === `#${index}`) {
      link.click();
    }
  }
});
