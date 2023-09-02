import { Component } from "react"
import HomePresenter from "./HomePresenter";
import { homeApi } from "../../api/movie";

interface HomeContainerProps {
    nowPlaying: any[] | null;
    movieDetail : any;
    loading : boolean;
    error : any;
}


class HomeContainer extends Component<{}, HomeContainerProps>{
    constructor(props : {}) {
        super(props);
        this.state = {
            nowPlaying: null,
            movieDetail : null,
            loading : true,
            error : null
        };
    }
    async componentDidMount() {
        try {
        
            const { data: movieDetail } = await homeApi.movieDetail(movieId);
    
            if (movieDetail.videos.results.length === 0) {
              const { data: defaultMovieDetail } = await homeApi.movieDetail(497698);
              this.setState({ movieDetail: defaultMovieDetail });
            } else {
              this.setState({ movieDetail });
            }
          } catch (error) {
            console.log(error);
            this.setState({ error: "Can't find Home Video." });
          }
        } catch (error) {
          console.log(error);
          this.setState({ error: "Can't fetch Now Playing movies." });
        } finally {
          this.setState({ loading: false });
        }
      }
    render() {
        return <HomePresenter {...this.state} />;
      }
    }
    
    export default HomeContainer;