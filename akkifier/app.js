function sequencer() {
  const kick = new Tone.Player("./drums/kick-electro01.wav").toMaster();
  const snare = new Tone.Player("./drums/snare-lofi02.wav").toMaster();
  const crash = new Tone.Player("./drums/crash-808.wav").toMaster();
  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "16n");
  Tone.Transport.start();

  function repeat() {
    let step = index % 16;
    let kickInputs = document.querySelector(
      `.kick input:nth-child(${step + 1})`
    );
    let snareInputs = document.querySelector(
      `.snare input:nth-child(${step + 1})`
    );
    let crashInputs = document.querySelector(
      `.crash input:nth-child(${step + 1})`
    );
    if (kickInputs.checked) {
      kick.start();
    }
    if (snareInputs.checked) {
      snare.start();
    }
    if (crashInputs.checked) {
      crash.start();
    }
    index++;
  }
}

sequencer();
