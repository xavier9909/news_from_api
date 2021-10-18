let videos = document.getElementById("videos")
//AIzaSyBqsp2TaBKxncFNktx8zbP1GsWO_z8mKlw
    //https://youtube.googleapis.com/youtube/v3/search?q=csk&type=video&key=[YOUR_API_KEY]
async function searchVideos() {
  
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=ba67a8c1712049659940d24de97b0b69`)
    let data = await res.json();
    console.log(data);
   appendVideos(data.articles)
}

searchVideos()
function appendVideos(video_data) {
    video_data.forEach((articles)=>{
        console.log(articles);

       let div = document.createElement("div")
     //   div.innerHTML =` <img class="rimg" src="${}"/>`
        let img = document.createElement("img")
  img.src = articles.urlToImage
  img.onclick = function () {
      news(articles.url)
      
  }
let title = document.createElement('p')
title.onclick = function () {
    news(articles.url)
    
}
title.textContent= articles.title
 div.append(img,title)
 videos.append(div)
 
    })

    
}
function news(u){
   window.location=u
}