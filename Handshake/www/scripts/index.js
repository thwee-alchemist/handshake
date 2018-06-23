// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        this.onResume();
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.

        // TODO: Get device location
        // Encode it as a QR image
        // Display the QR image
        // Turn on the camera
        // loog for another qr code.
        // {position: , rotation: }

        // select files to share
        // select mode: me first, you first, both (experimental), smaller first
        // encode data in qrcode, 
        // establish video link
        // exhcange files between one another. 
    };
} )();