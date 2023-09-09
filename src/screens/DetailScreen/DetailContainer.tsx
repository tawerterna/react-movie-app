import { Component, ErrorInfo, ReactNode } from "react";
import DetailPresenter from "./DetailPresenter";
import { AnyMxRecord } from "dns";
import { useParams } from "react-router-dom";
import withRouter from "../../utils/withRouter";
import { moviesApi } from "../../api/movie";

interface DetailContainerState{
    result : any | null,
    error : string | null,
    loading : boolean,
    recommandations : any,
    cast : any,
    keywords : any,
    backdrops : any,
    posters : any,
    tvDetail2 : any,
    reviews : any
}

class DetailContainer extends Component<{params : number}, DetailContainerState>{
    constructor(props : any){
        super(props);
        this.state={
            result : [],
            error : null,
            loading : true,
            recommandations : [null],
            cast : [],
            keywords : [],
            reviews : [],
            backdrops : [],
            posters : [],
            tvDetail2 : []
        };
    }

    async componentDidMount() {
        try{

            const parsedId = this.props.params;
            const { data : result } = await moviesApi.movieDetail(parsedId);
            const { data : { results : recommandations }} = await moviesApi.recommendations(parsedId);
            const { data : { cast }} = await moviesApi.credits(parsedId);
            const { data : { keywords }} = await moviesApi.keywords(parsedId);
            const { data : { results : reviews }} = await moviesApi.reviews(parsedId);
            const { data : { backdrops }, data: { posters }} = await moviesApi.images(parsedId);
            
            this.setState({
                result,
                recommandations,
                cast,
                keywords,
                reviews,
                backdrops : backdrops && backdrops,
                posters : posters && posters,
                loading : false,
                error : null
            })
        }   
        catch(error){
            this.setState({error : "상세정보를 가져올 수 없습니다."});
        } 
    
    }

    render(){
        return <DetailPresenter {...this.state}/>
    }
};

export default withRouter(DetailContainer);