import Navbar from "../navbar/Navbar";

function Custorderd(){
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
              <a href="/Custprofile">
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
              <a href="/Custorderd" class="active">
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
            <span class="dashboard">Orders..</span>
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
                <div class="box-topic">Add Order</div>
                <a class="btn btn-danger" href="order" role="button">CREATE</a>
                
              </div>
              <i class="bx bx-cart-alt cart"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">View Order</div>
                <a class="btn btn-danger" href="allorders" role="button">View</a>
                
              </div>
              <i class="bx bxs-cart-add cart two"></i>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Cancel Order</div>
                <a class="btn btn-danger" href="cancelorder" role="button">Cancel</a>
                
              </div>
              <i class="bx bx-cart cart three"></i>
            </div>
            
          </div>
        </div>
        </section>
            </div>
        </div>
        </>
        );
}
export default Custorderd;