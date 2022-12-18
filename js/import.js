const uploadInput = document.getElementById("uploadInput");
const uploadButton = document.getElementById("uploadButton");

uploadButton.addEventListener("click",
    (event) => {
        event.preventDefault(); // prevent navigation to "#"
        handleFile();
        setTimeout(() => { displayQrContent(qrResult) }, 1)
    });

// TODO: Display QR content
function displayQrContent(json) {
    // typeof json = string
}

let qrResult = "";

function setCodeResult(code) {
    qrResult = code;
}

// Decodes the uploaded QR code
function handleFile() {
    if (!uploadInput.files.length) {
        console.log("no file selected");
        alert("No file selected!");
        // TODO: Show warning popup or error hint
    } else {
        // TODO: Handle case when image has no QR code
        const file = uploadInput.files[0];
        const reader = new FileReader();
        qrcode.callback = setCodeResult;
        reader.onload = (function () {
            return function (e) {
                qrcode.decode(e.target.result);
            };
        })(file);
        reader.readAsDataURL(file);
        return reader.result;
    }
}



