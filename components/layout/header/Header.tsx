'use client';
import { Heart, Search, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import './Header.scss';

const Header = () => {
  const route = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: { search: '' },
  });

  function onSubmit(data: any) {
    route.push(`/search?query=${data.search}`);
  }

  return (
    <header id="header">
      <div className="container">
        <div className="header__left">
          <div className="header__left--logo">Silk-Way</div>
          <form onSubmit={handleSubmit(onSubmit)} className="header__left--search">
            <input {...register('search')} type="text" placeholder="Search"/>
           <span className="header__left--search--icon"> <Search /> </span>
          </form>
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
            onClick={() => route.push('/profile')}
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
