import Navbar from "../navbar/Navbar";

function Custprofile(){
    return(
            <>
                <div>
                <div className='backk'>
                  <Navbar />
                </div>
                <div className='bacckk'>
                <div class="sidebar">
            <div class="logo-details">
              <i class="bx bxl-c-plus-plus"></i>
              <span class="logo_name">Customer Panel</span>
            </div>
              <ul class="nav-links">
                <li>
                  <a href="/Customer">
                    <i class="bx bx-grid-alt"></i>
                    <span class="links_name">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="/Custprofile" class="active">
                    <i class="bx bx-box"></i>
                    <span class="links_name">Profile</span>
                  </a>
                </li>
                <li>
                  <a href="/Custfood">
                    <i class="bx bx-pie-chart-alt-2"></i>
                    <span class="links_name">View All Food</span>
                  </a>
                </li>
                <li>
                  <a href="/Custorderd">
                    <i class="bx bx-coin-stack"></i>
                    <span class="links_name">Order Details</span>
                  </a>
                </li>
                <li>
                  <a href="/Custstatus">
                    <i class="bx bx-book-alt"></i>
                    <span class="links_name">Status</span>
                  </a>
                </li>
                <li>
                  <a href="/Cust">
                    <i class="bx bx-user"></i>
                    <span class="links_name">Log Out</span>
                  </a>
                </li>
              </ul>
          </div>
          <section class="home-section">
            <nav>
              <div class="sidebar-button">
                <i class="bx bx-menu sidebarBtn"></i>
                <span class="dashboard">My Profile</span>
              </div>
              <div class="search-box">
                <input type="text" placeholder="Search..."/>
                <i class="bx bx-search"></i>
              </div>
              
            </nav>
        
            <div class="home-content">
              <div class="overview-boxes">
                <div class="box">
                  <div class="right-side">
                    <div class="box-topic">Edit Profile</div>
                    <a class="btn btn-danger" href="Notification" role="button">Edit</a>
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
            </section>
                </div>
            </div>
            </>
    );
}
export default Custprofile;