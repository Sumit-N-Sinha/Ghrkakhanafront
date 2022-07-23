import Navbar from "../navbar/Navbar";

function Vendorprofile(){
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
          <span class="logo_name">Vendor Panel</span>
        </div>
          <ul class="nav-links">
            <li>
              <a href="/Vendordash">
                <i class="bx bx-grid-alt"></i>
                <span class="links_name">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/Vendorprofile" class="active">
                <i class="bx bx-box"></i>
                <span class="links_name">Profile</span>
              </a>
            </li>
            <li>
              <a href="/Vendorfood">
                <i class="bx bx-pie-chart-alt-2"></i>
                <span class="links_name">View Food</span>
              </a>
            </li>
            <li>
              <a href="/Vendorstatus">
                <i class="bx bx-book-alt"></i>
                <span class="links_name">Status</span>
              </a>
            </li>
            <li>
              <a href="/Vendor">
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
            <span class="dashboard">Profile</span>
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
                <div class="box-topic">Edit details</div>
                <a class="btn btn-danger" href="Notification" role="button">Edit</a>
                
              </div>
              <i class="bx bx-cart-alt cart"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Edit Food Items</div>
                <a class="btn btn-danger" href="AttendanceS" role="button">Edit</a>
                
              </div>
              <i class="bx bxs-cart-add cart two"></i>
            </div>
            
            
          </div>
        </div>
        </section>
            </div>
        </div>
        </>
        );
}
export default Vendorprofile;