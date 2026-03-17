const fileInput = document.getElementById("pic");
const imagePreview = document.getElementById("imported-img");

fileInput.addEventListener("change", 
    function() {
        const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", 
            function() {
                imagePreview.src = this.result;
                imagePreview.style.diaplay = "block";
            }
        );

        reader.readAsDataURL(file);
    }
});

/*function redFilter {

}*/

