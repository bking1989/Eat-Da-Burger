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
});