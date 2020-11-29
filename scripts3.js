const app3 = document.getElementById('root3')

var request3 = new XMLHttpRequest();

request3.open('GET', 'https://api.adjaranet.com/api/v1/movies', true);

// this.response.setHeader("Access-Control-Allow-Origin", "*");
// this.response.setHeader("Access-Control-Allow-Credentials", "true");
// this.response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
// this.response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

request3.setHeader("page", "1");
// request3.setRequestHeader("per_page", "20");
// ?filters%5Blanguage%5D=GEO&filters%5Btype%5D=series&filters%5Bwith_actors%5D=3&filters%5Bwith_directors%5D=1&filters%5Bwith_files%5D=yes&sort=-upload_date&source=adjaranet
// request3.setRequestHeader("filters%5Blanguage%5D", "GEO");
// request3.setRequestHeader("filters%5Btype%5D", "series");
// request3.setRequestHeader("filters%5Bwith_actors%5D", "3");
// request3.setRequestHeader("filters%5Bwith_directors%5D", "1");
// request3.setRequestHeader("filters%5Bwith_files%5D", "yes");
// request3.setRequestHeader("sort", "-upload_date");
// request3.setRequestHeader("source", "adjaranet");
request3.onload = function () {
  var data = JSON.parse(this.response);
  
  if (request3.status >= 200 && request3.status < 400) {
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