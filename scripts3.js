const app3 = document.getElementById('root3')

var request3 = new XMLHttpRequest();

request3.open('GET', 'https://api.adjaranet.com/api/v1/movies/top?type=movie&period=month&page=1&source=adjaranet', true);

request3.onload = function () {
  var data = JSON.parse(this.response);
  
  if (request3.status >= 200 && request3.status < 400) {
    data.data.forEach((movie) => {
        console.log(movie)
      

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