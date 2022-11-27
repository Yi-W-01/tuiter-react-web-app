import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";


    $('#wd-explore').append(`
        <div class="row  mt-2 ">
            <div class="col-xl-2 col-lg-1 col-2">
                ${NavigationSidebar("Explore")}
             </div>

            <div class="col-xl-7 col-lg-7 col-10">
               ${ExploreComponent()}
            </div>
            
            <div class="col-xl-3 col-lg-4 d-none d-lg-block">
               ${WhoToFollowList()}
            </div>
        </div>
    `);

