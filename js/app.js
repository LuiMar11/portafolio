(function () {
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
  }
})();

document.addEventListener(
  "DOMContentLoaded",
  () => {
    let boton = document.getElementById("crearpdf");
    let container = document.getElementById("contenedor");

    boton.addEventListener(
      "click",
      (event) => {
        event.preventDefault();
        window.print();
      },
      false
    );

    container.addEventListener(
      "click",
      (event) => {
        boton.style.display = "initial";
      },
      false
    );
  },
  false
);
