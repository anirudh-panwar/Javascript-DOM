// Dom = Body
// DOM Manipulation
/* Html se element select karna
   Text badalna
   Html badalna 
   Css badalna
   Attribute
   Event Listener */
 // Selecting elements
   let h1 = document.querySelector("h1");
   // h1.textContent = " Hello Harshita Kaise ho !!! "  // Changes the text
   h1.innerHTML = "<strong>Aur Bhaiji theek thaak !!!</strong>"; // Changes the html 
   // Changing the Attribute
   // setAttribute is used to set the value of the attribute....
   let a = document.querySelector("a");
   a.setAttribute("href", "https://www.google.com"); 
   let img = document.querySelector("img");
   img.setAttribute("src","https://images.unsplash.com/photo-1767570076534-abf94ea2ec61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D")
   

   // Dynamic DOM Manipulation 

   // createElement
   let h2 = document.createElement("h2");
   h2.textContent = " Hello ji !!";
   // append/prepend karo jaha bhi element chaiye wahan
   document.body.append(h2); // attaches to the screen 

   // Style Updates via .style and classList (add,remove,toggle)
   let h3 = document.querySelector("h3");
   // JS se CSS Badalna 
   h3.style.color = "red";
   h3.style.backgroundColor = "yellow";
   h3.style.fontFamily = "Gilroy";
   h3.style.textTransform = "capitalize";

   // classList
   // CSS mein class bna deni hai aur jo bhi hum uss class mein styling denge wo Html ke element pe reflect hogi properties JS ki help se
   let h = document.querySelector("h1"); // JS se kissi bhi HTML element mein class lagana 
   h1.classList.add("hulu");  // Puts the CSS class to an Html element





   







