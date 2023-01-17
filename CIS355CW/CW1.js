/**CIS  355  01  WI23
   CW1
   Sarah Mentel
   
**A general purpose Javascript function that accepts an object (say recipe) and prints the ingredients to the console.**/

//recipe object
var recipe = {
    idMeal: "52780",
    strMeal: "Potato Gratin with Chicken",
    strIngredient1: "Potatoes",
    strIngredient2: "Onions",
    strIngredient3: "Olive Oil",
    strIngredient4: "Chicken Stock",
    strIngredient5: null,
    strIngredient6: "",
    strIngredient7: "Chicken Breasts",
    strIngredient8: "",
    strIngredient9: "Spinach",
    strIngredient10: null,
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "Bacon",
    strIngredient15: "",
    strIngredient16: null,
    strIngredient17: "Parmesan",
    strIngredient18: "Peas",
    strIngredient19: null,
    strIngredient20: "Creme Fraiche",
    dateModified: null,
    price: 13.99
}

//function that accepts an object to print recipe
function print(obj) {
    var recipeFinal = removeNull(recipe) //remove empty/blanks
    var string = ""
    recipeFinal.forEach(function(element) {  //concat object values into one string separated by blank space 
        string += (element + " ")
    })

    //function that removes blanks and null entries from object by using array.filter
    function removeNull(obj) {
        var recipeFiltered = Object.values(recipe).filter(ingredient => ingredient != "")
        return recipeFiltered.filter(ingredient => ingredient != null)
    }

    //print to console
    console.log(string)
}

//call function
print(recipe)