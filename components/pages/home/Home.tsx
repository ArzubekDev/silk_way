import Card from '@/ui/card/Card';
import './Home.scss';

export interface ItemType {
  id: number;
  image: string;
  name: string;
  price: number;
  popular: string | null;
}
const items: ItemType[] = [
  {
    id: 1,
    image: 'https://static.tildacdn.one/stor6364-3764-4138-b438-386563383866/13750033.webp',
    name: 'Iphone 16',
    price: 920,
    popular: 'Popular',
  },
  {
    id: 2,
    image: 'https://login.kg/image/cache/catalog/new/Televisory/Samsung/UE50AU7100U/1-1200x800.jpg',
    name: 'Samsung TV',
    price: 770,
    popular: null,
  },
  {
    id: 3,
    image:
      'https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/T12415s5.jpg?im=Resize,width=750',
    name: 'T-Shirt',
    price: 920,
    popular: null,
  },
  {
    id: 4,
    image: 'https://img.ebdcdn.com/product/frame/gray/luspl00490_0d.jpg',
    name: 'Ray-Ban Justin',
    price: 450,
    popular: 'Popular',
  },
  {
    id: 5,
    image:
      'https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg',
    name: 'Apple Watch Series 9',
    price: 680,
    popular: null,
  },
];
const Home = () => {
  return (
    <section className="home">
      <div className="home--content">
        {items && items.map((el) => <Card el={el} key={el.id} />)}
      </div>
    </section>
  );
};

export default Home;
