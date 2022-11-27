import {useDispatch} from "react-redux";
import {updateTuit} from "../../actions/tuits-actions"

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
    <>
        <div className="wd-grid-icon-num-bottom">
            <div className="wd-grid-icon-num-bottom-1">
                <i className="fa-solid fa-comment"></i><span> {tuit.stats.replies}</span>
            </div>
            <div className="wd-grid-icon-num-bottom-1">
                <i className="fa-solid fa-retweet"></i><span> {tuit.stats.retuits}</span>
            </div>
            <div className="wd-grid-icon-num-bottom-1">
                     <span onClick={()=>updateTuit(dispatch, tuit)}>
                        {
                            tuit.liked &&
                            <i className="fas fa-heart me-1"
                               style={{color: 'red'}}></i>
                        }
                        {
                            !tuit.liked &&
                            <i className="far fa-heart me-1"></i>
                        }

                    </span><span> {tuit.stats && tuit.stats.likes}</span>
            </div>
            <div className="wd-grid-icon-num-bottom-1">
               <i className="fa-solid fa-share-from-square"></i>
            </div>
        </div>
    </>
);
}
export default TuitStats;