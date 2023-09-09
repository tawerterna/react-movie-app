import { useParams } from "react-router-dom"



const withRouter = (WrappedComponent : React.ComponentType<any>) =>  (props : any) => {
    const params = useParams();

    return (
        <WrappedComponent
            {...props} params = {params.id}/>
    );
}

export default withRouter;