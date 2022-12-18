let form = document.getElementById('form');
let qr = document.getElementById('qrCode');

form.addEventListener("submit",
    (event) => {
        event.preventDefault();
        generateQRCode(getData(event.target));
        createDownload();
    });

// Get data from the form fields
function getData(form) {
    let data = new FormData(form);
    console.log(Object.fromEntries(data))
    return data;
}

// Generates the QR-Code and displays it
function generateQRCode(data) {
    // Parse JSON from FormData
    let obj = {};
    data.forEach((value, key) => obj[key] = value);
    let json = JSON.stringify(obj);
    console.log("JSON: " + json)

    // Create and display QR code with json content
    new QRCode(qr, json);
}

// Sets up the download button
function createDownload() {
    // https://stackoverflow.com/a/12796748
    // Display the QR-Code
    let canvas = document.querySelector("#qrCode canvas")
    let downloadHref = canvas.toDataURL('image/png');
    downloadHref = downloadHref.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
    qr.setAttribute("href", downloadHref);

    // Display the download button
    let downloadBtn = document.querySelector("#qrCode #qrDownload");
    downloadBtn.setAttribute("href", downloadHref);
    downloadBtn.setAttribute("style", "display: block")
}
