var pageHeader=document.querySelector(".page-header"),navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle");navMain.classList.remove("main-nav--no-js"),pageHeader.classList.remove("page-header--no-js"),navMain.classList.add("main-nav--closed"),navToggle.addEventListener("click",(function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened"),pageHeader.classList.add("page-header--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened"),pageHeader.classList.remove("page-header--opened"))}));