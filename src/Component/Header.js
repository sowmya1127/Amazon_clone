import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import LocationIcon from '@material-ui/icons/LocationOnOutlined'
import CartIcon from '@material-ui/icons/AddShoppingCartRounded'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'




function Header() {
  let basket = useSelector(state => state.basket)
  // let useName=useSelector(state=>state.user,email);

  console.log(basket);
  return (
    <div className='header'>
      <div className='header__row'>
        <div className='header__col1'>
          <Link to='/'>
            <div className='header__logopart'>
              <img className='header__logo' src=' http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
            </div>
          </Link>


          <div>
            <LocationIcon className='header__LoacationIcon'></LocationIcon>

          </div>
          <Link to='/adress'>
            <div className='header__adress' data-toggle='modal' data-target='#myModal'>
              <span className='header__texttop'>Hello</span>
              <span className='header__textbottom'>select your adress</span>
            </div>
          </Link>
        </div>
        <div className="header__col2">
          <div className="header__search">
            <input type='text' />
          </div>
          <SearchIcon className='header__SearchIcon'></SearchIcon>
        </div>
        <div className='header__col3'>
          <Link to='/country'>
            <div className="header__country">
              <img className='header__flag' src='https://tse1.mm.bing.net/th?id=OIP.mj6ZxHH_YhezE3baAh0MNwHaEs&pid=Api&rs=1&c=1&qlt=95&w=194&h=123' alt='country flag' />
            </div>
          </Link>
          <Link to='/accounts'>
            <div className='header__accounts' >
              <span className='header__texttop'>Hello Customer </span>
              <span className='header__textbottom'>Signin</span>
            </div>
          </Link>
          <Link to='/orders'>
            <div className='header__orders'>
              <span className='header__texttop'>returns</span>
              <span className='header__textbottom' >&orders</span>
            </div>
          </Link>
          <Link to='/cart'>
            <div className='header__cart'>
              <CartIcon className='header__CartIcon'></CartIcon>
              <span>{basket.length}</span>
              <span>cart</span>
            </div>
          </Link>



        </div>
      </div>
      <div class="modal" id="myModal">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">


            <div class="modal-header">
              <h4 class="modal-title  " >choose your location</h4>


            </div>


            <div class="modal-body">
              <p className='modal-text '>Select a delivery location to see product availability and delivery options</p>
              <button type="button" class="btn btn-warning btn-block" disabled data-toggle="modal" data-target="#myModal" className='text-color mx-auto d-block ' >
                sign in to see your adress
              </button>
            </div>


            <div class="modal-footer">
              <p className='modal-text'>or enter an Indian pincode</p>
              <input type='number'></input>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Apply</button>
            </div>

          </div>
        </div>
      </div>


    </div>)
}
export default Header;