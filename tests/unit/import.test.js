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

    test('Test "displayQrContent()" no valid JSON', () => {
        // Declare
        let noValidJSON = "no valid JSON content";

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
