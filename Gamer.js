var vp = document.getElementById("gamer");
var papel=vp.getContext("2d");

var fondo ={
url:"tile.png" ,
cargaOK: false
};
//imagen vaca
var vaca ={
url:"vaca.png" ,
cargaOK: false
};
//imagen cerdo
var cerdo ={
url:"cerdo.png" ,
cargaOK: false
};
//imagen pollo
var pollo ={
url:"pollo.png" ,
cargaOK: false
};

var cantidad = aleatorio(0, 5);

//clase instancia fondo
fondo.imagen = new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

//clase instancia vaca
vaca.imagen = new  Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

//clase instancia cerdo
cerdo.imagen = new  Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

//clase instancia pollo
pollo.imagen = new  Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

//Cargar Imagen
function cargarFondo()
{
fondo.cargaOK = true;
  dibujar();
}
//Cargar Imagen vaca
function cargarVaca()
{
vaca.cargaOK = true;
  dibujar();
}

//Cargar Imagen cerdo
function cargarCerdo()
{
cerdo.cargaOK = true;
  dibujar();
}

//Cargar Imagen pollo
function cargarPollo()
{
pollo.cargaOK = true;
  dibujar();
}


function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen,0 ,0);
  }

  //aleatorio vacas
  if(vaca.cargaOK)
  {

    for( var v=0 ;v<cantidad ;v++)
    {
    var x = aleatorio(0, 7)
    var y = aleatorio(0, 7)
    var x = x * 40;
    var y = y * 40;
    papel.drawImage(vaca.imagen,x ,y)
  }
}
  //aleatorio pollo
  if(pollo.cargaOK)
  {

    for( var p=0 ;p<cantidad ;p++)
    {
    var x = aleatorio(0, 7)
    var y = aleatorio(0, 7)
    var x = x * 40;
    var y = y * 40;
    papel.drawImage(pollo.imagen,x ,y)
  }
}
  //aleatorio cerdo
  if(cerdo.cargaOK)
  {

    for( var c=0 ;c<cantidad ;c++)
    {
    var x = aleatorio(0, 7)
    var y = aleatorio(0, 7)
    var x = x * 40;
    var y = y * 40;
    papel.drawImage(cerdo.imagen,x ,y)
  }
}

}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
