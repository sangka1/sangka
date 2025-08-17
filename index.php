<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title> Kala Was Here </title>
  <style>
    body{
      padding : 0;
      margin : 0;
      background : black;
    }
    
    img {
      margin-top : 15vh;
      padding : 5%;
    }
    
    .kal {
      color : white;
      text-align : center;
      font-family : courier;
      font-weight : normal;
      font-size : 9px;
    }
    
    h1 {
      animation : animasi 0.5s linear infinite;
      animation-direction : alternate;
    }
    
    #text {
      font-size : 10px;
      white-space: pre-line;
      width: 60%;
      margin: 0 auto;
      text-align: center;
    }

    #speakBtn {
      margin-top: 20px;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      background: crimson;
      color: white;
      font-family: courier;
      font-size: 12px;
      cursor: pointer;
    }
    #speakBtn:hover {
      background: darkred;
    }
  </style>
</head>
<body>
  <center>
    <img src="https://i.pinimg.com/originals/6f/da/69/6fda69917ac9bcf04376dfa3295f41b0.gif" width=240 height=180>
  </center>
  
  <div class="kal">
    <h1> Kal Was Here </h1>
    <div id="text"></div>
    <button id="speakBtn">Play Voice</button>
  </div>
  
  <script>
    const textEl = document.getElementById("text");
    const speakBtn = document.getElementById("speakBtn");
    const message = `Hello, I am Kal from Java.
If you think I am a hacker,
you are stupid.`;

    const lines = message.split("\n");
    let lineIndex = 0;
    let charIndex = 0;

    function typeWriter() {
      if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
          textEl.innerHTML += lines[lineIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeWriter, 50);
        } else {
          textEl.innerHTML += "\n";
          lineIndex++;
          charIndex = 0;
          setTimeout(typeWriter, 400);
        }
      } else {
        setTimeout(() => {
          textEl.innerHTML = "";
          lineIndex = 0;
          charIndex = 0;
          typeWriter();
        }, 1000);
      }
    }
    typeWriter();

    speakBtn.addEventListener("click", () => {
      speakBtn.style.display = "none";
      let utterance = new SpeechSynthesisUtterance(message);
      utterance.pitch = 1;
      utterance.lang = "en-US"; 
      speechSynthesis.speak(utterance);
    });
  </script>
  
</body>
</html>
