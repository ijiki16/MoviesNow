const app = document.getElementById('root')

var request = new XMLHttpRequest();

request.open('GET', 'https://api.adjaranet.com/api/v1/movies', true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.data.forEach((movie) => {
      //console.log(movie.secondaryName)

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = movie.secondaryName

      const img = document.createElement('img')

      //console.log(movie.covers.data)
      img.src = movie.covers.data[510]
      //movie.description = movie.description.substring(0, 300)

      card.appendChild(img)
      card.appendChild(h1)

      app.appendChild(card)

    })

    //console.log(data.data)
    //console.log(data.meta)
  } else {
    console.log('error')
  }
}

request.send()