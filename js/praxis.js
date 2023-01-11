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

function openModal(modalID) {
    $(modalID).modal('show');
}