const getDrinks = async () => {
    try {
      return (await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")).json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const showDrinks = async () => {
    const drinks = (await getDrinks()).drinks;
    const drinkList = document.getElementById("cocktails");
  
    console.log(drinks);
    drinks.forEach((drink) => {
      const section = document.createElement("section");
      section.classList.add("cocktail-card");
  
      const h3 = document.createElement("h3");
      h3.classList.add("cocktail-title");
      h3.innerHTML = drink.strDrink;
      section.append(h3);
  
      const img = document.createElement("img");
      img.classList.add("cocktail-image");
      img.src = drink.strDrinkThumb;
      section.append(img);
  
      const p = document.createElement("p");
      p.classList.add("cocktail-instructions");
      p.innerHTML = drink.strInstructions;
      section.append(p);
  
      drinkList.append(section);
    });
  };
  
  window.onload = showDrinks;
  