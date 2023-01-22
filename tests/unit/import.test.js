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
