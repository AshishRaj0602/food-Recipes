let nav=document.getElementsByClassName("navbar");
 nav[0].innerHTML=`<div class="nav-center">
 <div class="nav-header">
   <a href="index.html" class="nav-logo">
     <img src="logo.png" alt="simply recipes" />
   </a>
   <button class="nav-btn btn">
     <i class="fas fa-align-justify"></i>
   </button>
 </div>
 <div class="nav-links">
   <a href="index.html" class="nav-link"> home </a>
   <a href="about.html" class="nav-link"> about </a>
   <a href="tag.html" class="nav-link"> tags </a>
   <a href="recipes.html" class="nav-link"> recipes </a>
 
   <div class="nav-link contact-link">
     <a href="contact.html" class="btn"> contact </a>
   </div>
 </div>
 </div>`;
 let footer=document.getElementsByClassName("page-footer");
 footer[0].innerHTML=`<p>
 &copy; <span id="date"></span>
 <span class="footer-logo">SimplyRecipes</span> Built by
 <a href="https://glittery-meerkat-4de18d.netlify.app/#">Ashish</a>
</p>`

const getElement = (selector) => {
    const element = document.querySelector(selector)
  
    if (element) return element
    throw Error(
      `Please double check your class names, there is no ${selector} class`
    )
  }
  
  const links = getElement('.nav-links')
  const navBtnDOM = getElement('.nav-btn')
  
  navBtnDOM.addEventListener('click', () => {
    links.classList.toggle('show-links')
  })
  
  const date = getElement('#date')
  const currentYear = new Date().getFullYear()
  date.textContent = currentYear



fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=indian')
.then(Response => Response.json())
.then((data) => {
  console.log(data);
  data.meals.forEach((ele,i)=>{
    let itom=document.getElementsByClassName("recipes-list");
let div=document.createElement('div');
div.innerHTML=`<a href="" class="recipe">
<img
  src="${data.meals[i].strMealThumb}"
  class="img recipe-img"
  alt=""
/>
<h5>${data.meals[i].strMeal}</h5>
<p>Prep : 100min | Cook : 5min</p>
</a>
`
itom[0].appendChild(div);
  })
});
// fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=indian')
// .then(Response => Response.json())
// .then((data) => {
//   console.log(data);
// });
