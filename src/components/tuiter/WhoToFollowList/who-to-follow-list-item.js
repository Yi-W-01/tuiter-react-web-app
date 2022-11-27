const WhoToFollowListItem = (
    {
        who = {
            avatarIcon: '../images/nasa.png',
            userName: 'NASA',
            handle: 'NASA',
        }
    }) =>{
    return(
         
         <li className="list-group-item ps-0 ">
                <div className="wd-right-bar-float-left">
                        <img className="rounded-circle float-start" src={who.avatarIcon}  alt="" width="50px" height="50px"/>
                </div>
                <div className="wd-right-bar-float-left ">
                        <div className="wd-right-bar-title ">{who.userName} <i className="fa-solid fa-circle-check"></i></div>
                        <div className="wd-right-bar-author ">@{who.handle} </div>
                </div>
                <div className="wd-right-bar-float-right">
                        <button  className=" btn btn-primary wd-button-tweet ">Follow</button>
                </div>
         </li>
    )
}
export default WhoToFollowListItem;