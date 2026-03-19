const fileInput = document.getElementById("pic");
const imagePreview = document.getElementById("imported-img-display");

/*
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
}); */

/*
document.getElementById("pic").addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const previewImage = document.getElementById("imported-img-display");
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
    };
    reader.readAsDataURL(file);
});*/

// Source - https://stackoverflow.com/a/49942870
// Posted by Harish Soni, modified by community. See post 'Timeline' for change history
// Retrieved 2026-03-19, License - CC BY-SA 3.0

function handleImageUpload() 
{

var image = document.getElementById("pic").files[0];

    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("imported-img-display").src = e.target.result;
    }

    reader.readAsDataURL(image);

} 





/* i would like to make the alpha value (and maybe even all the color values) adjustable via range picker or color picer circle thingyyy */
function red() {
    document.getElementById('filter').style.display = "block";
    document.getElementById('filter').style.backgroundColor = "hsla(0, 100%, 50%, 0.5)";
}

function blue() {
    document.getElementById('filter').style.display = "block";
    document.getElementById('filter').style.backgroundColor = "hsla(240, 100%, 50%, 0.5)";
}

function clearFilter() {
    document.getElementById('filter').style.display = "none";
}


