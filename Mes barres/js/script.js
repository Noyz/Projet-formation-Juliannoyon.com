window.addEventListener('load', function (){ 
	var stock = 0;
	var allDocument = document.getElementById('all');
	var increment = -500;
	var myId = document.getElementById('monId');
	function createCarre (a, b) {
		this.maDiv = document.createElement('div');
		this.classe = this.maDiv.className = "firstSquare";
		this.hauteur = this.maDiv.style.height = 100 + 'px';
		this.largeur = this.maDiv.style.width = 500 + 'px';
		this.couleur = this.maDiv.style.backgroundColor = 'white';
		this.position = this.maDiv.style.position ="absolute";
		this.positionX = this.maDiv.style.top = a + 'px';
		this.positionY = this.maDiv.style.left = b + 'px';
		this.bordure = this.maDiv.style.border ="1px solid black";
		this.affichage = this.maDiv.style.overflow ="hidden";
		allDocument.appendChild(this.maDiv);
	};
	function monBouton (){
		var touch = document.createElement('input');
		touch.setAttribute("type", "button");
		touch.setAttribute("value", "Touche moi pour créer un carré");
		touch.setAttribute("id", "touchMe");
		touch.style.borderRadius = 35 + "%";
		touch.style.position = "absolute";
		touch.style.top = 500 + 'px';
		touch.style.left = 500 + 'px';
		var attach2 = allDocument.appendChild(touch);
	};

    monBouton();

	var maNewDiv = document.getElementById('touchMe');
	var monTableau = []; 
	monTableau2 = [];
	var i = 0;

	function anim (a){
		var animation = document.createElement('div');
		animation.style.height = 100 + 'px';
		animation.Id = "monId";
		animation.style.width = 500 + 'px';
		animation.style.backgroundColor = "red";
	 	animation.style.position = "absolute";
	 	animation.style.top = 0 + "px";
	 	animation.style.left = -500 + "px";
		a.maDiv.appendChild(animation);
		monTableau2.push(animation);
	};	
	maNewDiv.onclick = function (){
		if(i < 2){
			monTableau[i] = new createCarre(i * 100, 100);
			anim(monTableau[i]);
			i++;
			var myVar = setInterval(function(){increment +=5; monTableau2[0].style.left = increment + "px"; if(monTableau2[0].style.left == -150 +'px'){
				clearInterval(myVar);
			};}, 10);

			var myVar1 = setInterval(function(){increment +=5; monTableau2[1].style.left = increment + "px"; if(monTableau2[1].style.left == -450 +'px'){
				clearInterval(myVar1);
			};}, 50);
		};
	}; 
	// html = -150px;
}, true);