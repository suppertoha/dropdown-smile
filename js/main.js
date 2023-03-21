window.addEventListener('load', function () {


  //! accordion
 
  document.querySelectorAll(".accordion-start-js").forEach((el) => {

    el.addEventListener("click", () => {
      const elem=  document.querySelectorAll(".accordion-content-js")

      elem.forEach((elem) => elem.classList.remove("open"));
      
      el.classList.toggle("open");
      let content = el.nextElementSibling;
      if (content.classList.contains("open")) {
        console.log("test");
        document
          .querySelectorAll(".accordion-content-js")
          .forEach((el) => (el.style.maxHeight = null));
        document
          .querySelectorAll(".accordion-content-js")
          .forEach((el) => content.classList.remove("open"));
      } else {
        document
          .querySelectorAll(".accordion-content-js")
          .forEach((el) => (el.style.maxHeight = null));
        document
          .querySelectorAll(".accordion-content-js")
          .forEach((el) => content.classList.add("open"));
      }
    });
  });

});
