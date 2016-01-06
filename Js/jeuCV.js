$(document).ready(function(){
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////MENU PRESENTATION JEU/////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function startGame(){
    var interrupteurJump = true,addUp = -370, addLeft = parseInt($('#masque').css("left")),isWalking, isWalkingLeft, isIdlingLeft,isIdling;
    document.addEventListener('load', idle());
    /*****************************************ANIMATION********************************************************************/
    function idle (){
      isidleLeft = 0;
      isJumping = 0;
      isWalking = 0;
      isWalkingLeft = 0;
      $('#monPerso').css({"top":"-6px","left":"-1px"});
      $('#masque').css({"width":"65px", "height": "88px","top":"71%"});
      var start;
      var anime = function(temps){
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 100){
          valeur = $('#monPerso').css("left");
            switch(valeur){
            case "-1px" :
            $('#masque').css('width','64px');
            $('#monPerso').css("left","-65px");
            break;

            case "-65px" :
            $('#monPerso').css("left","-130px");
            break;

            case "-130px" :
            $('#masque').css('width','63px');
            $('#monPerso').css("left","-195px");
            break;

           case "-195px" :
            $('#monPerso').css("left","-258px");
            break;
           
           case "-258px" :
           $('#masque').css('width','64px');
            $('#monPerso').css("left","-322px");
            break;
           
           case "-322px" :
            $('#monPerso').css("left","-387px");
            break;
           
           case "-387px" :
           $('#masque').css('width','63px');
            $('#monPerso').css("left","-452px");
            break;
           
           case "-452px" :
            $('#monPerso').css("left","-1px");
            break;
           }
           start = temps;
         }
         if(isIdling){
          requestAnimationFrame(anime);
        }
      };
      isIdling = 1; 
      requestAnimationFrame(anime);
    };

    function idleLeft(){
      isJumping = 0;
      isIdling = 0;
      isWalking = 0;
      isWalkingLeft = 0;
      $('#monPerso').css({"top":"-189px","left":"-264px"});
      $('#masque').css({"width":"65px", "height": "88px","top":"71%"});
      var start;
      var anime = function(temps){
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 100){
          valeur = $('#monPerso').css("left");
            switch(valeur){
            case "-264px" :
            $('#monPerso').css("left","-329px");
            break;

            case "-329px" :
            $('#monPerso').css("left","-393px");
            break;

            case "-393px" :
            $('#monPerso').css("left","-457px");
            break;
           case "-457px" :
            $('#monPerso').css("left","-522px");
            break;
           
           case "-522px" :
            $('#monPerso').css("left","-586px");
            break;
           
           case "-586px" :
            $('#monPerso').css("left","-650px");
            break;
           
           case "-650px" :
            $('#monPerso').css("left","-715px");
            break;
           
           case "-715px" :
            $('#monPerso').css("left","-264px");
            break;
           }
           start = temps;
         }
         if(isIdlingLeft){
          requestAnimationFrame(anime);
        }
      };
      isIdlingLeft = 1; 
      requestAnimationFrame(anime);
    };
    
    function walk (){
      isJumping = 0;
      isIdling = 0;
      isIdlingLeft = 0;
      isWalkingLeft;
      $('#monPerso').css({"top":"-94px","left":"0px"});
      $('#masque').css({"width":"69px", "height": "88px","top":"71%"});
      var start;
      var anime = function(temps){
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 80){
          addLeft += 7;
          $('#masque').css({"left": addLeft + "px"});
          valeur = $('#monPerso').css("left");
            switch(valeur){
            case "0px" :
            $('#monPerso').css("left","-71px");
            break;

            case "-71px" :
            $('#monPerso').css("left","-142px");
            break;

            case "-142px" :
            $('#monPerso').css("left","-215px");
            break;
           case "-215px" :
            $('#monPerso').css("left","-287px");
            break;
           
           case "-287px" :
           
            $('#monPerso').css("left","-363px");
            break;
           
           case "-363px" :
            $('#monPerso').css("left","0px");
            break;
           }
           start = temps;
         }
         if(isWalking){
          requestAnimationFrame(anime);
        }
      };
      isWalking = 1; 
      requestAnimationFrame(anime);
    };

    function walkLeft (){
      isJumping = 0;
      isIdling = 0;
      isWalking = 0
      $('#monPerso').css({"top":"-275px","left":"-348px"});
      $('#masque').css({"width":"69px", "height": "90px","top":"71%"});
      var start;
      var anime = function(temps){
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 80){
          addLeft -= 7;
          $('#masque').css({"left": addLeft + "px"});
          valeur = $('#monPerso').css("left");
            switch(valeur){
            case "-348px" :
            $("#masque").css("width","74px")
            $('#monPerso').css("left","-422px");
            break;

            case "-422px" :
            $('#monPerso').css("left","-493px");
            break;

            case "-493px" :
            $('#monPerso').css("left","-565px");
            break;
           case "-565px" :
            $('#monPerso').css("left","-638px");
            break;
           
           case "-638px" :
           
            $('#monPerso').css("left","-709px");
            break;
           
           case "-709px" :
            $('#monPerso').css("left","-348px");
            break;
           }
           start = temps;
         }
         if(isWalkingLeft){
          requestAnimationFrame(anime);
        }
      };
      isWalkingLeft = 1; 
      requestAnimationFrame(anime);
    };

    function jump(){
      isIdling = 0;
      isIdlingLeft =0
      isWalking = 0;
      isWalkingLeft = 0;
      var start;
      var anime = function(temps){ 
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 10){
          if(addUp < -150 && interrupteurJump){
            addUp += 8;
            $('#monPerso').css({"top":"-580px","left":"0px"});
            $('#masque').css({"height":"90px","width":"66px"})
          } else {
            addUp -= 8;
            interrupteurJump = false;
           $('#monPerso').css({"left":"-86px","top":"-577px"});
           $('#masque').css({"width":"83px", "height":"90px"});
            if(addUp < -360 ){
              isJumping = 0;
              interrupteurJump = true;
              idle();
            }
          }
          $("#masque").css("top", -addUp + "px");
          start = temps;            
        }
        if(isJumping){
          requestAnimationFrame(anime);
        }
      }; 
    isJumping = 1; 
    requestAnimationFrame(anime);
    };
      /*****************************************KEYBOARD EVENT********************************************************************/
    window.onkeydown = function(event){
      var code = event.keyCode;
      switch(code){
        case 37 :
          if(!isWalkingLeft){
              walkLeft();  
            }           
          break;
        case 39 :
          if(!isWalking){
              walk();  
            }           
          break;
          case 83:
            jump(); 
        break;
      };  
    };

    window.onkeyup = function(event){
       code = event.keyCode;
      switch(code){
        case 37:
        isWalkingLeft = 0;
        idleLeft();
        break;
        case 39:
        isWalking = 0;
        idle();
        break;
      }
    };
    /*****************************************DEMARRAGE JEU!!!!********************************************************************/
    $('#playGame').click(function(){
      $('#cadreJeu ul').css("display","none");
      $('#instruction').css("display","none");
      isIdling = 0;
      isIdlingLeft = 0;
      isWalking = 0;
      isWalkingLeft = 0;
      play();
    });
  };

  startGame();
      

    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////// JEU EN COURS/////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function play(){
    $("#changeControle").replaceWith( "<img src='imgJeu/cslide.png' class='controlePanel'/>");
    var variable = true, variable2 = true,stopDie = true,interrupteurJump = true, addLeft =0, addUp = -370,isJumping,isSliding,glisse = true,saute = true, isDying,isIdling,isAttacking,isAttacking, isDashing, isDizzing, cadre = document.getElementById("cadreJeu");
    document.addEventListener('load', dash(), true);
    var monObjetAudio = {
      audioJump : new Audio('Audio/SFX_Jump_11.wav'),
      audioCoin : new Audio('Audio/coin.mp3'),
      audioSpikes : new Audio('Audio/zeldaGasp.wav'),
      audioHeart : new Audio('Audio/zeldaItemp.wav'),
      audioLaser : new Audio('Audio/Hit_00.mp3'),
      audioDie : new Audio('Audio/zeldaHurt.wav')
    };
    
    

    /*****************************************SCORE + PV + BACKGROUND + SOUND + COMPETENCES********************************************************/
    $("#masque").css('left',"150px");
    var defile = setInterval(function(){
      if(monObjet.pv < 0){
        die();
        clearInterval(defile);
        clearInterval(afficheElements);
        setTimeout(function(){
          alert('Vous êtes mort !');
          location.reload(); 
        }, 1000);
      }
      if(monObjet.score > 6){
        clearInterval(defile);
        clearInterval(afficheElements);
        setTimeout(function(){
          alert('Félicitations vous avez débloqué toutes les compétences!! Vous pouvez accédez à mon cv.');
          window.location = "CV.pdf";
        }, 1000);
      }
      $('#score').text("Score actuel : " + monObjet.score);
      $('#nextComp').text("PV actuel : " + monObjet.pv);
      addLeft+=10;
      $('#cadreJeu').css('background-position', -addLeft + 'px')
      if(addLeft > parseInt($('#cadreJeu').css('width')) + 65){
        addLeft = 0;
      }  
    }, 20);

    var debloqueComp = setInterval(function(){
      valeur = monObjet.score;
      switch(valeur){
        case 1 :
            $("#lockhtml").replaceWith( "<img src='imgJeu/Platform Tilesets Game Assets-04/Langage Icone/html.gif' class='lock'/>");
              
          break;
        case 2: 
            $("#lockcss").replaceWith( "<img src='imgJeu/Platform Tilesets Game Assets-04/Langage Icone/css.gif' class='lock'/>");
        break;
        case 3:
            $("#lockjavascript").replaceWith( "<img src='imgJeu/Platform Tilesets Game Assets-04/Langage Icone/javascript.gif' class='lock'/>");      
        break;
        case 4:
            $("#lockangular").replaceWith( "<img src='imgJeu/Platform Tilesets Game Assets-04/Langage Icone/angular.gif' class='lock'/>");      
        break;
        case 5:
            $("#lockjquery").replaceWith( "<img src='imgJeu/Platform Tilesets Game Assets-04/Langage Icone/jquery.gif' class='lock'/>");      
        break;
        case 6:
            $("#locknode").replaceWith( "<img src='imgJeu/Platform Tilesets Game Assets-04/Langage Icone/node.gif' class='lock'/>");      
        break;
        case 7:
            $("#lockmongo").replaceWith( "<img src='imgJeu/Platform Tilesets Game Assets-04/Langage Icone/mongo.gif' class='lock'/>");      
        break;
      };  
    }, 1000);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////ANIMATION PERSONNAGE IN GAME/////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function idle (){
      isSliding = 0;
      isDashing = 0;
      isDizzing = 0;
      isAttacking = 0;
    	$('#monPerso').css({"top":"-6px","left":"0px"});
      $('#masque').css({"width":"65px", "height": "88px","top":"71%"});
    	var start;
    	var anime = function(temps){
    		start = (start) ? start : temps; 
    		var progress = temps - start;
    		if(progress > 100){
  	      valeur = $('#monPerso').css("left");
  	       	switch(valeur){
  	        case "0px" :
  	        $('#monPerso').css("left","-64px");
  	        break;

  	        case "-64px" :
  	        $('#monPerso').css("left","-129px");
  	        break;

  	        case "-129px" :
  	        $('#monPerso').css("left","-193px");
  	        break;
  	       case "-193px" :
  	        $('#monPerso').css("left","-257px");
  	        break;
  	       
  	       case "-257px" :
           $('#masque').css('width','64px');
  	        $('#monPerso').css("left","-325px");
  	        break;
  	       
  	       case "-325px" :
  	        $('#monPerso').css("left","-386px");
  	        break;
  	       
  	       case "-386px" :
  	        $('#monPerso').css("left","-450px");
  	        break;
  	       
  	       case "-450px" :
  	        $('#monPerso').css("left","0px");
  	        break;
  	       }
  	       start = temps;
    	   }
    	   if(isIdling){
    	   	requestAnimationFrame(anime);
    		}
    	};
    	isIdling = 1; 
    	requestAnimationFrame(anime);
    };
    
    function dizzy(){
      isSliding = 0;
      isIdling = 0;
      isRunning = 0;
      isDashing = 0;
      isAttacking = 0;
      isAttacking2 = 0;
      $('#monPerso').css({"top":"-282px","left":"0px"});
      $('#masque').css({"width":"85px","height":"94px","top":"70%"});
      var start;
      var anime = function(temps){
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 100){
          valeur = $('#monPerso').css("left");
          switch(valeur){
            case "0px" :
            $('#masque').css({"width":"80px"});
            $('#monPerso').css({"left":"-80px"});
            break;

            case "-80px" :
            $('#monPerso').css({"left":"-164px"});
            break;

            case "-164px" :
            $('#monPerso').css("left","0px");
            break;
          }
          start = temps;
          setTimeout(function(){
            isDizzing = 0;
            dash();
          }, 1500)
        } 
        if(isDizzing) {
          requestAnimationFrame(anime);
        }
      };
      isDizzing = 1;
      requestAnimationFrame(anime);
    };

    function die(){
      monObjetAudio.audioDie.play();
      isSliding = 0;
      isDizzing = 0;
      isIdling = 0;
      isDashing = 0;
      isAttacking = 0;
      $('#monPerso').css({"top":"-376px","left":"0px"});
      $('#masque').css({"width":"68px","height":"90px", "top" : "71%"});
      var start;
      var anime = function(temps){
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 100){
          valeur = $('#monPerso').css("left");
          switch(valeur){
            case "0px" :
            $('#masque').css({"width":"79px","height":"90px"});
            $('#monPerso').css({"left":"-69px"});
            break;

            case "-69px" :
            $('#masque').css({"width":"83px"});
            $('#monPerso').css({"left":"-150px"});
            break;

            case "-150px" :
            $('#masque').css({"width":"89px"});
            $('#monPerso').css("left","-234px");
            break;

            case "-234px" :
            $('#monPerso').css({"left":"-323px"});
            break;

            case "-323px" :
            $('#monPerso').css("left","-418px");
            break;
           }
           start = temps;
          }
          if (isDying) {
            requestAnimationFrame(anime);
          }
        };
        isDying = 1;
        requestAnimationFrame(anime);
      };

    function dash(){
      isSliding = 0;
      isIdling = 0;
      isAttacking = 0;
      isJumping = 0;
      isDying = 0;
      isDizzing = 0;
      $('#masque').css({"width":"74px","height":"98px","top" : "69%"});
      $('#monPerso').css({"top":"-183px","left":"0px"});
      var start;
      var anime = function(temps){
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 100){
          valeur = $('#monPerso').css("left");
            switch(valeur){
              case "0px" :
              $('#masque').css({"width":"77px","height":"97px"});
              $('#monPerso').css({"left":"-80px","top":"-184px"});
              break;

              case "-80px" :
              $('#monPerso').css("left","-156px");
              break;

              case "-156px" :
              $('#monPerso').css("left","0px");
              $('#masque').css({"width":"74px"});
              break;
             }
            start = temps;
        }
        if (isDashing) {
          requestAnimationFrame(anime);
        }
      };
      isDashing = 1;
      requestAnimationFrame(anime);
    };

    function attack (){ 
      isIdling = 0;
      isRunning = 0;
      isDashing = 0;
      isAttacking2 = 0;
      isJumping = 0;
      $('#monPerso').css({"top":"-679px","left":"0px"});
      $('#masque').css({"height":"102px" ,"width":"65px",'top':'68%'});
      var start;
      var anime = function(temps){
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 100){
          valeur = $('#monPerso').css("left");
            switch(valeur){
              case "0px" :
              $('#masque').css({"height":"90px", "width":"65px"});
              $('#monPerso').css({"left":"-110px", "top":"-694px"});
              break;

              case "-110px" :
              $('#masque').css({"height":"102px","width":"65px"});
              $('#monPerso').css({"left":"-219px", "top":"-679px"});
              break;

              case "-219px" :
              $('#masque').css({"width":"110px"});
              $('#monPerso').css({"left":"-327px"});
              break;
             case "-327px" :
              $('#monPerso').css({"left":"-436px"});
              $('#masque').css({"width":"109px"});
              break;
             
             case "-436px" :
              $('#monPerso').css({"left":"-545px"});
              $('#masque').css({"width":"66px"});
              dash();
              break;
             }
            start = temps;
        }
        if (isAttacking) {
          requestAnimationFrame(anime);
        }
        };
      isAttacking = 1;
      requestAnimationFrame(anime);
    }; 
        
    function jump(){
      monObjetAudio.audioJump.play();
      console.log('jump');
      isIdling = 0;
      isRunning = 0;
      isDashing = 0;
      isAttacking = 0;
      isSliding = 0;
      var start;
      var anime = function(temps){ 
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 10){
          if(addUp < -150 && interrupteurJump){
            addUp += 8;
            $('#monPerso').css({"top":"-580px","left":"0px"});
            $('#masque').css({"height":"90px","width":"66px"})
          } else {
            addUp -= 8;
            interrupteurJump = false;
           $('#monPerso').css({"left":"-86px","top":"-577px"});
           $('#masque').css({"width":"83px", "height":"90px"});
            if(addUp < -350 ){
              isJumping = 0;
              saute = true;
              interrupteurJump = true;
              dash();
            }
          }
          $("#masque").css("top", -addUp + "px");
          start = temps;            
        }
        if(isJumping){
          requestAnimationFrame(anime);
        }
      }; 
    isJumping = 1; 
    requestAnimationFrame(anime);
    };  

    function slide(){
      isIdling = 0;
      isRunning = 0;
      isDashing = 0;
      isAttacking = 0;
      isJumping = 0;
      var start;
      var anime = function(temps){ 
        start = (start) ? start : temps; 
        var progress = temps - start;
        if(progress > 10){
          $('#monPerso').css({"top":"-589px","left":"-192px"});
          $('#masque').css({"height":"77px","width":"84px","top": "75%"});
          glisse = true;
        start = temps;            
        }
        if(isSliding){
          requestAnimationFrame(anime);
          setTimeout(function(){
            isDashing = false;
            isSliding = false;
            dash();
          }, 1000)
        }
      }; 
    isSliding = 1; 
    requestAnimationFrame(anime);
    };  
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////EVENT KEYBOARD IN GAME//////////////////////////////////////////////////////////////////
     ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    window.onkeydown = function(event){
      var code = event.keyCode;
      switch(code){
        case 61 :
          if(!isDashing){
              dash();  
            }           
          break;
        case 13: 
        if(!isAttacking){
            attack();
          } 
        break;
        case 83:
        if(saute){
            jump();
            
          }       
        break;
        case 37 :
         $('html').bind('keypress', function(e)
          {
         if(e.keyCode == 13)
         {
            return false;
         }
        });
          break;
        case 39 :
             return false;
          break;
          case 67 :
            if(glisse){
               slide();
               isDashing = false;
               setTimeout(function(){
                dash();
                }, 1500)
             }
          break;
      };  
    };
    window.onkeyup = function(event){
       code = event.keyCode;
      switch(code){
        case 67:
        glisse = true;
        break;
      }
    };

     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     ///////////////////////////////////////CREATION OBSTACLE ET OBJET IN GAME/////////////////////////////////////////////////////
     //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var monObjet = {i : 0, j : 0, k : 0, l : 0, score : 0, pv : 2, stopDetectionHeart : true, stopDetectionSpikes : true, stopDetectionGold : true, stopDetectionBeam : true, v :0}; 
    function createSpikes(){
      monObjet.i++;
      var spikes = function (){
          var _this = this;
          this.speed = 7;
          this.valeur = 960;
          this.monImage = document.createElement('img');
          this.ID = this.monImage.id = "spikes" + monObjet.i;
          this.Position = this.monImage.style.position = "absolute";
          this.positionY = this.monImage.style.top = 82 + '%';
          this.positionX = this.monImage.style.left = 960 +'px';
          //this.BORDER = this.monImage.style.border = "1px solid black";
          this.SRC = this.monImage.src = 'imgJeu/Platform Tilesets Game Assets-04/Element resize/spikes.gif'; 
          cadre.appendChild(this.monImage);
          this.defilement = function repeatOften() {
            if(collisionSpikes()){
              monObjetAudio.audioSpikes.play();
              dizzy();
            }
            _this.valeur -= _this.speed;
            _this.monImage.style.left = _this.valeur + 'px';
            requestAnimationFrame(_this.defilement);
          }
          requestAnimationFrame(_this.defilement);         
         };
        return new spikes();
       };
      
    function createGold(){
     monObjet.j++;
      var gold = function (){
        var _this = this;
        this.valeur = 960;
        this.speed = Math.floor((Math.random()* 10 )+ 5);
        this.monImage = document.createElement('img');
        this.ID = this.monImage.id = "coin" + monObjet.j;
        this.Position = this.monImage.style.position = "absolute";
        this.positionY = this.monImage.style.top = 69 + '%';
        this.positionX = this.monImage.style.left = 960 + '%';
        //this.BORDER = this.monImage.style.border = "1px solid black";
        this.SRC = this.monImage.src = 'imgJeu/Platform Tilesets Game Assets-04/Element resize/piece.gif'; 
        cadre.appendChild(this.monImage);
        this.defilement = function repeatOften() {
          if(collisionGold()){
            monObjetAudio.audioCoin.play();
            $('#coin' + monObjet.j).remove();
          }
          _this.valeur -= _this.speed;
          _this.monImage.style.left = _this.valeur + 'px';
          requestAnimationFrame(_this.defilement);
        }
        requestAnimationFrame(_this.defilement); 
      };
      return new gold();
    };

    function createHeart(){
      monObjet.k++;
      var heart = function (){
        var _this = this;
        this.valeur = 960;
        this.speed = Math.floor((Math.random()* 10 )+ 5);
        this.monImage = document.createElement('img');
        this.ID = this.monImage.id = "heart" + monObjet.k;
        this.Position = this.monImage.style.position = "absolute";
        this.positionY = this.monImage.style.top = 68 + '%';
        this.positionX = this.monImage.style.left = 960 + '%';
        //this.BORDER = this.monImage.style.border = "1px solid black";
        this.SRC = this.monImage.src = 'imgJeu/Platform Tilesets Game Assets-04/Element resize/heart.gif'; 
        cadre.appendChild(this.monImage);
        this.defilement = function repeatOften() {
          if(collisionHeart()){
            monObjetAudio.audioHeart.play();
            $('#heart' + monObjet.k).remove();
          }
          _this.valeur -= _this.speed;
          _this.monImage.style.left = _this.valeur + 'px';
          requestAnimationFrame(_this.defilement);
        }
        requestAnimationFrame(_this.defilement); 
      };
      return new heart();
    };

    function createBeam(){
      monObjet.l++;
      var beam = function (){
        var _this = this;
        this.valeur = 960;
        this.speed = 8;
        this.monImage = document.createElement('img');
        this.ID = this.monImage.id = "beam" + monObjet.l;
        this.Position = this.monImage.style.position = "absolute";
        this.positionY = this.monImage.style.top = 4 + '%';
        this.positionX = this.monImage.style.left = 960 + '%';
        //this.BORDER = this.monImage.style.border = "1px solid black";
        this.SRC = this.monImage.src = 'imgJeu/beam.png'; 
        cadre.appendChild(this.monImage);
        this.suppr = function(){
          if(_this.valeur < 0){
            $('#beam' + monObjet.l).remove();
          }
        }
        this.defilement = function repeatOften() {
          if(collisionBeam()){
          $('#beam' + monObjet.l).remove();
          }
          _this.valeur -= _this.speed;
          _this.monImage.style.left = _this.valeur + 'px';
          requestAnimationFrame(_this.defilement);
        }
        requestAnimationFrame(_this.defilement); 
      };
      return new beam();
    };

    /*****************************************DEFILEMENT DECOR********************************************************************/
    
    function afficheElements(){
      var elemType = Math.floor(Math.random()*4);
      if (elemType == 0){
          createGold();
        setTimeout(function(){
          monObjet.stopDetectionGold = true;
        }, 1000);
      }else{
        if(elemType == 1){
            createSpikes();
          setTimeout(function(){
            monObjet.stopDetectionSpikes = true;
          }, 1000);
        }else{
          if(elemType == 2){
              createHeart();
            setTimeout(function(){
              monObjet.stopDetectionHeart = true;
            }, 1000);
          }else{
            if(elemType == 3){
                createBeam();
              setTimeout(function(){
                monObjet.stopDetectionBeam = true;
              }, 1000);
            }
          }
        }
      }
    };

    var ennemie = setInterval(afficheElements, 3000);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////GESTION COLLISIONS D'OBJETS////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function collisionSpikes (){
      if(parseInt($('#masque').css('left')) >= parseInt($('#spikes' + monObjet.i).css('left')) + parseInt($('#spikes' + monObjet.i).css('width'))
        || parseInt($('#masque').css('left')) + parseInt($('#masque').css('width')) <= parseInt($('#spikes' + monObjet.i).css('left'))
        || parseInt($('#masque').css('top')) >= parseInt($('#spikes' + monObjet.i).css('top')) + parseInt($('#spikes' + monObjet.i).css('height'))
        || parseInt($('#masque').css('top')) + parseInt($('#masque').css('height')) <= parseInt($('#spikes' + monObjet.i).css('top'))){
        return false;
      } else {
          if(monObjet.stopDetectionSpikes){
          monObjet.pv--;
          monObjet.stopDetectionSpikes = false;
          return true; 
        } 
      }
    };

    function collisionGold (){
      if(parseInt($('#masque').css('left')) >= parseInt($('#coin' + monObjet.j).css('left')) + parseInt($('#coin' + monObjet.j).css('width'))
        || parseInt($('#masque').css('left')) + parseInt($('#masque').css('width')) <= parseInt($('#coin' + monObjet.j).css('left'))
        || parseInt($('#masque').css('top')) >= parseInt($('#coin' + monObjet.j).css('top')) + parseInt($('#coin' + monObjet.j).css('height'))
        || parseInt($('#masque').css('top')) + parseInt($('#masque').css('height')) <= parseInt($('#coin' + monObjet.j).css('top'))){
        return false;
      } else {
        if(monObjet.stopDetectionGold){
          monObjet.score++;
          monObjet.stopDetectionGold = false;
          return true; 
        }
      }
    };

    function collisionHeart (){
      if(parseInt($('#masque').css('left')) >= parseInt($('#heart' + monObjet.k).css('left')) + parseInt($('#heart' + monObjet.k).css('width'))
        || parseInt($('#masque').css('left')) + parseInt($('#masque').css('width')) <= parseInt($('#heart' + monObjet.k).css('left'))
        || parseInt($('#masque').css('top')) >= parseInt($('#heart' + monObjet.k).css('top')) + parseInt($('#heart' + monObjet.i).css('height'))
        || parseInt($('#masque').css('top')) + parseInt($('#masque').css('height')) <= parseInt($('#heart' + monObjet.k).css('top'))){
        return false;
      } else {
          if(monObjet.stopDetectionHeart){
          monObjet.pv++;
          monObjet.stopDetectionHeart = false;
          return true; 
        } 
      }
    };
    function collisionBeam (){
      if(parseInt($('#masque').css('left')) >= parseInt($('#beam' + monObjet.l).css('left')) + parseInt($('#beam' + monObjet.l).css('width'))
        || parseInt($('#masque').css('left')) + parseInt($('#masque').css('width')) <= parseInt($('#beam' + monObjet.l).css('left'))
        || parseInt($('#masque').css('top')) >= parseInt($('#beam' + monObjet.l).css('top')) + parseInt($('#beam' + monObjet.l).css('height'))
        || parseInt($('#masque').css('top')) + parseInt($('#masque').css('height')) <= parseInt($('#beam' + monObjet.l).css('top'))){
        return false;
      } else {
          if(monObjet.stopDetectionBeam){
            monObjet.pv = 0;
            monObjet.stopDetectionBeam = false;
          return true; 
        } 
      }
    };
  }; 
});