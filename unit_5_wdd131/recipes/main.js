// main.js

import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random()*num)
}

function getRandomRecipe(list) {
    const listLength = list.length
    const randomNum = random(listLength);
    return list[randomNum]
}

let recipe = (getRandomRecipe(recipes))

function recipeTemplate(recipe) {
    return `<div class="recipe-card">

                <div class="recipe-img">
                    <img src="${recipe.image}" alt="${recipe.name}">
                </div>

                <div class="recipe-info">
                    <div class="tags">
                        ${tagsTemplate(recipe.tags)}
                    </div>
                    <h2 class="title">${recipe.name}</h2>
                    ${ratingTemplate(recipe.rating)}
                    <p class="description">${recipe.description}</p>
                </div>

            </div>`
}

function tagsTemplate(tags) {
    // loop through the tags list and transform the strings to HTML
    let html = "";
    for (let i = 0; i < tags.length; i++){
        html +=`<p class="tag">${tags[i]}</p>`
    }
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
>`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for (let i = 1; i < 6; i++) {
        // check to see if the current index of the loop is less than our rating
		// if so then output a filled star
        // else output an empty star
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        } else {
            html +=`<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    let recipe_post = document.querySelector(".recipes")

    if (recipeList.length === 0) {
        recipe_post.innerHTML = `<p class="no-results">No recipes found. Try a different search.</p>`;
        return;
    }
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let recipleHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
	// Set the HTML strings as the innerHTML of our output element.
    recipe_post.innerHTML = recipleHTML
}

function init() {
  // get a random recipe
  const recipe = getRandomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

function filterRecipes(query){
    query = query.toLowerCase().trim();

    const filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.recipeIngredient.find((ingredient) => ingredient.toLowerCase().includes(query)) ||
        recipe.tags.find((tag) => tag.toLowerCase().includes(query))
    )
    console.log("Filtered Recipes: ", filtered)
    const sorted = filtered.sort((a,b) =>
        a.name.localeCompare(b.name)
    )

    return sorted
}

function searchHandler(event){
    event.preventDefault();
    console.log("Searching...")

    const searchValue = document.querySelector("#search-bar input").value.trim();
    console.log("Search value: ", searchValue)
    const searchResults = filterRecipes(searchValue)

    renderRecipes(searchResults)
}

document.querySelector("#search-bar").addEventListener("submit",searchHandler)