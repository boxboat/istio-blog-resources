/**
// use websockets eventually
window.onload = function() {
  var s = new WebSocket(((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host + "/ws");
}
**/


function deleteLogs(){
  $.ajax({
    url: '/data',
    type: 'DELETE',
    success: function(data) {
        console.log(`Delete request: ${data}`);
    }
  });
}

function getSum(colors){
  var sum = 0;
  for(var color in colors){
    sum += colors[color];
  }
  return sum;
}

function drawDivs(colors){
  var boxes = "";
  var text = "";
  var sum = getSum(colors);
  for(var color in colors){
   // color = color.replace(/'/g,"");
    var requests = colors[color];
    var width = 100 * requests / sum;
    text += `<p>${color}: ${requests}/${sum} (${Math.round(width)}%)</p>`;
    boxes += `<div id="${color}" style="background-color: ${color}; width:${width}%"/>`
  }
  $("#text").html(text);
  $("#colors").html(boxes);
}

function load_data(){
  $.getJSON('/data', (data) => {
    console.log(data);
    drawDivs(data);
  });
}

setInterval(function(){
    load_data() // this will run after every 300ms
}, 300);
