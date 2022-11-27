import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats/tuit-stats";
import {deleteTuit} from "../../actions/tuits-actions";

const TuitListItem = ({tuit}) =>{
    const dispatch = useDispatch();

    return(
        <>
        <li className="list-group-item">
            <div className="wd-grid-image-left">
                <img className="wd-avatar-image" src={tuit.avatar_img} alt=""/>
            </div>

            <div className="wd-tuit">
                <div className="wd-tuit-heading">
                    <div className="wd-tuit-authorname">
                        {tuit.postedBy.userName} <i className="fa-solid fa-circle-check"></i>
                        <span className="wd-tuit-handle"> {tuit.handle}</span>

                        <i onClick={() =>
                            deleteTuit(dispatch, tuit)}
                           className="fas fa-remove
                      fa-pull-right"></i>
                    </div>
                </div>

                <div className="wd-tuit-content">
                    <div className="wd-tuit-content-text">
                        {tuit.title}
                    </div>

                    <div className="card wd-bg-color-card wd-postlist" >
                        {
                            tuit.file && tuit.file.video &&
                            <iframe height="350px" src={`https://www.youtube.com/embed/${tuit.file.video}`}
                                    style={{"borderRadius": "30px"}}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        }
                        {
                            tuit.file && tuit.file.image &&
                                <img src={tuit.file.image} className="card-img-top wd-tuit-content-image" alt="..."/>
                        }
                    </div>
                </div>
                <TuitStats tuit={tuit} />
            </div>
        </li>
        </>
    )
}
export default TuitListItem;