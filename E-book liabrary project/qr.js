function generateQR() {
    let text = document.getElementById("qrText").value;
    let qrResult = document.getElementById("qrResult");

    qrResult.innerHTML = "";

    if (text.trim() === "") {
        qrResult.innerText = "Please enter something!";
        return;
    }

    new QRCode(qrResult, {
        text: text,
        width: 200,
        height: 200
    });
}

document.getElementById("qrResult").style.margin= auto;