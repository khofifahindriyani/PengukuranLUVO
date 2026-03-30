function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nPl1oOh6N7":
        Script1();
        break;
      case "612w5trHV6P":
        Script2();
        break;
      case "6neLaOCa9s5":
        Script3();
        break;
      case "6q5mkbHwxqm":
        Script4();
        break;
      case "6GepqsEPX55":
        Script5();
        break;
  }
}

function Script1()
{
  if (!window.globalAudio) {
    window.globalAudio = new Audio('story_content/backsound.mp3');
    window.globalAudio.loop = true;   // agar terus berulang
    window.globalAudio.volume = 0.5;  // volume 50%
}

function Script2()
{
  var player = GetPlayer();
var auto = player.GetVar("AutoScene9");

if(auto == false){
    setTimeout(function(){
        document.querySelectorAll("audio, video").forEach(function(media){
            media.play();
        });
    }, 400);

    player.SetVar("AutoScene9", true);
}
}

function Script3()
{
  if (!window.globalAudio) {
    window.globalAudio = new Audio('story_content/backsound.mp3');
    window.globalAudio.loop = true;   // agar terus berulang
    window.globalAudio.volume = 0.5;  // volume 50%
}

function Script4()
{
  var player = GetPlayer();
var auto = player.GetVar("AutoScene9");

if(auto == false){
    setTimeout(function(){
        document.querySelectorAll("audio, video").forEach(function(media){
            media.play();
        });
    }, 400);

    player.SetVar("AutoScene9", true);
}
}

function Script5()
{
  var player = GetPlayer();
if(!player.GetVar("AutoScene9")){
    setTimeout(function(){
        document.querySelectorAll("audio, video").forEach(m=>m.play());
    },600);
    player.SetVar("AutoScene9", true);
}
}

