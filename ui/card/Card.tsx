import { ItemType } from '@/components/pages/home/Home';
import './Card.scss';

type CardProps = {
  el: ItemType;
};

const Card = ({ el }: CardProps) => {
  return (
    <div className="card">
      <img src={el.image} alt={el.name} className='card--image'/>
      <div className="card--content">
        {el.popular && <p>{el.popular}</p>}
        <h3>{el.name}</h3>
        <button>$ {el.price}</button>
      </div>
    </div>
  );
};

export default Card;
