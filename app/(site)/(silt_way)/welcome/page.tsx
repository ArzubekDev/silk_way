'use client';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import { ArrowRight, Store, User } from 'lucide-react';
import Image from 'next/image';
import '../../../../styles/Welcome.scss';

interface ItemProps {
  id: number;
  logo: string;
}

const item: ItemProps[] = [
  {
    id: 1,
    logo: 'https://almaty.mart.kz/upload/iblock/ebf/ebf5285866fd5bf360485bd4cf8bab7d.png',
  },

  {
    id: 2,
    logo: 'https://economist.kg/content/images/2025/11/beeline_g--2--1-1.png',
  },
  {
    id: 3,
    logo: 'https://img.hhcdn.ru/employer-logo-round/7069403.jpeg',
  },
  {
    id: 4,
    logo: 'https://static.tildacdn.one/tild3536-3335-4561-b332-366363383732/_1.png',
  },
  {
    id: 5,
    logo: 'https://attachments.gorgias.help/cdn-cgi/image/quality=100,width=3840/https://attachments.gorgias.help/o2axk/hc/qjn7/logo-228d9d9d-73fc-454e-8e1b-a951f2362618.png',
  },
  {
    id: 6,
    logo: 'https://cdn-icons-png.flaticon.com/512/0/747.png',
  },
  {
    id: 7,
    logo: 'https://portal.powertec.com.au/sites/default/files/styles/scale_square/public/2024-01/Megacom-Kyrgyzstan-logo.png.webp?itok=PDPb88Wm',
  },
  {
    id: 8,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Samsung_old_logo_before_year_2015.svg/1280px-Samsung_old_logo_before_year_2015.svg.png',
  },
  {
    id: 9,
    logo: 'https://almaty.mart.kz/upload/iblock/ebf/ebf5285866fd5bf360485bd4cf8bab7d.png',
  },
];
const WelcomePage = () => {
  const doubledItems = [...item, ...item, ...item, ...item];
  return (
    <section className="welcome">
      <div className="welcome__container">
        <div className="welcome__left">
          <h1 className="welcome__logo">Tap</h1>
          <h2 className="welcome__title">Создайте интернет-магазин бесплатно</h2>
          <p className="welcome__description">
            Tap — это не просто конструктор сайтов. Он помогает продавать товары, снижать затраты и
            экономить время.
          </p>
          <Button type="primary">Test</Button>
        </div>
        <div className="welcome__right">
          <h2 className="welcome__action-title">Добро пожаловать!</h2>
          <p className="welcome__action-subtitle">Выберите тип аккаунта, чтобы продолжить</p>

          <div className="welcome__cards">
            <div className="welcome__card welcome__card--buyer">
              <div className="welcome__card-icon welcome__card-icon--buyer">
                <User size={28} />
              </div>
              <div className="welcome__card-content">
                <h3>Я покупатель</h3>
                <p>Хочу искать товары и делать покупки на маркетплейсе.</p>
              </div>
              <button className="welcome__card-btn">
                Войти <ArrowRight size={16} />
              </button>
            </div>

            <div className="welcome__card welcome__card--seller">
              <div className="welcome__card-icon welcome__card-icon--seller">
                <Store size={28} />
              </div>
              <div className="welcome__card-content">
                <h3>Я продавец</h3>
                <p>Хочу открыть свой магазин и продавать товары.</p>
              </div>
              <button className="welcome__card-btn welcome__card-btn--primary">
                Начать <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="welcome--footer">
        <h2 style={{ color: 'white' }}>С нами работают</h2>
        <div className="welcome--footer__partners">
          <motion.div
            className="welcome--footer__partners--scroll"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              ease: 'linear',
              duration: 25,
              repeat: Infinity,
            }}
          >
            {doubledItems.map((el, index) => (
              <Image
                key={index}
                src={el.logo}
                alt="logo"
                width={120}
                height={90}
                style={{ objectFit: 'contain' }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
