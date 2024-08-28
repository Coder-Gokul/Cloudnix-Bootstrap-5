$(document).ready(function () {
  // Initially hide the footer
  const $footer = $("#mypage_footer footer");
  $footer.css({
    display: "none",
  });

  // Mouse enter: slide down
  $("#mypage_footer").on("mouseenter", function () {
    $footer.stop(true, true).slideDown(10000, function () {
      // Show the modal when the animation is complete
      var myModal = new bootstrap.Modal(
        document.getElementById("animationModal")
      );
      myModal.show();
    });
  });

  // Mouse leave: slide up
  $("#mypage_footer").on("mouseleave", function () {
    $footer.stop(true).slideUp(500); // Adjust speed as needed
  });
});
