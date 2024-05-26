document.addEventListener("DOMContentLoaded", function() {
    const allButton = document.getElementById("all");
    const menButton = document.getElementById("men");
    const womenButton = document.getElementById("women");
    const cmenItems = document.querySelectorAll("#shopcat #cmen");
    const cwomenItems = document.querySelectorAll("#shopcat #cwomen");

    
    // Function to show all items
    function showAllItems() {
        cmenItems.forEach(function(item) {
            item.style.display = "block";
        });
        cwomenItems.forEach(function(item) {
            item.style.display = "block";
        });
    }

    // Function to hide all items
    function hideAllItems() {
        cmenItems.forEach(function(item) {
            item.style.display = "none";
        });
        cwomenItems.forEach(function(item) {
            item.style.display = "none";
        });
    }

    allButton.addEventListener("click", function() {
        showAllItems();
    });

    menButton.addEventListener("click", function() {
        showAllItems(); // Show all items first
        cwomenItems.forEach(function(item) {
            item.style.display = "none"; // Hide women items
        });
    });

    womenButton.addEventListener("click", function() {
        showAllItems(); // Show all items first
        cmenItems.forEach(function(item) {
            item.style.display = "none"; // Hide men items
        });
    });
});
