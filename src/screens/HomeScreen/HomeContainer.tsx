import { Component } from "react"
import HomePresenter from "./HomePresenter";

interface HomeContainerProps {
    movieDetail : any;
    loading : boolean;
}


class HomeContainer extends Component<{}, HomeContainerProps>{
    constructor(props : {}) {
        super(props);
        this.state = {
            movieDetail : null,
            loading : true,
        };
    }
    render() {
        return <HomePresenter {...this.state} />;
      }
    }
    
    export default HomeContainer;