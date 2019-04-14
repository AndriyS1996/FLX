
export class MovieInfoController {
    constructor($stateParams, moviesService) {
      'ngInject';
      this.genres = '';
      this.moviesService = moviesService;
      this.$stateParams = $stateParams;
    }
  
    $onInit() {
      this.moviesService.findMovieById(this.$stateParams.movieId).then((movie) => {
        this.movie = movie;
      });
    }
    getGenres(){
      this.genres = this.movie.genres.join();
      return this.genres
    }
  }
  
