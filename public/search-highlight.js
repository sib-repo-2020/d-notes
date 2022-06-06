const highlight = (text) => {
  var inputText = document.getElementById("noteSearch");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) { 
   innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
}

var inputText = document.getElementById("noteSearch");

highlight('mod')