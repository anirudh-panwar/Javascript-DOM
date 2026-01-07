// Q1: Select the heading of a page by ID and change its text to "Welcome to Sheryians!".
let h1 = document.querySelector("#heading");
h1.textContent = "Welcome to Sheryians!";

// Q2: Select all <li> elements and print their text using a loop.
let lis = document.querySelectorAll("li");
/*lis.forEach(function (val){
    console.log(val.textContent);
 }) */
for (let i = 0; i < lis.length; i++) {
  console.log(lis[i].textContent);
}

// Q3: How do you get the src of an image using Javascript ?
let image = document.querySelector("img");
console.log(image.getAttribute("src"));

// Q4: What does setAttribute do?
document
  .querySelector("img")
  .setAttribute(
    "src",
    "https://images.unsplash.com/photo-1767126600994-e509dacc967c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D "
  );
  image.style.height = "400px";
  
  // Q5: Create a new list item <li>New Task</li> and add it to the end of a <ul>
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.textContent = "New Task";
  ul.appendChild(li);

  // Q6: Select the first item from the list and delete it from the DOM
  let ul1 = document.querySelector("ul");
  let li1 = document.querySelector("li");
  ul1.removeChild(li1);

// Q7: Set the font-size of all the <p> elements to 18px using .style
let p = document.querySelectorAll("p");
p.forEach(function(elem){
elem.style.fontSize = "18px"
});