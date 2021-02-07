var showingSourceCode = false;
var isInEditMode = true;

function enableEditMode() {
  richTextField.document.designMode = "On";
}

function execCmd(command) {
  richTextField.document.execCommand(command, false, null);
}

function execCommandWithArg(command, arg) {
  richTextField.document.execCommand(command, false, arg);
}

function toggleSource() {
  if (showingSourceCode) {
    richTextField.document.getElementsByTagName(
      "body"
    )[0].innerHTML = richTextField.document.getElementsByTagName(
      "body"
    )[0].textContent;
    showingSourceCode = false;
  } else {
    richTextField.document.getElementsByTagName(
      "body"
    )[0].textContent = richTextField.document.getElementsByTagName(
      "body"
    )[0].innerHTML;
    showingSourceCode = true;
  }
}

function toggleEdit() {
  if (isInEditMode) {
    richTextField.document.designMode = "Off";
    isInEditMode = false;
  } else {
    richTextField.document.designMode = "On";
    isInEditMode = true;
  }
}