var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
carx1=50;
cary1=50;
carx2=50;
cary2=120;
carheight1=90;
carwidth1=100;
carheight2=90;
carwidth2=100;
backgrounding="download.jpeg";
carimg1="download.png";
carimg2="ttt.png";
function add(){
    backgroundtag=new Image();
    backgroundtag.onload=uploadbackground;
    backgroundtag.src=backgrounding;

    cartag1=new Image();
    cartag1.onload=uploadcar1;
    cartag1.src=carimg1;

    cartag2=new Image();
    cartag2.onload=uploadcar2;
    cartag2.src=carimg2;
}
function uploadbackground(){
    ctx.drawImage(backgroundtag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(cartag1,carx1,cary1,carwidth1,carheight1);
}
function uploadcar2(){
    ctx.drawImage(cartag2,carx2,cary2,carwidth2,carheight2);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
if(keyPressed=="87"){
up1();
console.log("up");
}
if(keyPressed=="83"){
down1();
console.log("down");
}
if(keyPressed=="68"){
right1();
console.log("right");
}
if(keyPressed=="65"){
left1();
console.log("left");
}
if(keyPressed=="38"){
up2();
console.log("up");
}
    if(keyPressed=="40"){
    down2();
    console.log("down");
    }
    if(keyPressed=="39"){
    right2();
    console.log("right");
    }
    if(keyPressed=="37"){
    left2();
    console.log("left");
    }
}
function up1(){
    if(cary1>0){
        cary1=cary1-10;
        console.log("When up is pressed x="+carx1+"y="+cary1);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function down1(){
    if(cary1<500){
        cary1=cary1+10;
        console.log("When up is pressed x="+carx1+"y="+cary1);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }  
}
function right1(){
    if(carx1<700){
        carx1=carx1+10;
        console.log("When up is pressed x="+carx1+"y="+cary1);
        uploadbackground();
        uploadcar1();
        uploadcar2();
        if(carx1>700){
            document.getElementById("gamestatus").innerHTML="Car1 Won";
        }
    } 
}
function left1(){
    if(carx1<700){
        carx1=carx1+10;
        console.log("When up is pressed x="+carx1+"y="+cary1);
        uploadbackground();
        uploadcar1();
        uploadcar2();
}
}
function up2(){
    if(cary2>0){
        cary2=cary2-10;
        console.log("When up is pressed x="+carx2+"y="+cary2);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}
function down2(){
    if(cary2<500){
        cary2=cary2+10;
        console.log("When up is pressed x="+carx2+"y="+cary2);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    } 
}
function right2(){
    if(carx2>0){
        carx2=carx2+10;
        console.log("When up is pressed x="+carx2+"y="+cary2);
        uploadbackground();
        uploadcar2();
        uploadcar1();
        if(carx2>700){
            document.getElementById("gamestatus").innerHTML="Car2 Won";
        }

    }
}
function left2(){
    if(carx2<700){
        carx2=carx2-10;
        console.log("When up is pressed x="+carx2+"y="+cary2);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}
