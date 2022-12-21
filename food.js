let itom=document.getElementsByClassName("recipes-list");
itom[0].innerHTML="";
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian')
.then(Response => Response.json())
.then((data) => {
  console.log(data);
  data.meals.forEach((ele,i)=>{
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