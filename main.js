var hamburger = $(".header-right i");
hamburger.click(
  function() {
    $(".hamburger-menu").addClass("active");
  }
);

var croce = $(".hamburger-menu i");
croce.click(
  function() {
    $(".hamburger-menu").removeClass("active");
  }
);
