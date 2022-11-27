const PostSummaryItem = (
    {
        post = {
            topic: "Web Development",
            userName:"ReactJS",
            time: "2h",
            title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            image: "/images/react-blue.png",
            tweets: "",
        }

    }) =>{
    return(
         
         <li className="list-group-item pe-2">
                 <div className="wd-content-text">
                         <div className="wd-float-left pb-2">
                               <div className="wd-topic">{post.topic} </div>
                               <div className="wd-title">{post.userName} <i className="fa-solid fa-circle-check"></i><span className="wd-font-color-grey"> - {post.time}</span></div>
                               <div className="wd-text">{post.title}</div>
                               <div className="wd-topic">{post.tweets}</div>
                         </div>
                         <div>
                               <img className="wd-float-right pt-2"  src={post.image} width="80px" height="80px" alt=""/>
                         </div>
                         <div className="wb-float-done"></div>
                 </div>
         </li>
    )
}
export default PostSummaryItem;