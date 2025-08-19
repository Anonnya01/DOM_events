console.log('external file');
 // <!-- option 2 function -->
        function makeYellow() {
          document.body.style.backgroundColor = "yellow";
        }
        function makePink() {
          document.body.style.backgroundColor = "plum";
        }


         // option 3

      const btnGreen = document.getElementById("btn-green");
      btnGreen.onclick = function green() {
        document.body.style.backgroundColor = "lightgreen";
      };

       // optional--sky
      const btnSky = document.getElementById('btn-sky');
      btnSky.onclick =skyBlue
       function skyBlue() {
        document.body.style.backgroundColor ='skyblue'
       }
     