url = `https://newsapi.org/v2/everything?q=space AND physics &sources=new-scientist,national-geographic,bbc-news,the-new-york-times&apiKey=${key}`

const recievedNews3 = (newsdata) => {
    const articlesDiv = document.querySelector(".innerruta3")
    //articles is an object in the JSON.

    newsdata.articles.forEach((article) => {
      //Here we create HTML elements that we add to our HTML file


      const div = document.createElement("div")
      div.className = "artikel"



      const img = document.createElement("img")

      if (article.urlToImage){
            img.src = article.urlToImage
}else {
  img.src = "jupiter.jpg"
}
      const link = document.createElement("a")
            link.href = article.url
            link.target = "_blank"
            link.appendChild (img)
            div.appendChild(link)


      const rubrik = document.createElement("h1")
      rubrik.innerHTML = article.title
      div.appendChild (rubrik)

      const paragraf = document.createElement("p")
      paragraf.innerHTML = article.description
      div.appendChild (paragraf)




      articlesDiv.appendChild(div)





      //This fetches and add images to our articles. Öppnar i ny flik.


    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews3)
