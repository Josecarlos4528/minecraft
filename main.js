var canvas= new fabric.Canvas('myCanvas');
anchodebloque=30;
alturabloque=30;
playerx=10;
playery=10;
jugadorobjeto="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        jugadorobjeto=Img;
        jugadorobjeto.scaleToWidth(150);
        jugadorobjeto.scaleToHeight(140);
        jugadorobjeto.set({
            top:playery,
            left:playerx
        });
        canvas.add(jugadorobjeto);
    });
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        bloqueimagen=Img;
        bloqueimagen.scaleToWidth(anchodebloque);
        bloqueimagen.scaleToHeight(alturabloque);
        bloqueimagen.set({
            top:playery,
            left:playerx
        });
        canvas.add(bloqueimagen);
    });
}