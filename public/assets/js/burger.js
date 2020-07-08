$(function() {
    $(".change-devoured").on("click", function(event) {
      const id = $(this).data("id");
      const newdevoured = $(this).data("newdevoured");
  
      const newdevouredState = {
        devoured: newdevoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newdevouredState
      }).then(
        function() {
          console.log("changed devoured to", newdevoured);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      const newBurger = {
        burger_name: $("#burger").val().trim(),
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