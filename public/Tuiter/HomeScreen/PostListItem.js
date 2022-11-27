const PostListItem = (post) =>{
    return(`
     
            <div class="wd-grid-image-left">
                <img class="wd-avatar-image " src=${post.profile}>
            </div>

            <div class="wd-tuit">
                <div class="wd-tuit-heading">
                    <div class="wd-tuit-authorname">
                        ${post.userName} <i class="fa-solid fa-circle-check"></i><span class="wd-tuit-handle"> ${post.handle}</span> <span class="wd-tuit-time"> ${post.time}</span>
                    </div>

                </div>

                <div class="wd-tuit-content">
                    <div class="wd-tuit-content-text">
                    ${post.title}
                    </div>

                   
                    
                    <div class="card wd-bg-color-card" style="width:100%; border-style: solid; border-color: dimgrey; border-width: 1px; border-radius: 30px">
                        <img src=${post.image} class="card-img-top wd-tuit-content-image" alt="...">
                       
                        <div class="card-body pt-0 pb-0">
                            ${post.topic ? 
                                `<div class="wd-tuit-content-bottom-title">
                                    ${post.topic}
                                </div>` : ""}
                           
                            ${post.text ? 
                                    `<div class="wd-tuit-content-bottom-text pt-1 pb-1">
                                    ${post.text}
                                </div>` : ""}
                    </div>
                        
                    </div>


                    <div class="wd-grid-icon-num-bottom">
                        <div class="wd-grid-icon-num-bottom-1">
                            <a style="text-decoration:none" href="#" ><img src="../images/message.png"><span class="wd-grid-icon-num-bottom-num">${post.message}</span></a>
                        </div>
                        <div class="wd-grid-icon-num-bottom-1">
                            <a style="text-decoration:none" href="#" ><img src="../images/forward.png"><span class="wd-grid-icon-num-bottom-num">${post.forward}</span></a>
                        </div>
                        <div class="wd-grid-icon-num-bottom-1">
                            <i class="fa-brands fa-gratipay" ></i><a style="text-decoration:none" href="#" ><span class="wd-grid-icon-num-bottom-num">${post.love}</span></a>
                        </div>
                        <div class="wd-grid-icon-num-bottom-1">
                            <a style="text-decoration:none" href="#" ><img src="../images/share.png"></a>
                        </div>
                    </div>
                </div>
            </div>
    `)
}
export default PostListItem;
