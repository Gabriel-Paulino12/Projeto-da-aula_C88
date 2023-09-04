var canvas=new fabric.Canvas('myCanvas');
blockImageWidth=30;//largura
blockImageHeight=30;//altura
playerX=10;
playerY=10;
var playerObject="";
var blocoObject="";
function update(){
    fabric.Image.fromURL("player.png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    })
}
function gerarbloco(blocoImg){
    fabric.Image.fromURL(blocoImg, function(Img){
        blocoObject=Img;
        blocoObject.scaleToWidth(blockImageWidth);
        blocoObject.scaleToHeight(blockImageHeight);
        blocoObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blocoObject);
    })
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed=='80'){
        blockImageWidth=blockImageWidth+10;
        blockImageHeight=blockImageHeight+10;
        document.getElementById("larguraAtual").innerHTML=blockImageWidth;
        document.getElementById("alturaAtual").innerHTML=blockImageHeight;
    }
    if(e.shiftKey==true && keyPressed=='77'){
        blockImageWidth=blockImageWidth-10;
        blockImageHeight=blockImageHeight-10;
        document.getElementById("larguraAtual").innerHTML=blockImageWidth;
        document.getElementById("alturaAtual").innerHTML=blockImageHeight;
    }
    if(keyPressed=='76'){//l
        gerarbloco('light_green.png');
    }
    if(keyPressed=='84'){//t
        gerarbloco('trunk.jpg');
    }
    if(keyPressed=='82'){//r
        gerarbloco('roof.jpg');
    }
    if(keyPressed=='89'){//y
        gerarbloco('yellow_wall.png');
    }
    if(keyPressed=='68'){//d
        gerarbloco('dark_green.png');
    }
    if(keyPressed=='85'){//u
        gerarbloco('unique.png');
    }
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }

}
function up(){
    playerY=playerY-blockImageHeight; 
    canvas.remove(playerObject);
    update();
}
function down(){
    playerY=playerY+blockImageHeight;
    canvas.remove(playerObject);
    update();
}
function left(){
    playerX=playerX-blockImageWidth;
    canvas.remove(playerObject)
    update();
}
function right(){
    playerX=playerX+blockImageWidth;
    canvas.remove(playerObject)
    update();
}
