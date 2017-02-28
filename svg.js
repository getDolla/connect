var svg = document.getElementById('svg');
var button = document.getElementById("button");
var xcor, ycor;

var lastx = -1;
var lasty = -1;

/* start drawing lines */
ctx.beginPath();

/* keeps track of the xcor and ycor of mouse */
svg.addEventListener("mousemove", function(evt) {
    xcor = evt.offsetX;
    ycor = evt.offsetY;
});

svg.addEventListener('click', function(evt) {
  /*gets random hex by converting Math.random() into a hex string keeping only the values from index 2 to 7
    (via slice), convert to lowercase, and keeping only the last 6 elements of the resulting sequence */
  // ctx.fillStyle = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toLowerCase()).slice(-6);

  ctx.fillStyle = "#ffb732";

  ctx.arc(xcor, ycor, 10, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();

  if (lastx > -1) {
    ctx.moveTo(xcor, ycor);
    ctx.lineTo(lastx, lasty);
    ctx.stroke();
    ctx.beginPath();
  }

  lastx = xcor;
  lasty = ycor;

});

// For rectangle
// svg.addEventListener('click', function(evt) {
//   /* gets random hex by converting Math.random() into a hex string keeping only the values from index 2 to 7
//     (via slice), convert to lowercase, and keeping only the last 6 elements of the resulting sequence */
//   ctx.fillStyle = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toLowerCase()).slice(-6);
//
//   /* paints rectangle */
//   ctx.fillRect(xcor, ycor, 100, 100);
// });

button.addEventListener("click", function(evt) {
    while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }
});
