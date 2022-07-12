function getconfirm(){
    if(confirm("Are you sure..??")){
        alert("YESSS");
    }
    else{
        alert("NOOOO");
    }
}

function randomColors() {
    return '#' + Math.floor(Math.random() * 11111111).toString(16);
  }

function div2color(){

   document.getElementById("div2").style.backgroundColor=randomColors();

}


function div3color(){
    document.getElementById("div3").style.backgroundColor=document.getElementById("div3color").value;
}

 
let rotation = 0;
function anime(){

    rotation += 30; // add 90 degrees, you can change this as you want
    if (rotation === 360) { 
      // 360 means rotate back to 0
      rotation = 0;
    }
    document.getElementById("div4").style.backgroundColor=randomColors();
document.getElementById("div4").style.transform=`rotate(${rotation}deg)`;
}




function btnRed() {
    document.getElementById("Div1").style.backgroundColor="Red";
  }
  function btnGreen() {
    document.getElementById("Div2").style.backgroundColor="Green";
  }
  function btnBlue() {
    document.getElementById("Div3").style.backgroundColor="Blue";
  }
  function btnReset() {
    document.getElementById("Div1").style.backgroundColor="Black";
    document.getElementById("Div2").style.backgroundColor="white";
    document.getElementById("Div3").style.backgroundColor="white";
  }
  function bodyBGGreen(){
    document.body.style.backgroundColor="blue";
  }