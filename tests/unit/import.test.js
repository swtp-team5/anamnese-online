/**
 *  @jest-environment jsdom
 */

const imp = require('../../js/import.js')

describe('Testing "displayQrContent()"', () => {

    beforeEach(() => {
        // Mock HTML document for function call
        document.body.innerHTML =
            '<div id="qr-content"></div>';
    });

    test('Test display valid JSON', () => {
        // Prepare test json string
        let content = '{"name":"test"}'

        // Call function to test
        imp.displayQrContent(content);

        // Assert result
        expect(document.querySelector('#qr-content label').innerHTML)
            .toBe("name: test");
    });


    test('Test "displayQrContent()" no valid JSON',
        () => {

            // Declare
            let noValidJSON = "no valid JSON content";
            let container = document.createElement('div');
            container.setAttribute('id', 'qr-content');
            document.body.appendChild(container);

            // Call function to test
            imp.displayQrContent(noValidJSON);

            // Test, if label contains no valid JSON Object
            let label = document.querySelector('#qr-content label');
            expect(label.innerHTML).toEqual("Content: " + noValidJSON);

        });


    test('Test "displayQrContent()" with NULL', () => {
        // Declare variable with null
        let NULLcontent = null;

        // import function displayqrcontent
        imp.displayQrContent(NULLcontent);

        // Test expecting null // "to match" is neccessary, because the function already handles non JSON Contents
        let label = document.querySelector('#qr-content label');
        expect(label.innerHTML).toMatch(/^Content: (null|no valid JSON content)$/);
    });




    test('Test "displayQrContent()" with two different values', () => {
        // Prepare test string
        let content = '{"name":"Tobias"}'

        // Call function to test
        imp.displayQrContent(content);

        // Assert result
        expect(document.querySelector('#qr-content label').innerHTML)
            .toBe("name: Tobias");

        content = '{"name":"Jann"}'

        // Call function to test
        imp.displayQrContent(content);

        // Assert result
        expect(document.querySelector('#qr-content label').innerHTML)
            .toBe("name: Jann");

        // Check if previous result is not present anymore
        expect(document.querySelector('#qr-content').innerHTML).not.toMatch("name: Tobias");
    });

    test('Test json with multiple key-values', () => {
        let content = '{"name":"test", "location":"berlin"}';

        // Call function to test
        imp.displayQrContent(content);

        // Assert result
        let labels = document.getElementsByTagName("label");
        expect(labels[0].innerHTML).toBe("name: test");
        expect(labels[1].innerHTML).toBe("location: berlin");
        expect(labels.length).toBe(2);
    })
});

describe('Testing "decodeFile()"', () => {

    beforeEach(() => {
        document.body.innerHTML =
            '<input name="datei" id="uploadInput" type="file" size="50" accept="image/*">';
        const uploadInput = document.getElementById("uploadInput");
    })

    test('Test empty upload', () => {
        expect(() => imp.getFile(uploadInput, null)).toThrow(/^No file selected!$/);
    })
});
