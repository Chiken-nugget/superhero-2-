var canvas= new fabric.Canvas('myCanvas');
block_image_width=30;
block_image_height=30;
player_x=200;
player_y=200;
var player_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x,
        })
        canvas.add(player_object)
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_image_object)
    })
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed)
    if(e.shiftkey==true && keyPressed==80){
 console.log("P and shift pressed together");
 block_image_width=block_image_width+10;
 block_image_height=block_image_height+10;
 document.getElementById("currentWidth").innerHTML=block_image_width;
 document.getElementById("currentHeight").innerHTML=block_image_Height;
    }
}
 if(e.shiftkey==true && keyPressed==80){
    console.log("M and shift pressed together");
    block_image_width=block_image_width-10;
    block_image_height=block_image_height-10;
    document.getElementById("currentWidth").innerHTML=block_image_width;
    document.getElementById("currentHeight").innerHTML=block_image_Height;
 }
 if(keyPressed=='70'){
    new_image('ironman_face.png');
    console.log("f");
}
if(keyPressed=='66'){
    new_image('spiderman_body.png');
    console.log("b");
}
if(keyPressed=='76'){
    new_image('hulk_legs.png');
    console.log("l");
}
if(keyPressed=='82'){
    new_image('thor_right_hand.png');
    console.log("r");
}
if(keyPressed=='72'){
    new_image('captain_america_left_hand.png');
    console.log("h");
}
if(keyPressed=='38'){
    up();
    console.log("up");
}
if(keyPressed=='40'){
    down();
    console.log("down");
}
if(keyPressed=='37'){
    left();
    console.log("left");
}
if(keyPressed=='39'){
    right();
    console.log("right");