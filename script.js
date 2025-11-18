function generateQR() {
    let qrText = document.getElementById("qrText").value;
    let qrImage = document.getElementById("qrImage");
    let downloadBtn = document.getElementById("downloadBtn");

    if (qrText.length === 0) {
        alert("Please enter text or URL!");
        return;
    }

    let qrURL = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(qrText);

    qrImage.src = qrURL;

    qrImage.onload = function () {
        downloadBtn.href = qrURL;
        downloadBtn.style.display = "inline-block";
    }
}
