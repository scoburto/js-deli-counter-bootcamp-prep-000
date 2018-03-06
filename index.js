var katzDeliLine = [];
function takeANumber(line,name) {
  line.push(name);
  var position = line.length;
  var msg = "Welcome, " + name +"." + " You are number " + position + " in line.";
  return msg;
}

function nowServing(list) {
  if (list.length===0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + list[0] +".";
  }
  list.shift();
}

function currentLine(list) {
var msg = "The line is currently ": ";
for (var i = 0; i<list.length; i++)  {
  msg = msg + i+1 + ". " + list[i] + ", ";
}
return msg;
}