import Navbar from "../navbar/Navbar";

const AdminCS = () => {
  return (
    <div>
         <>
            <div>
            <div className='backk'>
              <Navbar />
            </div>
            <div className='bacckk'>
            <div class="sidebar">
        <div class="logo-details">
          <i class="bx bxl-c-plus-plus"></i>
          <span class="logo_name">Admin Panel</span>
        </div>
          <ul class="nav-links">
            <li>
              <a href="/AdminControl">
                <i class="bx bx-grid-alt"></i>
                <span class="links_name">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/AdminCP">
                <i class="bx bx-box"></i>
                <span class="links_name">Profile</span>
              </a>
            </li>
            <li>
              <a href="/AdminCF">
                <i class="bx bx-pie-chart-alt-2"></i>
                <span class="links_name">Customer</span>
              </a>
            </li>
            <li>
              <a href="/AdminVendor">
                <i class="bx bx-coin-stack"></i>
                <span class="links_name">Vendor</span>
              </a>
            </li>
            <li>
              <a href="/AdminCS" class="active">
                <i class="bx bx-book-alt"></i>
                <span class="links_name">Status</span>
              </a>
            </li>
            <li>
              <a href="/">
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
            <span class="dashboard">Status</span>
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
                <div class="box-topic">Order Status</div>
                <a class="btn btn-danger" href="Notification" role="button">Get Status</a>
                
              </div>
              <i class="bx bx-cart-alt cart"></i>
            </div>
            
            
          </div>
        </div>
        </section>
            </div>
        </div>
        </>
    </div>
  )
};

export default AdminCS;