import styles from './Card.module.scss';

interface ProductProps {
  el: {
    id: number;
    name: string;
    description?: string;
    price: number | string;
    imageUrl?: string;
    tags?: string;
  };
}

const Card = ({ el }: ProductProps) => {
  const tagList = el.tags ? el.tags.split(',').slice(0, 2) : [];

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img 
          src={el.imageUrl || 'https://via.placeholder.com/300'} 
          alt={el.name} 
        />
        {tagList.length > 0 && (
          <div className={styles.tags}>
            {tagList.map((tag, i) => (
              <span key={i}>{tag.trim()}</span>
            ))}
          </div>
        )}
      </div>
      
      <div className={styles.content}>
        <h3>{el.name}</h3>
        <p className={styles.description}>
          {el.description || 'Нет описания'}
        </p>
        
        <div className={styles.footer}>
          <span className={styles.price}>{Number(el.price).toLocaleString()} сом</span>
          <button>Купить</button>
        </div>
      </div>
    </div>
  );
};

export default Card;