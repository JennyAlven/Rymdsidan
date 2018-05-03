const key = "c0cb3d35bfb6471d9309decd46eb1c5b"

/* Example url: https://newsapi.org/v2/top-headlines?q=bitcoin */
const url = `https://newsapi.org/v2/everything?q=space AND planets &sources=new-scientist,national-geographic,bbc-news,reuters,the-new-york-times&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    //articles is an object in the JSON.

    newsdata.articles.forEach((article) => {
      //Here we create HTML elements that we add to our HTML file


      const div = document.createElement("div")
      div.className = "news"

      const img = document.createElement("img")
            img.src = article.urlToImage
            div.appendChild(img)

                        const rubrik = document.createElement("h1")
                        rubrik.innerHTML = article.title
                        div.appendChild (rubrik)

                        const paragraf = document.createElement("p")
                        paragraf.innerHTML = article.description
                        div.appendChild (paragraf)


      articlesDiv.appendChild(div)





      //This fetches and add images to our articles. Öppnar i ny flik.

    const link = document.createElement("a")
            link.href = article.url
            link.innerHTML = "Read more"
            div.appendChild(link)
            link.target = "_blank"

    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews)
