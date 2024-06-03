window.addEventListener("load", (event) => {
  document
    .querySelector("#exportButton")
    .addEventListener("click", exportPageAsPdf);
});

function exportPageAsPdf() {
  const htmlElement = document.querySelector("#content");
  html2pdf().from(htmlElement).save("resume.pdf");
}