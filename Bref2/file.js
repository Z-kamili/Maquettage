(function(){
    
    var preload = document.getElementById("preload");
    var loading = 0;
    
    var id = setInterval(frame,30);
    
    function frame(){
        
        if(loading == 100){
            
            clearInterval(id);
            window.open("welcom.html","_self");
        }else{
            
            loading++;
            if(loading == 90){
                preload.style.animation = "fadeout 1s ease";
            }
        }
    }
    
    
    
    
})();