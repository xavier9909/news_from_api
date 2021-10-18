
var timerid
let movies_div = document.getElementById("movies")
    async function searchmovies(movie_name) {
        try{
        let res = await fetch(`https://newsapi.org/v2/everything?q=${movie_name}&from=2021-10-18&sortBy=popularity&apiKey=ba67a8c1712049659940d24de97b0b69`)
        var data = await res.json()}
        catch(e){
            console.log(e);
        }
  return data
    }
   // searchmovies()

   function appendmovies(movies) {
       if(movies===undefined){
           return false
       }
       movies_div.innerHTML = null;
       movies.forEach(function(articles){
           let p = document.createElement('button')
           p.classList.add("btn");
           p.innerText = articles.title
          
          
          
         
      
           
           p.onclick=function () {
            gotonews(articles.url)
        }
           movies_div.append(p)
       })
       
   }
  async  function main() {
       let name = document.getElementById("movie").value
     if(name.length==0){
        movies_div.innerHTML = null;
     }  
let res = await searchmovies(name)
let movies_data = res.articles;
appendmovies(movies_data)
console.log(res);


}
function debounce(func,time) {
    if(timerid){
        clearTimeout(timerid)
    }
   timerid =  setTimeout(function () {
        func();
        
    },time)
    
}
 function gotonews(u) {
    window.location=u
 }