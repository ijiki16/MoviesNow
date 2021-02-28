export function getMovies(element, params, other, top) {
  const app = document.getElementById(element)

  var request = new XMLHttpRequest();

  var url = 'https://api.adjaranet.com/api/v1/movies'
  // 
  // var params = '?type=movie&period=day&page=1&per_page=20'
  var filters = '&filters%5Bwith_actors%5D=3&filters%5Bwith_directors%5D=1'
  // var other = '&source=adjaranet'
  var source = '&source=adjaranet'
  // 
  request.open('GET', url + top + params + filters + other + source, true);

  request.onload = function () {


    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(this.response);

      data.data.forEach((movie) => {
        // console.log(movie)
        const link = document.createElement('a')
        link.setAttribute('href', '/movie.html?id=' + movie.id)
        link.setAttribute('data-navigo', '')
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
}

export function setMovieVideo(id) {

  var linkS = "https://api.adjaranet.com/api/v1/movies/"
  var linkE = "/season-files/0"
  var param = "?source=adjaranet"
  var request = new XMLHttpRequest();

  request.open('GET', linkS + id + linkE + param, true);
  request.onload = function () {

    if (request.status >= 200 && request.status < 400) {
      var video = document.getElementById('video');
      video.pause();

      var data = JSON.parse(this.response);
      var firsVideoData = data.data[0].files[0]
      // console.log(firsVideoData["lang"])
      // console.log(firsVideoData.files[0].src)
      var videoSrcLink = firsVideoData.files[0].src
      document.getElementById('videoSrc').setAttribute("src", videoSrcLink);

      video.load();
    } else {
      console.log('error')
    }
  }
  request.send()
}


export function setMovieInfo(id) {

  var linkS = "https://api.adjaranet.com/api/v1/movies/"
  var param = "?filters%5Bwith_directors%5D=3&source=adjaranet"
  var request = new XMLHttpRequest();

  request.open('GET', linkS + id+ param, true);
  request.onload = function () {

    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(this.response);
      var movieVideoDiv = document.getElementById('movieVideoDiv');
      var movieName = document.getElementById('movieName');
      var movieImage = document.getElementById('movieImage');
      // all data
      console.log(data.data);
      // background
      let backImage = data.data.covers.data['1920']
      console.log(data.data.covers.data['1920']);
      movieVideoDiv.style.backgroundImage = `url(${backImage})`;
      // name
      movieName.innerHTML = data.data.originalName;
      // poster
      movieImage.setAttribute('src', data.data.posters.data['240']);
    } else {
      console.log('error')
      return null;
    }
  }
  request.send()
}