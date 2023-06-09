import { Navbar } from "../components/Navbar";

export function useScrollDirection() {
  var lastScrollTop = 0;
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-80px";
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
  });
}
