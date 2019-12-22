 var btn_menu=document.getElementById("btn_menu");
    var btn_close=document.getElementById("btn_close");
    var menu1=document.getElementById("menu1");
    btn_menu.onclick=function()
    {
        btn_menu.style.display="none";
        btn_close.style.display="inline";
        menu1.style.display="block";
    } 
    btn_close.onclick=function()
    {
       btn_menu.style.display="block";
        btn_close.style.display="none";
        menu1.style.display="none";
    
    }
    var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
    
        /*ecriture*/
     var CONTENT = [ 
	"Une école 100% gratuite|", 
	"Pour construire ton futur|", 
	"Pour atteindre tes objectifs|"
	 
];


var Length = 0;


var PART_INDEX = 0;


var INTERVAL_VAL;


var ELEMENT = document.querySelector("#text");


var CURSOR = document.querySelector("#cursor");


function Type() { 
	
	var text =  CONTENT[Length].substring(0, PART_INDEX + 1);
	ELEMENT.innerHTML = text;
   
	PART_INDEX++;

	
	if(text === CONTENT[Length]) {
		

		clearInterval(INTERVAL_VAL);
		setTimeout(function() {
			INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}


function Delete() {
	var text =  CONTENT[Length].substring(0, PART_INDEX - 1);
    // console.log(text);
	ELEMENT.innerHTML = text;
	PART_INDEX--;

	
	if(text === '') {
		clearInterval(INTERVAL_VAL);

		
		if(Length == (CONTENT.length - 1))
			Length = 0;
		else
			Length++;
		
		PART_INDEX = 0;

		
		setTimeout(function() {
			CURSOR.style.display = 'inline-block';
			INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
} 
INTERVAL_VAL = setInterval(Type, 100); 
    