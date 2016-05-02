import java.util.*;
class Formativa2 {
	public static void main(String[] args) {
		String frase=leeFraseEspecial();
		int total=convierteFrase(frase);
		System.out.println(frase.concat("- Total: ")+total);
	}
	public static String leeFraseEspecial(){
		Scanner t=new Scanner(System.in);
		String frase="";
		System.out.println("Ahora ingrese su frase:");
		frase=t.nextLine();
		//validaciones
		while(frase.length()==0||(almenosUnGuion(frase)==false&&soloLetrasMinusculas(frase)==false)){

			if(frase.length()==0){System.out.println("Frase vacia");}
			else {
				if(almenosUnGuion(frase)==false){System.out.println("Frase sin guiones");}
				if(soloLetrasMinusculas(frase)==false){System.out.println("Frase con carecteres no permitidos.");}
			}
			System.out.println("Ahora ingrese su frase:");
			frase=t.nextLine();
		}
		return frase;
	}

	public static boolean almenosUnGuion(String f){
		boolean b=false;
		if(f.indexOf("_")>=0){
			b=true;
		}
		return b;
	}

	public static boolean soloLetrasMinusculas(String f){
		boolean b=true;
		for (int i=0;i<f.length();i++) {
			char c=f.charAt(i);
			if(c<'a'||c>'z'){
				b=false;
				i=f.length();
			}
		}
		return b;
	}

	public static int convierteFrase(String f){
		int suma=0;
		//" h      o     l   a  "
		//  104 + 111 + 108 + 97 = ?
		//proceso correspondiente
		for (int i=0;i<f.length();i++) {
			char c=f.charAt(i);
			suma=suma+c;
		}
		return suma;
	}


}