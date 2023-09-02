import React from "react";
import PropTypes from "prop-types";
import Loader from "../../components/Loder/Loder";

interface HomeProps {
    movieDetail : any;
    loading : boolean;
}

const HomePresenter : React.FC<HomeProps> = ({
movieDetail,
loading
}) => {
    return loading? (
        <Loader></Loader>
    ) :  (
        <div>홈</div>
    )
}

HomePresenter.propTypes = {
    movieDetail : PropTypes.object,
    loading : PropTypes.bool.isRequired
}

export default HomePresenter;