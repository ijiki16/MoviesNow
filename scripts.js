var request = new XMLHttpRequest();

request.open('GET', 'https://api.adjaranet.com/api/v1/movies', true);

request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.data.forEach((movie) => {
      console.log(movie.secondaryName);
    })
    console.log(data.data)
    console.log(data.meta)
  } else {
    console.log('error');
  }
}

request.send();