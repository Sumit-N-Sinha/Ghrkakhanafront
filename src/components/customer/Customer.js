import Slider from 'react-slick';
import Navbar from '../navbar/Navbar';
import Item from './deliveryItem/Item';
import Items from './Items';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

// const settings = {
//   infinite: false,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   nextArrow: <NextArrow />,
//   prevArrow: <PrevArrow />
// };

function Customer(){
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
        <span class="logo_name">Customer Panel</span>
      </div>
        <ul class="nav-links">
          <li>
            <a href="/Customer" class="active">
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
              <div class="box-topic">Add Order</div>
              <a class="btn btn-danger" href="add-food" role="button">Create</a>
              
            </div>
            <i class="bx bx-cart-alt cart"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Get All Food</div>
              <a class="btn btn-danger" href="food" role="button">Tasty</a>
              
            </div>
            <i class="bx bxs-cart-add cart two"></i>
          </div>
          <div class="box">
            <div class="right-side">
              <div class="box-topic">Order Status</div>
              <a class="btn btn-danger" href="Assessment" role="button">Get Status</a>
              
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
  );
}
export default Customer;