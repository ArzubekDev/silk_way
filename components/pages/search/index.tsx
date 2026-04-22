// components/pages/search/index.tsx
import Card from '@/ui/card/Card';
import style from './style.module.scss';

interface SearchProps {
  query: string;
  initialData: any[];
}

const Search = ({ query, initialData }: SearchProps) => {
  return (
    <section className={style.searchPage}>
      <div className="container">
        <h1 className={style.title}>
          {initialData.length > 0 
            ? `Результаты по запросу: "${query}"` 
            : `По запросу "${query}" ничего не найдено`}
        </h1>
        
        <div className={style.grid}>
          {initialData.map((el) => (
            <Card key={el.id} el={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Search;