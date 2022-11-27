const WhoToFollowListItem = (who) =>{
    return(`
         
         <li class="list-group-item ps-0 ">
                <div class="wd-right-bar-float-left">
                        <img class="wd-right-bar-logo"  src=${who.avatarIcon}/>
                </div>
                <div class="wd-right-bar-float-left ">
                        <div class="wd-right-bar-title ">${who.userName} <i class="fa-solid fa-circle-check"></i></div>
                        <div class="wd-right-bar-author ">@${who.handle} </div>
                </div>
                <div class="wd-right-bar-float-right">
                        <button  class=" btn btn-primary wd-button-tweet ">Follow</button>
                </div>
         </li>
    `)
}
export default WhoToFollowListItem;