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

  request.open('GET', linkS + id + param, true);
  request.onload = function () {

    if (request.status >= 200 && request.status < 400) {
      // all data
      var data = JSON.parse(this.response);
      console.log(data.data);
      // background
      var movieVideoDiv = document.getElementById('movieVideoDiv');
      let backImage = data.data.covers.data['1920']
      // console.log(data.data.covers.data['1920']);
      movieVideoDiv.style.backgroundImage = `url(${backImage})`;
      // poster
      var movieImage = document.getElementById('movieImage');
      movieImage.setAttribute('src', data.data.posters.data['240']);
      // name
      var movieName = document.getElementById('movieName');
      movieName.innerHTML = data.data.originalName;
      // year
      var curElem = document.getElementById('year');
      curElem.innerHTML =  data.data.year;
      // cntry
      var curElem = document.getElementById('cntry');
      curElem.innerHTML =  "";
      data.data.countries.data.forEach((cnts) => {
        curElem.innerHTML += cnts.primaryName;
        curElem.innerHTML += " ";
      });
      // deskr
      var curElem = document.getElementById('descriptionData');
      curElem.innerHTML = data.data.plot.data.description;
      // genrs
      var curElem = document.getElementById('genrs');
      curElem.innerHTML = ""
      data.data.genres.data.forEach((gnr) => {
        curElem.innerHTML += gnr.primaryName;
        curElem.innerHTML += " ";
      });
    } else {
      console.log('error')
      return null;
    }
  }
  request.send()
}

export function setSearchMovies(searchWord) {
  var linkS = "https://api.adjaranet.com/api/v1/search-advanced";

  var pageData = '?page=1&per_page=23'

  var searchQuery1 = '&filters%5Btype%5D=movie' +
    '&filters%5Byear_range%5D=1900%2C2020' +
    '&filters%5Binit%5D=true' +
    '&filters%5Bsort%5D=-upload_date' +
    '&filters%5Bwith_actors%5D=3' +
    '&filters%5Bwith_directors%5D=1' +
    '&filters%5Bwith_files%5D=yes';

  var other = '&sort=-upload_date&source=adjaranet';

  let params = new URLSearchParams(window.location.search);
  if (params) searchWord = params.get("search");

  var searchQuery2 = `?movie_filters%5Bkeyword%5D=${searchWord}` +
    '&movie_filters%5Byear_range%5D=1900%2C2020' +
    '&movie_filters%5Binit%5D=true' +
    '&movie_filters%5Bwith_actors%5D=3' +
    '&movie_filters%5Bwith_directors%5D=1' +
    `&filters%5Btype%5D=movie&keywords=${searchWord}` +
    '&page=1&per_page=25&source=adjaranet';
  const app = document.getElementById('searhData')

  var request = new XMLHttpRequest();

  // console.log(params.get("id"));

  // console.log("bla blas")
  request.open('GET', linkS + searchQuery2, true);
  request.onload = function () {

    if (request.status >= 200 && request.status < 400) {
      // all data
      var data = JSON.parse(this.response);
      console.log(data.data);

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

      });


    } else {
      console.log('error')
      return null;
    }
  }

  // request.setRequestHeader("sec-fetch-site", "same-origin")
  request.setRequestHeader("x-source", "adjaranet")
  
  request.send()
}