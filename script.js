function showPage(pageId){

  let pages = document.querySelectorAll(".page");

  pages.forEach(p => {
    p.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");

  window.scrollTo(0,0);
}