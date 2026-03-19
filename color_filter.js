const fileInput = document.getElementById("pic");
const imagePreview = document.getElementById("imported-img-display");

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


