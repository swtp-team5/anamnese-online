/*
Copyright 2022 Jann-Niklas Zimmermann, Tobias Wagner, Onur Atesavci, Peter Förster, Paul Drux

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
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
