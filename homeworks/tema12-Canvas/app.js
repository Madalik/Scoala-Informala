function init() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
   
    ctx.fillStyle = "#AED6F1 ";
    ctx.fillRect(0, 300, 500, 400);

    ctx.fillStyle = "#F7DC6F";
    ctx.fillRect(60, 400, 130, 120);

    ctx.fillStyle = "#F7DC6F";
    ctx.fillRect(320, 400, 130, 120);

    ctx.fillStyle = "#CB4335";
    ctx.moveTo(0, 300);
    ctx.lineTo(250, 60);
    ctx.lineTo(500, 300);
    ctx.closePath();
    ctx.fill()
    ctx.fillStyle = "#7B241C";
    ctx.fillRect(190, 550, 130, 150);
  }
}
onload = init;
