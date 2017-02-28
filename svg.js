var svg = document.getElementById('svg');
var button = document.getElementById("button");
var xcor, ycor;

var lastx = "-1";
var lasty = "-1";

/* keeps track of the xcor and ycor of mouse */
svg.addEventListener("mousemove", function(evt) {
    xcor = evt.offsetX.toString();
    ycor = evt.offsetY.toString();
});

svg.addEventListener('click', function(evt) {

  var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("cx", xcor);
  c.setAttribute("cy", ycor);
  c.setAttribute("stroke", "black");
  c.setAttribute("stroke-width", "1");
  c.setAttribute("fill", "#ffb732");
  c.setAttribute("r", "10");
  svg.appendChild(c);

  if (lastx > "-1") {
    var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
    l.setAttribute("x1", lastx);
    l.setAttribute("x2", xcor);
    l.setAttribute("y1", lasty);
    l.setAttribute("y2", ycor);
    l.setAttribute("stroke", "black");
    l.setAttribute("stroke-width", "1");
    svg.appendChild(l);
  }

  lastx = xcor;
  lasty = ycor;

});

button.addEventListener("click", function(evt) {
  while (svg.lastChild) {
    svg.removeChild(svg.lastChild);
  }

  lastx = "-1";
  lasty = "-1";
});
