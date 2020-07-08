$(function() {
    $(".change-eaten").on("click", function(event) {
      const id = $(this).data("id");
      const neweaten = $(this).data("neweaten");
  
      const neweatenState = {
        eaten: neweaten
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: neweatenState
      }).then(
        function() {
          console.log("changed eaten to", neweaten);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      const newBurger = {
        burgerName: $("#burger").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
});