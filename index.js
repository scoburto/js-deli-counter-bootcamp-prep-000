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

function currentLine() {
var list = "The line is currently: ";
for (var i = 0; i<katzDeliLine.length; i++)  {
  list = list + i+1 + ". " + katzDeliLine[i] + ", ";
}
return list;
}