$(() => {
    // When you submit a new burger
    $(".create-form").on("submit", (e) => {
        e.preventDefault();

        // Define our new burger
        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: $("input[name=devoured]:checked").val().trim()
        };

        // POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
            console.log("Created a new burger!");
            location.reload();
        });
    });

    // When you click on a burger's edit button, on the main page
    $("button.updateBtn").on("click", function() {
        var btnNum = $(this).attr("data-target");

        location.href = "/api/burgers/" + btnNum;
    });

    // When you click on a burger's update button
    $("button.change").on("click", function(event) {
        event.preventDefault();

        // Define our updated burger
        var updatedBurger = {
          burger_name: $("#updateName").val().trim(),
          devoured: $("input[name=updateDev]:checked").val().trim()
        };

        var id = parseInt($(this).attr("data-target"));

        // PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedBurger
        });

        // Goes back to the main page
        location.href = "../../";
    });
});