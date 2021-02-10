document.getElementById('search_btn').addEventListener('click', () => {
    foodApi()
})




const searchQuery = document.getElementById('querySearch').value.trim()
const foodApi = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
        .then(res => res.json())
        .then(data => generateHTML(data.meals))
}

const generateHTML = (mealList) => {
    let html = '';
    const mealsList = document.getElementById('result_area')

    if (mealList) {
        mealList.map((e) => {
            html += `<div onclick="displayDetails()" class="meal_item" id="${e.idMeal}">
                    <div class="meal_img">
                        <img src="${e.strMealThumb}" alt="${e.strMeal}">
                    </div>
                    <div class="meal_text">
                        <h3>${e.strMeal}</h3>
                    </div>
                </div>
        `

            mealsList.innerHTML = html



        })
        mealsList.classList.remove('not-found')
    } else {
        html = "Your meals not found"
        mealsList.innerHTML = html;
        mealsList.classList.add('not-found')
    }
}


const displayDetails = () => {
    console.log('clicked')
}



//meals details

// const mealDetailsAPi = () => {
//     fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
//         .then(res => res.json())
//         .then(data => mealsHandeler(data.meals))
// }

// const mealsHandeler = (detailsResuls) => {

//     detailsResuls.forEach(element => {
//         const mealID = element.idMeal
//         const ime = document.getElementById(mealID).addEventListener('click', () => {
//             console.log('hi')
//         })

//     });

// }