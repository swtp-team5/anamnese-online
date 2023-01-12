/**
 *  @jest-environment jsdom
 */

const imp = require('../../js/import.js')

describe('Testing "displayQrContent"', () => {

    beforeEach(() => {
        // Mock HTML document for function call
        document.body.innerHTML =
            '<div id="qr-content">' +
            ''+
            '</div>';
    })

    test('Test display valid JSON', () => {
        // Prepare test json string
        let content = '{"name":"test"}'

        // Call function to test
        imp.displayQrContent(content);

        // Assert result
        expect(document.querySelector('#qr-content label').innerHTML)
            .toBe("name: test");
    });
})
