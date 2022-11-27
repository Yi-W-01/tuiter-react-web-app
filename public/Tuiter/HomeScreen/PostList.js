import homeposts from './homepost.js';
import PostListItem from "./PostListItem.js"


const PostList = () => {

    return(`
         <div class="wd-grid-content">
         
                ${
        homeposts.map(homepost=>{
            return(PostListItem(homepost));
        }).join('')
    }
            </div>
    `);
}
export default PostList;