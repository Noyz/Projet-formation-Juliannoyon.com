<!DOCTYPE html>

<?php
if(!empty($_POST)){
    extract ($_POST);
    $valid = true;
    if(empty($name)) {
      $valid=false;
      $erreurnom="Vous n'avez pas rempli votre nom";
    }

    if(empty($email)) {
      $valid=false;
      $erreurmessage="Vous n'avez pas rempli votre email";
    }

    if(empty($commentaire)) {
      $valid=false;
      $erreurcommentaire="Vous n'avez rien écrit.";
    }


  if($valid) {
    echo"tous les champs sont bons";
  }
}
  ?>
	<html>
		


			<link href="css/hover.css" rel="stylesheet" media="all"/>
			<link type="text/css" rel="stylesheet" href="css/stylesheetcontact.css"/>
      <head>
			<title>Selectapp page</title>
		</head>
		<body>

			<p>En cours...</p>

			
			<form method="post" action="contact.php">

        <fieldset>
              <legend>Vos coordonnées</legend>
              <p>
                <label for="name">Nom & Prénom : </label>
                <input type="text" name="name" id="name" size="30" maxlength="15" placeholder="Ex : NOYON Julian"/>
              </p>
              <p>
                <label for="email">Votre e-mail : </label>
                <input type="email" name="email" id="email" placeholder="Ex : Julian.noyon@gmail.com">
              </p>
              <p>
                <label for="tel">Numéro de téléphone : </label>
                <input type="tel" name="tel" id="tel" maxlength="10"/>
              </p>
              <p>
                <label for="url">Insérer l'adresse de votre site internet : </label>
                <input type="url" name="url" id="url" placeholder="Ex : Juliannoyon.com"/>
              </p>
              <p>
                <label for="message">Votre message : </label>
                <textarea name="message"  id="message" rows="5" cols="35"/>
                </textarea>
              </p>     
              <input type="submit" value="Envoyer" />         
            </fieldset>
          </form>
        </div>
        

        <div id="rateme">
          <form method="post" action="contact.php">
            <h3> Si vous avez le temps n'hésitez pas à me laisser une appréciation sur mon site afin de l'améliorer : </h3>
            <fieldset>
              <legend>Evaluation</legend>
              <p>
                <label for="note">Qu'elle note générale donneriez vous à mon site ?</label>
                <input type="number" max="10" min="0"/>
              </p>   </br>
              <p>Le design vous semble-t'il esthétique ?</br>
                <label for="oui">Oui</label>
                <input type="radio" value="Yes" name="oui" id="oui"/></br>

                <label for="bof">Peu mieux faire</label>
                <input type="radio" value="maybe" name="bof" id="bof"/></br>

                <label for="non">Non</label>
                <input type="radio" value="no" name="non" id="non"/></br>              
              </p>
              </br>
              <p>
                <label for="rateme">Depuis quel support êtes vous connecter? </label> </br>
                  <select name="rateme" id="rateme">
                    <option value="ordinateur" selected >Ordinateur</option>
                    <option value="smartphone">Tmartphone</option>
                    <option value="tablette">Tablette</option>
                  </select>
              </p>
              <p>
                <label for="commentaire">Une remarque ou un commentaire :</label>
                <textarea name="commentaire"  id="commentaire" rows="5" cols="50"/>
                </textarea>
                <input type="submit" value="Envoyer" />
            </fieldset>
</form> 

		</body>
	</html>