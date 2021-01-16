function myFunction() {
    document.getElementById("myDropdown").classList.toggle("header__inner-dropdown-content-show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.header__inner-burger')) {
      var dropdowns = document.getElementsByClassName("header__inner-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('header__inner-dropdown-content-show')) {
          openDropdown.classList.remove('header__inner-dropdown-content-show');
        }
      }
    }
  }