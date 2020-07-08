  
$(function() {
    $(".change-devoured").on("click", function(event) {
      const id = $(this).data("id");
      const newburger = $(this).data("newburger");
  
      const newburgertype = {
        devoured: newburger
      };

      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newburgertype
      }).then(
        function() {
          console.log("changed devoured to", newburger);
          location.reload();
        }
      );
    }); 

    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newburgertype
      }).then(
        function() {
          console.log("changed devoured to", newburger);
          location.reload();
        }
      );
    });