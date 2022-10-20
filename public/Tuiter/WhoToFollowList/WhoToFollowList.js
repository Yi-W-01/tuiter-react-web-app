import items from './who.js';
import WhoToFollowListItem from "./WhoToFollowListItem.js"


const WhoToFollowList = () => {

    return(`
        <ul class="list-group  wd-right-border-rounded mt-2">
         <li class="list-group-item wd-right-bar-font-border wd-right-bar-width">Who to follow</li>
                ${
        items.map(item=>{
            return(WhoToFollowListItem(item));
        }).join('')
    }
            </ul>
    `);
}
export default WhoToFollowList;