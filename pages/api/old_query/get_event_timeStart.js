////////////////////////////////////////////////////////////////////////////////
// Author : Cashton Christensen
// Date Last Modified : 2/11/2020
// Description :
//      Summary : Return the time_start timestamp from the database to the front end
//      Inputs  : Text id of the specific AuctionEvent
//      Outputs : Timestamp value from the AuctionEvent timeStart field
//
// Modfied by Cashton Christensen : 2/10/20
//      updated database document names and field names
//
// Modfied by Cashton Christensen : 2/11/20
//      added firestore authentication code
////////////////////////////////////////////////////////////////////////////////
function get_event_timeStart (eventId) {
    // Import necessary modules
    var admin = require("firebase-admin");

    // Authenticate with firebase via service account.
    var serviceAccount = require("./auction-hub-firebase-firebase-adminsdk-omcxq-d2702ebfcf.json");

    // Initialize the authentication.
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://auction-hub-firebase.firebaseio.com"
    });

    // Shorthand access to database
    const db = admin.firestore();

    // The following stops some console log errors and warnings.
    db.settings({timestampInSnapshots: true});


    // query the database using eventId and return just the timeStart timestamp value
    // timeStart = //query//
    // return timeStart;
}