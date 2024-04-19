<!DOCTYPE html>
<html>

<head>
  <title>Exercice 3</title>
  <style>
    body {
      background-color: rgb(22, 22, 22);
      color: rgb(184, 184, 184);
      font-size: 20px;
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
    }

    .pairs,
    .impairs {
      display: inline-block;
      width: 48%;
      margin: 1%;
      padding: 10px;
      border: 1px solid rgb(180, 180, 180);
    }
  </style>
  <script>
    function ajouterNombre() {
      let nombre = parseInt(document.getElementById("nombre").value);
      let cible;
      if (nombre % 2 === 0) {
        cible = document.querySelector(".pairs");
      } else if (nombre % 2 === 1) {
        cible = document.querySelector(".impairs");
      } else {
        alert("Veuillez saisir un nombre valide.");
        return;
      }
      let element = document.createElement("p");
      element.textContent = nombre;
      cible.appendChild(element);
    }
  </script>
</head>

<body>
  <label for="nombre">Saisir un nombre:</label>
  <input type="number" id="nombre">
  <button onclick="ajouterNombre()">Ajouter</button><br>
  <div class="pairs">Nombres pairs:</div>
  <div class="impairs">Nombres impairs:</div>
</body>

</html>
