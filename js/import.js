const uploadInput = document.getElementById("uploadInput");
const uploadButton = document.getElementById("uploadButton");

uploadButton.addEventListener("click",
    (event) => {
        event.preventDefault(); // prevent navigation to "#"
        handleFile();
        setTimeout(() => { displayQrContent(qrResult) }, 25)
    });

// // TODO: Display QR content
// function displayQrContent(json) {
//     // Parse the JSON string into an object
//     console.log(json);
//     var data = JSON.parse(json);
//
//     // Get the first name, last name, and gender from the object
//     var firstName = data.firstname;
//     var lastName = data.lastname;
//     var gender = data.gender;
//
//     // Select the elements to display the information in
//     var firstNameLabel = document.querySelector('#first-name');
//     var lastNameLabel = document.querySelector('#last-name');
//     var genderLabel = document.querySelector('#gender');
//
//     // Set the text content of the elements to the information
//     firstNameLabel.innerHTML = firstName;
//     lastNameLabel.innerHTML = lastName;
//     genderLabel.innerHTML = gender;
// }

// Display QR content
function displayQrContent(json) {
    // Parse the JSON string into an object
    console.log(json);
    var data = JSON.parse(json);

    // Get the keys of the object
    var keys = Object.keys(data);

    // Select the container element
    var container = document.querySelector('#qr-content');

    // Iterate over the keys and create a label for each key-value pair
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = data[key];

        // Create the label element
        var label = document.createElement('label');
        label.innerHTML = key + ': ' + value;

        // Create a container element for the label
        var labelContainer = document.createElement('div');
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



