getElementById("mb").addEventListener("click", function() {
    let block = document.getElementById("mi2");
    if (block.style.height === "50%") {
        block.style.height = "95%";
    } 
    else {
        block.style.height = "50%";
    }
});
