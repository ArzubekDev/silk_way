import { Star } from 'lucide-react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Prices */}
      <div className="sidebar--prices">
        <div className="sidebar--prices__title">
          <h3>
            Price Range <br />
            <span>The average price is $300</span>
          </h3>
          <span>Reset</span>
        </div>
        <input type="range" />
      </div>
      {/* Rating */}
      <div className="sidebar--rating">
        <h3>Star Rating</h3>
        <div className="sidebar--rating__bottom">
          <div className="sidebar--rating__bottom--icons">
           {[1,2,3,4,5].map((el) => (
             <Star key={el}/>
           ))}
          </div>
          <span>4 Stars & up</span>
        </div>
      </div>
      {/* Brands */}
      <div className="sidebar--brands">
        <div className="sidebar--brands__title">
          <h3>Brand</h3>
          <span>Reset</span>
        </div>
        {[1, 2, 3, 4].map((el) => (
          <div key={el} className="sidebar--brands__item">
            <h4>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/24/Adidas_logo.png"
                alt="adidas"
              />
              Adidas
            </h4>
            <span></span>
          </div>
        ))}
        <p className="sidebar--brands__more">More Brand</p>
      </div>
      {/* Delivery */}
      <div className="sidebar--delivery">
        <h3 className="sidebar--delivery__title">Delivery Options</h3>
        <div className="sidebar--delivery__buttons">
          <button>Standart</button>
          <button>Pick Up</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
