'use client'
import Card from '@/ui/card/Card';
import './Home.scss';
import { useQuery } from '@tanstack/react-query';
import { PRODUCT_KEYS } from '@/shared/api/query-keys';
import { getProducts } from '@/shared/api/product.api';


const Home = () => {
    const { data: products } = useQuery<any>({
    queryKey: PRODUCT_KEYS.all,
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
  });
  
  return (
    <section className="home">
      <div className="home--content">
        {products?.map((el:any) => <Card el={el} key={el.id} />)}
      </div>
    </section>
  );
};

export default Home;
