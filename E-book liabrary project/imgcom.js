
function compressImage() {
    let fileInput = document.getElementById("imageInput");
    let output = document.getElementById("output");

    if (fileInput.files.length === 0) {
        output.innerText = "Please upload an image!";
        return;
    }

    let file = fileInput.files[0];

    new Compressor(file, {
        quality: 0.3, // 0 to 1 (lower = more compression)

        success(result) {
            output.innerHTML = "";

            let img = document.createElement("img");
            img.src = URL.createObjectURL(result);
            img.style.width = "200px";

            let link = document.createElement("a");
            link.href = URL.createObjectURL(result);
            link.download = "compressed.jpg";
            link.innerText = "Download Image";

            output.appendChild(img);
            output.appendChild(document.createElement("br"));
            output.appendChild(link);
        },

        error(err) {
            output.innerText = "Error compressing image!";
        }
    });
}
