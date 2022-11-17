let boton = document.querySelector("button");

boton.addEventListener("click", () => {
    alert("Click en el botón");
});

$("document").ready(() => {
    $("button").click(() => {
        console.log("Hola, estoy utilizando JQuery");
    })
});
