document.getElementById("js-cookies-manage").onclick = function () {
    var categories = document.getElementById("cookie-categories");
    categories.classList.toggle("active");
    this.classList.toggle("open");
  };