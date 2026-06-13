const mobile = document.getElementById("mobile-nav");
const open = document.getElementById("open")
const close = document.getElementById("close")
const nav = document.getElementById("nav")
const abt = document.getElementById("abt")
const apl = document.getElementById("apl")

mobile.addEventListener("click", function () {
  open.classList.toggle("hidden")
  close.classList.toggle("hidden")
  nav.classList.toggle("hidden")


});


window.addEventListener("scroll", () => {
  if (window.scrollY > hero.offsetHeight - 100) {
    banner.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "right-0",
      "z-50",
      "backdrop-blur-md",
      "bg-black/70",
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
      "z-50",
      "backdrop-blur-md",
      "bg-black/70",
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
