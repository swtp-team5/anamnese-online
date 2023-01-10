let formData;

function createQrFromForm(formID) {
    saveFormData(formID)
    generateQRCode(formData);
    enableDownload();
}

// Set data from the form fields
function saveFormData(formID) {
    let form = document.getElementById(formID);
    let data = new FormData(form);
    console.log(Object.fromEntries(data))
    formData = data;
}

function getFormData() {
    return formData;
}

// Generates the QR-Code and displays it
function generateQRCode(formData) {
    // Parse JSON from FormData
    let obj = {};
    formData.forEach((value, key) => obj[key] = value);
    let json = JSON.stringify(obj);
    console.log("JSON: " + json)

    // Clear existing QR code
    let qrDiv = document.getElementById('qrImage');
    while (qrDiv.firstChild) {
        qrDiv.removeChild(qrDiv.firstChild);
    }

    // Create new QR code
    new QRCode(qrDiv, json);
}

// Set hrefs for download
function enableDownload() {
    // https://stackoverflow.com/a/12796748
    // Parse href from image
    let canvas = document.querySelector("#qrImage canvas")
    let downloadHref = canvas.toDataURL('image/png');
    downloadHref = downloadHref.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');

    // Set href for download button
    document.querySelector("#qrImageDownload").setAttribute("href", downloadHref);
    let downloadBtn = document.querySelector("#qrDownloadButton");
    downloadBtn.setAttribute("href", downloadHref);
}
