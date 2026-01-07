// kuch screen pe ho aur aapko reaction dena ho to us waqt aapko event handle karna aana hiye...

// event matlab hota hai kuch action hua ...
// event listener ka matlab hai aapne koi action ka reaction diya .....
let h1 = document.querySelector("h1"); // select the h1 first
h1.addEventListener("click", function () {
  // add event listener on h1
  h1.style.color = "red";
});
let p = document.querySelector("p");
p.addEventListener("click", function () {
  p.style.color = "green";
  p.style.backgroundColor = "beige";
  p.classList.add("hulul");
});
/* 
    p.addEventListener("dblclick", function () {
    p.style.color = "black";
    p.style.backgroundColor = "beige";
}) 
*/

// Common events
// input event 
let input = document.querySelector("input");
input.addEventListener("input", function (evt) {
  if (evt.data !== null) {
    console.log(evt.data);
  }
});

// change event 
let sel = document.querySelector("select");
let device = document.querySelector("#device");
sel.addEventListener("change", function (dets){
    device.textContent = ` ${dets.target.value}  Device Selected `;
});
