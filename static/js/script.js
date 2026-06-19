const mobile = document.getElementById("mobile-nav");
const open = document.getElementById("open")
const close = document.getElementById("close")
const nav = document.getElementById("nav")
const abt = document.getElementById("abt")
const apl = document.getElementById("apl")




const jet = document.getElementById("jet-cursor");


let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let jetX = mouseX;
let jetY = mouseY;

let angle = 0;
const trail = [];

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {

    /* Smooth follow */
    jetX += (mouseX - jetX) * 0.15;
    jetY += (mouseY - jetY) * 0.15;

    /* Direction */
    const dx = mouseX - jetX;
    const dy = mouseY - jetY;

    angle = Math.atan2(dy, dx);

    /* Position plane */
    jet.style.left = `${jetX}px`;
    jet.style.top = `${jetY}px`;

    jet.style.transform =
        `translate(-50%, -50%) rotate(${angle}rad)`;

    

    requestAnimationFrame(animate);
}

animate();


mobile.addEventListener("click", function () {
  open.classList.toggle("hidden")
  close.classList.toggle("hidden")
  nav.classList.toggle("hidden")


});


window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        banner.classList.add(
            "fixed",
            "top-0",
            "left-0",
            "right-0",
            "bg-yellow-600",
            "shadow-lg",
            "py-4"
        );

        banner.classList.remove("py-12");
    } else {
        banner.classList.remove(
            "fixed",
            "top-0",
            "left-0",
            "right-0",
            "bg-yellow-600",
            "shadow-lg",
            "py-4"
        );

        banner.classList.add("py-12");
    }
});


abt.addEventListener("click", () => {
  nav.classList.toggle("hidden")
  open.classList.toggle("hidden")
  close.classList.toggle("hidden")
});


apl.addEventListener("click", () => {
  nav.classList.toggle("hidden")
  open.classList.toggle("hidden")
  close.classList.toggle("hidden")
});
