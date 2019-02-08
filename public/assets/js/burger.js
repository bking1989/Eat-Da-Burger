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

    // When you click on a burger's edit button
    $("button.updateBtn").on("click", function() {
        var btnNum = $(this).attr("data-target");

        location.href = "/api/burgers/" + btnNum;
    });

    // When you click on a burger's update button
    $(".update-form").on("submit", function(event) {
        event.preventDefault();

        // Define our updated burger
        var updatedBurger = {
          burger_name: $("#updateName").val().trim(),
          devoured: $("input[name=updateDev]:checked").val().trim()
        };

        var id = $(this).attr("data-target");

        // POST request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: updatedBurger
        }).then(() => {
            console.log("Updated a burger!");
        });
    });
});