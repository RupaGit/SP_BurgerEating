// Make sure we wait to attach our handlers until the DOM is fully loaded.
function displayGif(gifLink) {
  // $("#gifHolder").show();
  var newImage = $("<img/>")
  newImage.attr("src", gifLink);
  $("#gifHolder").append(newImage);
  // $("#gifHolder").show();
}



$(function () {
  $(".devourBurger").on("click", function (event) {
    var id = $(this).data("id");
    var burgerName = $("#burgerName_" + id).html();
    console.log(id, burgerName);
    var updatedBurger = {
      id: id,
      burger_name: burgerName,
      devoured: 1
    }
    console.log(updatedBurger);
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updatedBurger
    }).then(
      function () {
        //   console.log("burgerdevoured", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#submitBurger").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    displayGif("https://gph.is/1Oua2mK");
    var newBurger = {
      burger_name: $("#burgerText").val().trim(),
      devoured: 0
    };
    console.log(newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
