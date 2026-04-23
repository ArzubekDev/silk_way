
'use client';
import axios from 'axios'; // сүрөттү жөнөтүү үчүн
import { Camera, Heart, Search, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react'; // useRef кошуңуз
import { useForm } from 'react-hook-form';
import './Header.scss';
import { getSearchByImage } from '@/shared/api/product.api';

const Header = () => {
  const route = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null); // Инпутка шилтеме
  
  const { register, handleSubmit } = useForm({
    defaultValues: { search: '' },
  });

  // 1. Иконканы басканда инпутту иштетүү
  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  // 2. Сүрөт тандалганда автоматтык түрдө Backend-ке жиберүү
const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (!file) return;

  try {
    // Биздин жаңы fetch функцияны чакырабыз
    const data = await getSearchByImage(file);
    
    if (data && data.length > 0) {
      // Издөө барагына биринчи табылган товардын аты менен багыттайбыз
      // Же болбосо, издөө барагына сүрөт аркылуу келгенин билдирүү үчүн башка жол колдонсоңуз болот
      route.push(`/search?query=${data[0].name}`);
    } else {
      alert("Мындай товар табылган жок");
    }
  } catch (error) {
    console.error("Network Error же Серверден ката:", error);
    alert("Сервер менен байланыш үзүлдү. CORS же Интернетти текшериңиз.");
  }
};

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

          {/* Камера иконкасы */}
          <Camera 
            className='camera' 
            style={{ cursor: 'pointer' }} 
            onClick={handleCameraClick} 
          />

          {/* ЖАШЫРУУН ИНПУТ */}
          <input 
            type="file" 
            ref={fileInputRef} 
            style={{ display: 'none' }} 
            accept="image/*"
            onChange={handleFileChange}
          />
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

export default Header