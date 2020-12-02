const app3 = document.getElementById('root3')

var request3 = new XMLHttpRequest();

var url = 'https://api.adjaranet.com/api/v1/movies/top'
// 
var params = '?type=movie&period=month&page=1&per_page=20'
var filters = '&filters%5Bwith_actors%5D=3&filters%5Bwith_directors%5D=1'
var other = '&source=adjaranet'
// 
request3.open('GET', url+params+filters+other, true);

request3.onload = function () {
  
  if (request3.status >= 200 && request3.status < 400) {
    
    var data = JSON.parse(this.response);

    data.data.forEach((movie) => {
      // console.log(movie)
      

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

    //   const h1 = document.createElement('h1')
    //   h1.textContent = movie.secondaryName

      const img = document.createElement('img')
      img.width = 200

    //   //console.log(movie.covers.data)
      img.src = movie.posters.data[240]
    //   //movie.description = movie.description.substring(0, 300)

      // card.appendChild(h1)
      card.appendChild(img)

      app3.appendChild(card)

    })

    //console.log(data.data)
    //console.log(data.meta)
  } else {
    console.log('error')
  }
}

request3.send()