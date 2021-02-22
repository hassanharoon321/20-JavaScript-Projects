(function(document){
    var div = document.getElementById('container');
    var icon = document.getElementById('icon');
    var open = false;
  
    div.addEventListener('click', function(){
      if(open){
        icon.className = 'fa fa-arrow-down';  
      } else{
        icon.className = 'fa fa-arrow-down open';
      }
  
      open = !open;
    });
  })(document);