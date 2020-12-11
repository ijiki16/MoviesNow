const app = document.getElementById('root1')

var request = new XMLHttpRequest();

var url = 'https://api.adjaranet.com/api/v1/movies/top'
// 
var params = '?type=movie&period=day&page=1&per_page=20'
var filters = '&filters%5Bwith_actors%5D=3&filters%5Bwith_directors%5D=1'
var other = '&source=adjaranet'
// 
request.open('GET', url+params+filters+other, true);

request.onload = function () {
  
  
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(this.response);

    data.data.forEach((movie) => {
      console.log(movie)
      const link  = document.createElement('a')
      link.setAttribute('href', './movie.html/'+movie.id)

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
      link.appendChild(card)
      app.appendChild(link)

    })

    //console.log(data.data)
    //console.log(data.meta)
  } else {
    console.log('error')
  }
}

request.send()