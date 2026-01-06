// Q1: Select the heading of a page by ID and change its text to "Welcome to Sheryians!".
let h1 = document.querySelector("#heading");
h1.textContent = "Welcome to Sheryians!";

 // Q2: Select all <li> elements and print their text using a loop. 
 let lis = document.querySelectorAll("li");
  /*lis.forEach(function (val){
    console.log(val.textContent);
 }) */
for(let i = 0; i<lis.length;i++)
{
    console.log(lis[i].textContent);
}