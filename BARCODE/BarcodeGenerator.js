


// Barcode-----------------------------------------------------------------------

 const barCodeInput = document.querySelector('#barcode-input');

 barCodeInput.addEventListener('input',function() {
    const inputText = document.getElementById("barcode-input").value;

    if (inputText) {
        
        document.getElementById("barcode").innerHTML = "";

        // Generate the barcode
        JsBarcode("#barcode", inputText, {
            format: "CODE128",   
            displayValue: true,   
            fontSize: 18          
        });
    } else {
        
    }
}
)


// ----------------------------------------------------------------------- Barcode







// QR Code------------------------------------------------------------------------

function generateQRCode(text, container) {
    if (text) {
        new QRCode(container, text); // Generate QR Code inside the container
    }
}




// Initially generate QR code for the first input field if it already has text
window.addEventListener('DOMContentLoaded', function () {
    const firstInput = document.querySelector('.QR-input');
    const firstQRCodeContainer = document.querySelector('.qrcode-container');

    if (firstInput && firstQRCodeContainer) {
        generateQRCode(firstInput.value, firstQRCodeContainer);
    }

    // Attach input event listener for the first textarea
    firstInput.addEventListener('input', function () {
        firstQRCodeContainer.innerHTML = ""; // Clear previous QR code
        generateQRCode(firstInput.value, firstQRCodeContainer);
    });
});

// ------------------------------------------------------------------------ QR Code






// Datamatrix Barcode---------------------------------------------------------------

 // Select the canvas and input elements
 const canvas = document.getElementById("datamatrixCanvas");
 const inputField = document.getElementById("DataMatrixInput");

 // Event listener for when the input field changes
 inputField.addEventListener('input', function() {
     const DataMatrixInput = inputField.value.trim(); // Get the value from the input field
     inputField.innerHTML = "";
     // Check if input is empty
     if (!DataMatrixInput) {
         canvas.width = 0; // Clear the canvas if there's no input
         canvas.height = 0;
         return; // Exit if no data is entered
     }

     try {
         // Generate the Data Matrix barcode
         bwipjs.toCanvas(canvas, {
             bcid: 'datamatrix',   // Barcode type (Data Matrix)
             text: DataMatrixInput,      // Text from the input field
             scale: 3,             // Scale factor (larger scale = bigger barcode)
             height: 10,           // Height of the barcode
             includetext: false,   // Do not include human-readable text below the barcode
             textxalign: 'center', // Alignment for the text (if included)
         });
     } catch (e) {
         console.error("Error generating barcode: ", e);
     }
 });


//  --------------------------------------------------------------- Datamatrix Barcode
