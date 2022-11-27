import posts from './post.js';
import PostSummaryItem from "./PostSummaryItem.js"
import


const PostSummaryList = () => {

    return(`
         <ul class="list-group">
         
                ${
        posts.map(post=>{
            return(PostSummaryItem(post));
        }).join('')
    }
            </ul>
    `);
}
export default PostSummaryList;