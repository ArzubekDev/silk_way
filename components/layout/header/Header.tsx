import { Heart, Search, ShoppingBag, ShoppingCart } from 'lucide-react';
import './Header.scss';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header__left">
          <div className="header__left--logo">Tap</div>
          <div className="header__left--search">
            <input type="text" placeholder="Search" />
            <span className="header__left--search--icon">
              <Search />
            </span>
          </div>
        </div>
        <nav className="header__right--nav">
          <a href="#">
            <ShoppingBag />
            <span>Orders</span>
          </a>
          <a href="#">
            <Heart />
            <span>Orders</span>
          </a>

          <a href="#">
            <ShoppingCart />
            <span>Cart</span>
          </a>

          <img
            className="header__right--nav__user-logo"
            src={
              'https://st.depositphotos.com/2309453/3449/i/450/depositphotos_34490345-stock-photo-confident-casual-unshaven-young-man.jpg'
            }
            alt="user"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
