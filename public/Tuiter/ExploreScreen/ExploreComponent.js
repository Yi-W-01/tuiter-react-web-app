import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
              <div class="position-relative">
                <i class="fa-solid fa-magnifying-glass wd-position-search-icon"></i>
                <input id="search-input" class="wd-search-input wd-rounded-corners-all-around " type="text" placeholder="Search Tuiter">
                <a href="explore-settings.html"><i class="fa-solid fa-gear fa-2x wd-search-gear"></i></a>
            </div>


            <ul class="nav nav-tabs wd-grid-heading-bar wd-padding-top">
                <li class="nav-item">
                    <a class="nav-link active " href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" >Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="#" >Entertainment</a>
                </li>
            </ul>

       <div class="wd-content wd-padding-top position-relative">
            <div class="wd-img-text position-relative">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="wd-content-img">
                <div>
                    <span class="d-none d-xxl-block wd-content-img-overlay-text-xxl">SpaceX's Starship</span>
                    <span class="d-none d-xxl-none d-xl-block wd-content-img-overlay-text-xl">SpaceX's Starship</span>
                    <span class="d-none d-xl-none  d-lg-block wd-content-img-overlay-text-lg">SpaceX's Starship</span>
                    <span class="d-none d-lg-none  d-md-block wd-content-img-overlay-text-md">SpaceX's Starship</span>
                    <span class="d-none d-md-none  d-sm-block wd-content-img-overlay-text-sm">SpaceX's Starship</span>
                    <span class="d-block d-sm-none  wd-content-img-overlay-text-xs">SpaceX's Starship</span>
                    
                </div>
            </div>
       </div>

            
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
