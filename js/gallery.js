/*Name this external file gallery.js*/

function upDate(previewPic){

       var src = previewPic.getAttribute( "src" );
       var alt = previewPic.getAttribute( "alt" );
       document.getElementById('image').style.backgroundImage = "url( ' "+ src +"' )";
       document.getElementById('image').innerHTML = alt;
    
     
        // document.getElementById('image').style.backgroundImage = "url('previewPic.src')";
        // document.getElementById('image').innerHTML = previewPic.alt;
        
        // document.getElementById('image').style.backgroundImage = this.src;
          }
        
   
       function unDo(Zai){
      
       Zai = document.getElementById('image');
       Zai.style.backgroundImage = "url('images/logo.jpg')";      
        document.getElementById('image').innerHTML = "Hover over an image below to display here";
      
           
       }

       function bigImg(x) {
        x.style.height = "128px";
        x.style.width = "128px";
      }
      
      function normalImg(x) {
        x.style.height = "64px";
        x.style.width = "64px";
      }
      
      function myFunction(x) {
        x.style.background = "grey";
      }
      

      function setImages(){
        options =["MBS1.jpg", "mbs2.jpg", "kingmbs1.jpg", "kingmbs2.jpg", "kingmbs3.jpg", "abadi.jpg", "FA.jpg", "P1.jpg", "P2.jpg"]
        currentImages = document.querySelectorAll(".flex img")
        for (var i = 0; i< currentImages.length; i++){
        console.log("Images "+ i)
        
        randomImg = " images/" + options[Math.floor(Math.random() * options.length)];
        currentImages [i].src =randomImg
        currentImages [i].setAttribute("tabindex","0")}
        }
