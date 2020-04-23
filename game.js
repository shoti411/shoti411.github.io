<script src="https://apis.google.com/js/api.js"></script>
<script>
function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyCmWWX-8Wlxt2ouLUbvVWt6PNp9AS1Yrdk',
    // clientId and scope are optional if auth is not required.
    'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
    'scope': 'profile',
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
    })
  }).then(function(response) {
    console.log(response.result);
  }, function(reason) {
    console.log('Error: ' + reason.result.error.message);
  });
};
// 1. Load the JavaScript client library.
gapi.load('client', start);
</script>





var gameStarted = false;

$( document ).ready(function() {
    showIntro();

    // Start game on spacebar press.
    this.onkeypress = function(e) {
      if (gameStarted == false && e.keyCode == 32) { // 32 = Spacebar
        gameStarted = true;
        gamerun();
      }
    }

});

function gamerun() {
  init();
}

function step(){
  update();
  draw();
}

function update() {
  if (!movesnake()) {
    die();
    showConclusion(size)
  }
}

function draw() {
  if (gameStarted) {
      screenclear();
      drawsnake();
      drawfood();
  }
}

function showIntro() {
    var canvas = document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.font="30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("SNAKE", canvas.width/2, canvas.height/2);

    ctx.font="20px Arial";
    ctx.fillText("press space to start", canvas.width/2, canvas.height/2+40);
}

function showConclusion(score) {
    screenclear();
    var canvas = document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.font="30px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width/2, canvas.height/2);
    ctx.fillText("score: " + score, canvas.width/2, canvas.height/2-40);
    ctx.font="20px Arial";
    ctx.fillText("press space to start", canvas.width/2, canvas.height/2+80);
}
