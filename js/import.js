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
const uploadInput = document.getElementById("uploadInput");
const uploadButton = document.getElementById("uploadButton");

document.addEventListener('DOMContentLoaded', function () {
    uploadButton.addEventListener("click",
        (event) => {
            event.preventDefault(); // prevent navigation to "#"
            // Exit event if error happened during decoding
            try {
                var file = getFile(uploadInput);
            } catch (e) {
                alert(e);
                return;
            }

            decodeFile(file, setCodeResult)

            setTimeout(() => {
                displayQrContent(qrResult)
            }, 25)
        });
});

//Version 3: Inhalt wird auch abgefangen, wenn es sich nicht um JSON Objekt handelt
// Display QR content
function displayQrContent(content) {
    let data = "";
    // before parsing, stringify to check if it is a valid JSON or not
    if (typeof content === 'string' && JSON.stringify(content) !== '{}') {
        // Try to parse the content as JSON
        try {
            data = JSON.parse(content);
        } catch (error) {
            // If parsing fails, the content is not a valid JSON Object
           console.error('Error parsing JSON:', error);

            // Handle non-JSON content
            data = {'Content': content};
        }
    } else {
        // Handle non-JSON content if parsing is succesful
        data = {'Content': content};
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

function getFile(input) {
    if (!input.files.length) {
        throw new Error("No file selected!");
    } else {
        return uploadInput.files[0];
    }
}

// Decodes the uploaded QR code
function decodeFile(file, callback) {
    const reader = new FileReader();
    qrcode.callback = callback;
    reader.onload = (function () {
        return function (e) {
            qrcode.decode(e.target.result);
        };
    })(file);
    reader.readAsDataURL(file);
    return true;
}

module.exports = {displayQrContent, getFile, decodeFile};



