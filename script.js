let rightCode = ["C","O","D","E","1","2","3"];
let currentCode = [];
let keypressed = "";
let counter = 0;
let pageStatus = "OK";

function destruction(){
	let divsToHide = document.getElementsByClassName("hidden"); // getElementsByClassName renvoie un array, d'où le [0] ensuite
    
	divsToHide[0].className = "showed";
    /*divsToHide[0].style.visibility = "hidden"; // seulement [0] et pas une boucle car il n'y a que body qui a cette class
    

    divsToHide[0].style.backgroundImage = "url('https://cdn.futura-sciences.com/buildsv6/images/wide1920/7/8/e/78e6f31c01_89923_champignon-atomique.jpg')";
	divsToHide[0].style.backgroundSize = "cover";*/
	pageStatus = "notOK";
    currentCode = [];
    counter = 0;
}

function reconstruction(){
	let divsToHide = document.getElementsByClassName("showed"); 
    divsToHide[0].className = "hidden";
    
    pageStatus = "OK";
    currentCode = [];
    counter = 0;
}


function logKey(e) {
	keypressed = e.key.toUpperCase();

	if(keypressed == rightCode[counter]){
		currentCode = currentCode.concat([keypressed]);
		counter++;
	}
	else{
		currentCode = [];
		counter = 0;
	}

	console.log(currentCode);

	if (counter == rightCode.length){ /*si le code a été correctement entré jusqu'au bout*/
		if (pageStatus == "OK"){
			destruction();
		}
		else if (pageStatus == "notOK"){
			reconstruction();
		}
	}
}

document.addEventListener('keydown', logKey);