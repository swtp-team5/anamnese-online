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
const modalIdArray = ['#mma','#pja', '#rkz'];

$(document).ready(function () {
    modalIdArray.forEach((modalID) => {
        // Setup modal
        $(modalID).modal({
            closable  : false,
        })

        // Attach event to trigger QR modal when submitting form in modal
        $('#qrModal').modal({
            closable : false,
            onShow : function() {
                generateQRCode(getFormData());
                enableDownload();
            }
        }).modal('attach events', modalID + ' .button');
    })
})

// Shows the modal
function openModal(modalID) {
    $(modalID).modal('show');
}