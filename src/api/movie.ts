import axios ,{AxiosResponse} from 'axios';
import { promises } from 'dns';

type NowPlayingData = any;
type MovieDetailData = any;

const REST_API_ADDR = axios.create({
    baseURL : "https://api.themoviedb.org/3/",
    params : {
        language : "KO-KR",
        api_key : "bad5f4adf7a24590ddf96f1d3456c6bb"
    },
});

export const homeApi = {
    nowPlaying : () : Promise<AxiosResponse<NowPlayingData>> => REST_API_ADDR.get("movie/now_playing"),

    movieDetail : (id:number) : Promise<AxiosResponse<MovieDetailData>> => REST_API_ADDR.get(`movie/${id}`,{
        params:{append_to_response : "videos"}
    }),
}
