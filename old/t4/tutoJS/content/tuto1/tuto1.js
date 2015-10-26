var img=document.getElementsByClassName("img");
ie4 = document.all
var paso=1;
var playing=false;
var funct="f1()";
function inicio(){
	mouse=cursor.style;
	mouse.top="500px";
	mouse.left="500px";
	mouse.visibility="hidden";
		for(i=0;i<7;i++){
			img[i].style.visibility = "hidden";
		}
		img[0].style.visibility = "visible";
}
function play(){
			for(i=0;i<7;i++){
			img[i].style.visibility = "hidden";
		}
		img[0].style.visibility = "visible";
		funct="f1()";
	if(!playing){
		mouse.visibility="visible";
		playing=true;
		//alert("paso1");
		f1();	
	}
	
}

function f1(){
	if(parseInt(mouse.left)!=723||parseInt(mouse.top)!=84){
		if(parseInt(mouse.top)>84){
			mouse.top=parseInt(mouse.top)-2+'px';
		}
		else if(parseInt(mouse.top)<84){
			mouse.top=parseInt(mouse.top)+2+'px';
		}
		
		if(parseInt(mouse.left)<723){
			mouse.left=parseInt(mouse.left)+1+'px';
		}
		else if(parseInt(mouse.left)>723){
			mouse.left=parseInt(mouse.left)-1+'px';	
		}
	}
	if(inRange(parseInt(mouse.left),722,724)==true&&inRange(parseInt(mouse.top),83,85)==true){
		//alert(mouse.top);
		funct="f2()";
		img[0].style.visibility="hidden";
		img[1].style.visibility="visible";
		
	}
	setTimeout(funct,1);
}

function f2(){
	if(parseInt(mouse.top)!=214||parseInt(mouse.left)<800){
		if(parseInt(mouse.top)<230){
		mouse.top=parseInt(mouse.top)+1+'px';
		}
		if(parseInt(mouse.left)<800){
			mouse.left=parseInt(mouse.left)+1+'px';
		}
	}
	if(inRange(parseInt(mouse.left),799,801)==true&&inRange(parseInt(mouse.top),213,215)==true){
		//alert("fin paso 2");
		funct="f3()";
		img[1].style.visibility="hidden";
		img[2].style.visibility="visible";

	}
	setTimeout(funct,1);
}
function f3(){
	if(parseInt(mouse.top)<281||parseInt(mouse.left)<900){
		if(parseInt(mouse.top)<281){
		mouse.top=parseInt(mouse.top)+1+'px';
		}
		if(parseInt(mouse.left)<900){
			mouse.left=parseInt(mouse.left)+1+'px';
		}
	}
		if(inRange(parseInt(mouse.left),899,901)==true&&inRange(parseInt(mouse.top),280,282)==true){
			//alert("fin paso 3");
			funct="f4()";
			img[3].style.visibility="hidden";
			img[4].style.visibility="visible";
	}
	//document.write(mouse.top+"<br>");
	setTimeout(funct,1);
}



function f4(){
	if(parseInt(mouse.top)<440||parseInt(mouse.left)!=450){
		if(parseInt(mouse.top)<440){
		mouse.top=parseInt(mouse.top)+2+'px';
		}
		if(parseInt(mouse.left)>450){
			mouse.left=parseInt(mouse.left)-2+'px';
		}
	}
	if(inRange(parseInt(mouse.left),449,451)==true&&inRange(parseInt(mouse.top),439,441)==true){
		//alert("fin paso 4");
		funct="f5()";
		img[4].style.visibility="hidden";
		img[5].style.visibility="visible";
		img[5].style.visibility="hidden";
		img[0].style.visibility="hidden";
		img[1].style.visibility="hidden";
		img[2].style.visibility="hidden";
		img[3].style.visibility="hidden";
		img[4].style.visibility="hidden";
		img[5].style.visibility="hidden";
		img[6].style.visibility="visible";
		playing=false;
	}
	setTimeout(funct,1);

}


function inRange(valor,min,max){//devuelve true si el valor esta dentro del rango
	var isIn=false;
	if (valor>=min&&valor<=max){
		isIn=true;
	}
	return isIn;
}
