/****************************************************************************************************************************************
*
* Blink cell when it updates.
*
* @param e {Object} The current cell being edited
*
* Directions
* 1. Open Google Apps Script.
* 2. Delete all text in the scripting window and paste all this code.
* 3. Run atEdit(). Accept the permissions.
* 4. Click Triggers. Create a new trigger that runs atEdit() "on edit".
*
****************************************************************************************************************************************/

function atEdit(e) {

  // Edited cell gets passed into function
  var range = e.range;

  // Change colors x times, you can change the number and color to whatever you want
  for (var x = 0; x < 10; x++) {
    range.setBackground("yellow");
    SpreadsheetApp.flush();
    range.setBackground(null);
    SpreadsheetApp.flush();
  }
}
