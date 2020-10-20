const app = document.getElementById('root')

var request = new XMLHttpRequest();

request.open('GET', 'https://api.adjaranet.com/api/v1/movies/top?type=movie&period=day&page=1&per_page=20&filters%5Bwith_actors%5D=3&filters%5Bwith_directors%5D=1&source=adjaranet', true);

request.onload = function () {
  var data = JSON.parse(this.response);
  
  if (request.status >= 200 && request.status < 400) {
    data.data.forEach((movie) => {
      console.log(movie.poster)

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.secondaryName

      const img = document.createElement('img')
      img.width = 200

      //console.log(movie.covers.data)
      img.src = movie.posters.data[240]
      //movie.description = movie.description.substring(0, 300)

      // card.appendChild(h1)
      card.appendChild(img)

      app.appendChild(card)

    })

    //console.log(data.data)
    //console.log(data.meta)
  } else {
    console.log('error')
  }
}

request.send()