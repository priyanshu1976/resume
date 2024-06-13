const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function movecircle() {
  let circle = document.getElementById("minicircle");
  window.addEventListener("mousemove", function (del) {
    let x = del.clientX;
    let y = del.clientY;
    circle.style.transform = `translate(${x}px , ${y}px)`;
  });
}
movecircle();
