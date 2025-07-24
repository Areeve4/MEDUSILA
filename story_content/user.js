function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Z4E900Gllp":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgsong');
audio.src="1.mp3";
audio.load();
audio.play();
audio.volume = 0.1;
}

