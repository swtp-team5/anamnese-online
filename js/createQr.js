/*
MIT License

Copyright (c) [2022] [Jann-Niklas Zimmermann]
Copyright (c) [2022] [Tobias Wagner]
Copyright (c) [2022] [Onur Atesavci]
Copyright (c) [2022] [Peter Förster]
Copyright (c) [2022] [Paul Drux]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
let formData;

function createQrFromForm(formID) {
    saveFormData(formID)
    generateQRCode(formData);
    enableDownload();
}

// Set data from the form fields
function saveFormData(formID) {
    let form = document.getElementById(formID);
    formData = new FormData(form);
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
