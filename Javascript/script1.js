document.getElementById('buscarCocktel').addEventListener('click', () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then(data => {
        const cocktail = data.drinks[0];
        const detallesCocktel = document.getElementById('detallesCocktel');
        detallesCocktel.innerHTML = createCocktailDetailsTable(cocktail);
      })
      .catch(error => {
        console.error('Error al obtener detalles del cóctel:', error);
      });
  });
  
  function createCocktailDetailsTable(cocktail) {
    let tableHTML = '<table>';
  
    tableHTML += `<tr><th>Nombre</th><td>${cocktail.strDrink}</td></tr>`;
    tableHTML += `<tr><th>Imagen</th><td><img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}"></td></tr>`;
    
    tableHTML += '<tr><th>Ingredientes</th><td><ul>';
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      const measure = cocktail[`strMeasure${i}`];
  
      if (ingredient && ingredient.trim() !== '') {
        tableHTML += `<li>${ingredient} - ${measure}</li>`;
      }
    }
    tableHTML += '</ul></td></tr>';
  
    tableHTML += `<tr><th>Instrucciones</th><td>${cocktail.strInstructions}</td></tr>`;
  
    tableHTML += '</table>';
    return tableHTML;
  }
  