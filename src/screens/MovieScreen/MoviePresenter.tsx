import Loader from "../../components/Loder/Loder";

interface MovieContainerProps {
    nowPlaying: any[] | null;
    upcoming: any[] | null;
    popular: any[] | null;
    topRated: any[] | null;
    error: string | null;
    loading: boolean;
    popularInfinite: any[] | null;
    nowPlayingIntinite: any[] | null;
    upcomingInfinite: any[] | null;
    topRatedInfinite: any[] | null;


}


const MoviePresenter : React.FC<MovieContainerProps>=({
    nowPlaying,
    upcoming,
    popular,
    loading,
    topRated,
    popularInfinite,
    nowPlayingIntinite,
    upcomingInfinite,
    topRatedInfinite

})=>{

    const { location : {pathname}} = window;

    console.log(nowPlaying);
    
    return loading ? (
            <Loader/>
        ) :
    (
        <div>무비 앱임</div>
    );
}

export default MoviePresenter;