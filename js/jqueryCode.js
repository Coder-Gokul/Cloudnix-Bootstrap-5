
$(document).ready(function () {
  const $footer = $("#mypage_footer footer");
  let modalOpen = false; // Flag to keep track of modal state

  // Initially hide the footer
  $footer.css({
    display: "none",
  });

  // Mouse enter: slide down
  $("#mypage_footer").on("mouseenter", function () {
    if (!modalOpen) {
      $footer.stop(true, true).slideDown(10000, function () {
        // Show the modal when the animation is complete
        var myModal = new bootstrap.Modal(
          document.getElementById("animationModal")
        );
        myModal.show();
        modalOpen = true; // Set the flag to true when modal is open
      });
    }
  });

  // Mouse leave: slide up
  $("#mypage_footer").on("mouseleave", function () {
    if (!modalOpen) {
      $footer.stop(true).slideUp(500); // Adjust speed as needed
    }
  });

  // Handle modal OK button click
  $("#animationModal .btn-ok").on("click", function () {
    modalOpen = false; // Set the flag to false when OK is clicked
    $footer.stop(true).slideUp(500); // Hide the footer after modal OK button is clicked
  });
});
