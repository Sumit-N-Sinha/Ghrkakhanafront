import Navbar from "../navbar/Navbar";

const AdminControl = () => {
  return (
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
      <a href="/AdminControl" class="active">
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
      <a href="/AdminCS">
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
    <span class="dashboard">Dashboard</span>
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
        <div class="box-topic">Get All Customers</div>
        <a class="btn btn-danger" href="/all" role="button">Find</a>
        
      </div>
      <i class="bx bx-cart-alt cart"></i>
    </div>
    <div class="box">
      <div class="right-side">
        <div class="box-topic">Get All Vendor</div>
        <a class="btn btn-danger" href="/listvendor" role="button">Find</a>
        
      </div>
      <i class="bx bxs-cart-add cart two"></i>
    </div>
    <div class="box">
      <div class="right-side">
        <div class="box-topic">Delete Order</div>
        <a class="btn btn-danger" href="/deleteorder" role="button">Delete</a>
        
      </div>
      <i class="bx bx-cart cart three"></i>
    </div>
    
  </div>
</div>
</section>
    </div>
  {/* <Slider {...settings}>
  <div className="bacckk">
  <Item 
   cover={Items[0].cover}
   title={Items[0].title}
  /> 
  <Item 
   cover={Items[1].cover}
   title={Items[1].title}
  /> 
  <Item 
   cover={Items[2].cover}
   title={Items[2].title}
  /> 
  <Item 
   cover={Items[3].cover}
   title={Items[3].title}
  /> 
  <Item 
   cover={Items[4].cover}
   title={Items[4].title}
  /> 
  <Item 
   cover={Items[5].cover}
   title={Items[5].title}
  /> 
  <Item 
   cover={Items[6].cover}
   title={Items[6].title}
  /> 
  <Item 
   cover={Items[7].cover}
   title={Items[7].title}
  /> 
  </div>
  </Slider> */}
</div>
</>
  )
};

export default AdminControl;