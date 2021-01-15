function update() {
  var idoc = document.getElementById("iframe").contentWindow.document;

  idoc.open();
  idoc.write(editor.getValue());
  idoc.close();
}

function setupEditor() {
  window.editor = ace.edit("editor");
  editor.setTheme("ace/theme/idle_fingers");
  editor.getSession().setMode("ace/mode/html");
  editor.setValue(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Your first program.</title>
    </head>
    <body>
        <h1>Edit the HTML!</h1>
        <h2> Don't bother about saving, live editing enabled!!!</h2>
        <p>Hello World!!!🌍</p>
        <style>
            body {
                font-family: sans-serif;
            }
        </style>
    </body>
    </html>`,
    1
  ); //1 = moves cursor to end

  editor.getSession().on("change", function () {
    update();
  });

  editor.focus();

  editor.setOptions({
    fontSize: "16pt",
    showLineNumbers: true,
    showGutter: true,
    vScrollBarAlwaysVisible: true,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(true);
}

function ready() {
  setupEditor();
  update();
}
