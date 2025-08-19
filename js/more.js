// -------for button mouseenter,move,out--//
        // document.getElementById('btn-shin')
        // .addEventListener('mouseenter', function(){
        //   console.log("trigger");
            
        // })
        // document.getElementById('btn-shin')
        // .addEventListener('mousemove', function(){
        //   console.log("trigger");
            
        // })
        // document.getElementById('btn-shin')
        // .addEventListener('mouseout', function(){
        //   console.log("trigger");
            
        // })
        //------------for text focus------//
        document.getElementById('user-name')
        .addEventListener('focus', function(){
          console.log('user will write now');
            
        })
        document.getElementById('user-email')
        .addEventListener('focus', function(){
          console.log('user will write email');
            
        })
        document.getElementById('user-name')
        .addEventListener('blur', function(){
          console.log('user done  now');
            
        })
        document.getElementById('user-email')
        .addEventListener('blur', function(){
          console.log('user done writing email');
            
        })