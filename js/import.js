const uploadInput = document.getElementById("uploadInput");
const uploadButton = document.getElementById("uploadButton");

uploadButton.addEventListener("click",
    (event) => {
        event.preventDefault(); // prevent navigation to "#"
        // Exit event if error happened during decoding
        if (!decodeFile()) {return}

        setTimeout(() => { displayQrContent(qrResult) }, 25)
    });

//Version 3: Inhalt wird auch abgefangen, wenn es sich nicht um JSON Objekt handelt
// Display QR content
function displayQrContent(content) {
    let data = "";
    // Try to parse the content as JSON
    try {
        data = JSON.parse(content);
    } catch (error) {
        // If parsing fails, the content is not JSON
        console.error('Error parsing JSON:', error);

        // Handle non-JSON content
        data = { 'Content': content };
    }

    // Select the container element
    let container = document.querySelector('#qr-content');

    // Check if the data is an object
    if (typeof data === 'object' && data !== null) {
        // Get the keys of the object
        let keys = Object.keys(data);

        // Clear the container element
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        // Iterate over the keys and create a label for each key-value pair
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = data[key];

            // Create the label element
            let label = document.createElement('label');
            label.innerHTML = key + ': ' + value;

            // Create a container element for the label
            let labelContainer = document.createElement('div');
            labelContainer.appendChild(label);

            // Append the container to the main container
            container.appendChild(labelContainer);
        }
    } else {
        // If the data is not an object, handle it in some other way
        let label = document.createElement('label');
        label.innerHTML = content;

        // Create a container element for the label
        let labelContainer = document.createElement('div');
        labelContainer.appendChild(label);

        // Append the container to the main container
        container.appendChild(labelContainer);
    }
}

let qrResult = "";

function setCodeResult(code) {
    qrResult = code;
}

// Decodes the uploaded QR code
function decodeFile() {
    // Check if a file was submitted
    if (!uploadInput.files.length) {
        console.log("no file selected");
        alert("No file selected!");
        return false;
    } else {
        const file = uploadInput.files[0];
        const reader = new FileReader();
        qrcode.callback = setCodeResult;
        reader.onload = (function () {
            return function (e) {
                qrcode.decode(e.target.result);
            };
        })(file);
        reader.readAsDataURL(file);
        return true;
    }
}



