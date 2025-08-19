console.log('active');
// ----change inner text
 document.getElementById("btn").addEventListener("click", function () {
        // console.log("btn-clicked");
        const titleText = document.getElementById('title-tx')
        console.log(titleText);
        titleText.innerText ="You just learned to Update."
        
      });



       document.getElementById("btn-user").addEventListener('click', function () {
        const para = document.getElementById('user')
        para.innerText= "user logged in"
     })
   