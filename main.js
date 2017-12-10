function onOpen() {
 DocumentApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('Questions')
      .addItem('Show prompt', 'showPrompt')
      .addToUi();
}

function showPrompt() {
  var ui = DocumentApp.getUi(); // Same variations.

  var result = ui.prompt(
      'Let\'s get to know each other!',
      'Please enter your name:',
      ui.ButtonSet.OK_CANCEL);

  // Process the user's response.
  var button = result.getSelectedButton();
  var text = result.getResponseText();
  if (button == ui.Button.OK) {
    // User clicked "OK".
    ui.alert('Your name is ' + text + '.');
  } else if (button == ui.Button.CANCEL) {
    // User clicked "Cancel".
    ui.alert('I didn\'t get your name.');
  } else if (button == ui.Button.CLOSE) {
    // User clicked X in the title bar.
    ui.alert('You closed the dialog.');
  }
}

function mlaformat() {
 var doc =DocumentApp.getActiveDocument();
doc.getBody().appendParagraph();
}

//current resources:
//https://developers.google.com/apps-script/reference/base/ui
//https://developers.google.com/apps-script/guides/dialogs
//https://developers.google.com/picker/docs/#hiworld
//https://stackoverflow.com/questions/8039568/google-apps-script-how-to-persist-data-in-spreadsheet-between-different-functio
