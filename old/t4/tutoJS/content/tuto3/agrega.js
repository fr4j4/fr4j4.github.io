var img=document.getElementsByClassName("img");
ie4 = document.all
var paso=1;
var playing=false;
var funct="f1()";
function inicio(){
	mouse=cursor.style;
	mouse.top="0px";
	mouse.left="0px";
	mouse.visibility="hidden";
		for(i=0;i<6;i++){
			img[i].style.visibility = "hidden";
		}
		img[0].style.visibility = "visible";
}
function play(){
		for(i=0;i<6;i++){
			img[i].style.visibility = "hidden";
		}
		img[0].style.visibility = "visible";
		funct="f1()";
	if(!playing){
		mouse.visibility="visible";
		playing=true;
		f1();	
	}
	
}

function f1(){
	if(parseInt(mouse.left)!=400||parseInt(mouse.top)!=90){
		if(parseInt(mouse.top)>90){
			mouse.top=parseInt(mouse.top)-1+'px';
		}
		else if(parseInt(mouse.top)<90){
			mouse.top=parseInt(mouse.top)+1+'px';
		}
		
		if(parseInt(mouse.left)<400){
			mouse.left=parseInt(mouse.left)+2+'px';
		}
		else if(parseInt(mouse.left)>400){
			mouse.left=parseInt(mouse.left)-2+'px';	
		}
	}
	if(inRange(parseInt(mouse.left),399,401)==true&&inRange(parseInt(mouse.top),89,91)==true){
		funct="f2()";
		img[0].style.visibility="hidden";
		img[1].style.visibility="visible";
		
	}
	setTimeout(funct,1);
}

function f2(){
	if(parseInt(mouse.left)>224 || parseInt(mouse.top)<627){
		if(parseInt(mouse.left)>224){
			mouse.left=parseInt(mouse.left)-1+'px';
		}
		if(parseInt(mouse.top)<627){
		mouse.top=parseInt(mouse.top)+1+'px';
		}
	}
	if(inRange(parseInt(mouse.left),223,225)==true&&inRange(parseInt(mouse.top),626,628)==true){
		funct="f3()";
		img[1].style.visibility="hidden";
		img[2].style.visibility="visible";

	}
	setTimeout(funct,1);
}

function f3(){
	if(parseInt(mouse.left)<334 || parseInt(mouse.top)>356){
		if(parseInt(mouse.left)<334){
			mouse.left=parseInt(mouse.left)+1+'px';
		}
		if(parseInt(mouse.top)>356){
		mouse.top=parseInt(mouse.top)-1+'px';
		}
	}
		if(inRange(parseInt(mouse.left),333,335)==true&&inRange(parseInt(mouse.top),355,357)==true){
			//alert("fin paso 3");
			funct="f4()";
			img[2].style.visibility="hidden";
			img[3].style.visibility="visible";
	}
	setTimeout(funct,1);
}

function f4(){
	if(parseInt(mouse.left)<484 || parseInt(mouse.top)<462){
		if(parseInt(mouse.left)<484){
			mouse.left=parseInt(mouse.left)+1+'px';
		}
		if(parseInt(mouse.top)<462){
		mouse.top=parseInt(mouse.top)+1+'px';
		}
	}
		if(inRange(parseInt(mouse.left),483,485)==true&&inRange(parseInt(mouse.top),461,463)==true){
			funct="f5()";
			img[3].style.visibility="hidden";
			img[4].style.visibility="visible";
	}
	setTimeout(funct,2);
}

function f5(){
	if(parseInt(mouse.left)<493 || parseInt(mouse.top)<530){
		if(parseInt(mouse.left)<493){
			mouse.left=parseInt(mouse.left)+1+'px';
		}
		if(parseInt(mouse.top)<530){
		mouse.top=parseInt(mouse.top)+1+'px';
		}
	}
		if(inRange(parseInt(mouse.left),492,494)==true&&inRange(parseInt(mouse.top),529,531)==true){


		img[0].style.visibility="hidden";
		img[1].style.visibility="hidden";
		img[2].style.visibility="hidden";
		img[3].style.visibility="hidden";
		img[4].style.visibility="hidden";
		img[4].style.visibility="hidden";
		img[5].style.visibility="visible";
	playing=false;
	}
	setTimeout(funct,2);
}

function inRange(valor,min,max){//devuelve true si el valor esta dentro del rango
	var isIn=false;
	if (valor>=min&&valor<=max){
		isIn=true;
	}
	return isIn;
}
