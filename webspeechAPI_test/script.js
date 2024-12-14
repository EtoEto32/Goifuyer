const recognition = new webkitSpeechRecognition();

recognition.lang = "ja";
// resultsは配列の配列で返ってくる
// {}で囲むことで、resultsの0番目の0番目のtranscriptを取得している
recognition.onresult = ({ results }) => {
  const output = document.querySelector("#result");
  output.textContent = results[0][0].transcript;
  //この部分で、認識したテキストを取得している
  console.log(results[0][0].transcript);
};

const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  recognition.start();
  //この部分で、認識を開始している。
});

const stopButton = document.querySelector("#stop");
stopButton.addEventListener("click", () => {
  recognition.stop();
  //この部分で、認識を終了している。
});
