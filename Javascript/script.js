function searchCocktail() {
    const searchTerm = document.getElementById("searchInput").value.trim();
  
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then(response => response.json())
      .then(data => {
        displayCocktails(data.drinks);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  function displayCocktails(cocktails) {
    const cocktailTable = document.getElementById("cocktailTable");
    cocktailTable.innerHTML = "";
  
    if (cocktails) {
      // Código para crear y mostrar la tabla con los cócteles y sus imágenes  
      // Crear encabezados de la tabla
      const tableHeader = "<tr><th>Nombre del cóctel</th><th>Imagen</th></tr>";
      cocktailTable.innerHTML += tableHeader;// +=  Este operador se usa para agregar contenido a una variable existente.
  
      cocktails.forEach(cocktail => {
        const cocktailRow = document.createElement("tr");
  
        const cocktailNameCell = document.createElement("td");
        cocktailNameCell.textContent = cocktail.strDrink;
  
        const cocktailImageCell = document.createElement("td");
        const cocktailImage = document.createElement("img");
        cocktailImage.src = cocktail.strDrinkThumb;
        cocktailImage.alt = cocktail.strDrink;
        cocktailImage.style.width = "100px"; // Ajustar el tamaño de la imagen según sea necesario
  
        cocktailImageCell.appendChild(cocktailImage);
  
        cocktailRow.appendChild(cocktailNameCell);
        cocktailRow.appendChild(cocktailImageCell);
        cocktailTable.appendChild(cocktailRow);
      });
    } else {
         // Código para mostrar un mensaje cuando no se encuentran resultados
         //<tr> define una fila en una tabla HTML.
         //<td colspan='2'>No se encontraron cócteles</td>---define una celda que ocupa dos columnas (colspan='2') y muestra el mensaje "No se encontraron cócteles" dentro de esa celda.
      const noResultsRow = "<tr><td colspan='2'>No se encontraron cócteles</td></tr>";
      cocktailTable.innerHTML += noResultsRow;
    }
  }
  