// Tested to see if pages are linked up and ready to work!
console.log("testing!");

// 1. Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
const headerEl = document.querySelector(".article__header");
headerEl.textContent = ("Welcome to the Hunter Metts blog");


// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

// Declaring "allHeader" and selecting ALL elements named ".article__header"
var allHeaderEl = document.querySelectorAll(".article__header");

// Was able to target first element with position [0], gotta figure out how to target all elements with a for loop

// allHeaderEl[0].classList.add("important");

// Testing for background color (a visual change) (temporary)
// allHeaderEl[0].style.backgroundColor = "red";

// Attempt at targeting both/all elements using for loop (*YAY, it works!!*)
for (i = 0; i < allHeaderEl.length; i++) { 
    allHeaderEl[i].classList.add("important");
}

// 3. Obtain a reference the element with a class of dashed and remove it.
const rmDashed = document.querySelector(".dashed");
rmDashed.classList.remove("dashed");


// 4.Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const golden = document.querySelector(".article__footer");
golden.classList.add("goldenrod");