"use strict";

var i = 0;
function Convidar() {
  var mensagem = "Venha estudar na Fatec!";
  if (i == 24) i = 0;
  var convite = mensagem.substring(0, i);
  i++;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, convite));
}
var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
function tick() {
  root.render(/*#__PURE__*/React.createElement(Convidar, null));
}
setInterval(tick, 300);