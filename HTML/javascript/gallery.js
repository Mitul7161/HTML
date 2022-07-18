    

    function myFunction(imgs) {
      var expandImg = document.getElementById("expandedImg");
      expandImg.src = imgs.src;
    }
    var x=0;
      function fontfun(){
      if(x===0){

        document.getElementById("text").innerHTML="";
        document.getElementById("btn").value="Show";
        x=1
      }
      else{
        document.getElementById("text").innerHTML="HELLO";
        document.getElementById("btn").value="Show";
        x=0;
      }
    }
