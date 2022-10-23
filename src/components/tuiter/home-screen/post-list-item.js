
const PostListItem = (
    {
        homepost={
            profile:"../images/elonmuskfile.jpg",
            username:"Elon Musk",
            handle:"@elonmusk",
            time: "23h",
            title: "Amazing show about @Inspiration4x mission!",
            image: "../images/elonmusk.jpeg",
            topic: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            text: "From training to launch to landing, this all-access docuseries rides along with the Inspration4 crew on the first all-civillian orbital space...",
            link: "",
            message:"4.2k",
            forward:"3.5k",
            love:"37.5k"
        }
    }) =>{
    return(
        <>
            <div className="wd-grid-image-left">
                <img className="wd-avatar-image" src={homepost.profile} alt=""/>
            </div>

            <div className="wd-tuit">
                <div className="wd-tuit-heading">
                    <div className="wd-tuit-authorname">
                        {homepost.userName} <i className="fa-solid fa-circle-check"></i><span className="wd-tuit-handle"> {homepost.handle}</span> <span className="wd-tuit-time"> {homepost.time}</span>
                    </div>
                </div>

                <div className="wd-tuit-content">
                    <div className="wd-tuit-content-text">
                        {homepost.title}
                    </div>

                    <div className="card wd-bg-color-card wd-postlist" >
                        <img src={homepost.image} className="card-img-top wd-tuit-content-image" alt="..."/>

                        <div className="card-body pt-0 pb-0">
                            {homepost.topic ?
                                <div className="wd-tuit-content-bottom-title">
                                    {homepost.topic}
                                </div> : ""}

                            {homepost.text ?
                                <div className="wd-tuit-content-bottom-text pt-1 pb-1">
                                    {homepost.text}
                                </div> : ""}

                        </div>

                    </div>


                    <div className="wd-grid-icon-num-bottom">
                        <div className="wd-grid-icon-num-bottom-1">
                            <i className=" fa-solid fa-message"></i><a className="wd-link_noline" href="#" ><span className="wd-grid-icon-num-bottom-num">{homepost.message}</span></a>
                        </div>
                        <div className="wd-grid-icon-num-bottom-1">
                            <i className="fa-solid fa-bookmark"></i><a className="wd-link_noline" href="#" ><span className="wd-grid-icon-num-bottom-num">{homepost.forward}</span></a>
                        </div>
                        <div className="wd-grid-icon-num-bottom-1">
                            <i className="fa-brands fa-gratipay" ></i><a className="wd-link_noline" href="#" ><span className="wd-grid-icon-num-bottom-num">{homepost.love}</span></a>
                        </div>
                        <div className="wd-grid-icon-num-bottom-1">
                            <i className="fa-solid fa-share"></i><a className="wd-link_noline" href="#" ></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostListItem;