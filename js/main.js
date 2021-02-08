let searchQuery = document.getElementById('querySearch');
const searchBtn = document.getElementById('searhcBtn')
const searchResult = document.getElementById('recipe_container')

searchBtn.addEventListener('click', function() {
    // console.log('me')
    // let show = document.getElementById('querySearch').value;
    console.log(searchQuery.value)
    foodApi()
})

function foodApi() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery.value}`)
        .then(resp => resp.json())
        .then(data => generateHTML(data.meals))
        // .then(data => console.log(data))
}


function generateHTML(object) {
    console.log(object)
    let htmlCode = '';

    object.map(event => {
        console.log(event)
        const recipeName = event.strMeal
        const recipeImge = event.strMealThumb

        htmlCode += `
                     <li>
                        <img src="${recipeImge}">
                        <h4>${recipeName}</h4>
                    </li>
        `
        searchResult.innerHTML = htmlCode

    })





}