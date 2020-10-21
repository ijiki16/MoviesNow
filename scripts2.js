const app2 = document.getElementById('root2')

var request2 = new XMLHttpRequest();

request2.open('GET', 'https://api.adjaranet.com/api/v1/movies?page=1&per_page=20&filters%5Bwith_files%5D=yes&filters%5Btype%5D=movie&filters%5Bwith_actors%5D=3&filters%5Bwith_directors%5D=1&sort=-upload_date&source=adjaranet', true);

request2.onload = function () {
  var data = JSON.parse(this.response);
  
  if (request2.status >= 200 && request2.status < 400) {
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

      app2.appendChild(card)

    })

    //console.log(data.data)
    //console.log(data.meta)
  } else {
    console.log('error')
  }
}

request2.send()