let searchQuery = document.getElementById('querySearch');
const searchBtn = document.getElementById('searhcBtn')
const recipieDetails = document.getElementById('details')
const searchResult = document.getElementById('recipe_container')

searchBtn.addEventListener('click', function() {
    // console.log('me')
    // let show = document.getElementById('querySearch').value;
    console.log(searchQuery.value)
    foodApi()
})

const foodApi = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery.value}`)
        .then(resp => resp.json())
        .then(data => generateHTML(data.meals))
}


const generateHTML = (object) => {
    console.log(object)
    let htmlCode = '';

    object.map((event, index) => {
        let show = index;
        console.log(event)
        const recipeName = event.strMeal
        const recipeImge = event.strMealThumb

        htmlCode += `
                     <li onclick="myFunction()">
                        <img src="${recipeImge}">
                        <h4>${recipeName}</h4>
                    </li>
        `
        searchResult.innerHTML = htmlCode






    })



}

//event handeler