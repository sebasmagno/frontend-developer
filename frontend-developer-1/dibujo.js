var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var l = 0;

while(l< 30){
    //empieza posicion 0 0 10 300
    dibujarLineas("red",0,(l*10),((l+1)*10),300);
    //empieza posicion 300,10 0 0
    dibujarLineas("blue",300,((l+1)*10),(l*10),0);
    debugger
    //empieza posicion 0,300, 290,300
    dibujarLineas("green",300,(l*10),300-(l*10),300);
    // empieza posicion 0,300, 10,0
    dibujarLineas("yellow",0,300-(l*10),(l*10),0);
    l++;
}
dibujarLineas("black",0,0,0,300);
dibujarLineas("black",0,300,300,300);
dibujarLineas("black",300,300,300,0);
dibujarLineas("black",0,0,300,0);
function dibujarLineas(color, xinicial,yinicial,xfinal,yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
