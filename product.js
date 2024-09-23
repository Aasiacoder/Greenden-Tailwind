//Selecting side navbar and menu

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

//Product search functionality
var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")//inside the product-container i select all div 

//console.log(productlist)//it shows the nodelist of all h1 in console

search.addEventListener("keyup", function () {//when i search in the input box
    var enteredValue = event.target.value.toUpperCase()//i stored the search value here .toUpperCase() is a Capital letter function. use event.trarget or(this.)
    //console.log(enteredValue) //what i give in input box it will be shown in console

    for (count = 0; count < productlist.length; count = count + 1) 
        {
            var productname = productlist[count].querySelector("h1").textContent//one div will be selected in that div h1 inside textContent will be stored in productname 

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"//<0 => it not matching that time h1list count display is none 
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})


