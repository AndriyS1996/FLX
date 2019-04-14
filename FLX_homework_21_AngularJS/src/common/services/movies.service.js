
export class MoviesService {
  constructor($http){
    this.$http = $http;
    this.movies = [];
  }
  getAllMovies() {
          function httpGet(url) {

            return new Promise(function(resolve, reject) {
          
              var xhr = new XMLHttpRequest();
              xhr.open('GET', url, true);
          
              xhr.onload = function() {
                if (this.status == 200) {
                  resolve(this.response);
                } else {
                  var error = new Error(this.statusText);
                  error.code = this.status;
                  reject(error);
                }
              };
          
              xhr.onerror = function() {
                reject(new Error("Network Error"));
              };
          
              xhr.send();
            });
          
          }

          return httpGet("https://gist.githubusercontent.com/dmk1111/2714c5d780a1cdc723075ec7bec38501/raw/72479f9c108f26b009afef7b02e7b2243736d1c8/movies.json")
                .then(
                  response => { this.movies = JSON.parse(response).data; return this.movies },
                  error => alert(`Rejected: ${error}`)
                );
      }
  findMovieById(id){
    return Promise.resolve(this.movies.find(element => Number(element.id) === Number(id)));
  }
}

 MoviesService.serviceName = 'moviesService';
MoviesService.$inject = ['$http'];
