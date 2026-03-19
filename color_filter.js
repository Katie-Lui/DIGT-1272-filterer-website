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
                imagePreview.style.display = "block";
            }
        );

        reader.readAsDataURL(file);
    }
});

let filter = document.getElementById("filter");

/* i would like to make the alpha value (and maybe even all the color values) adjustable via range picker or color picer circle thingyyy */
function red() {
    filter.style.backgroundColor = (255, 0, 0, 0.5)
}

/*function redFilter {

}*/

