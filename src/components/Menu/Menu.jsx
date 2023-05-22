import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Burger } from '../../assets/logos/Burger.svg';
import { ReactComponent as LogOut } from '../../assets/logos/logout.svg';

const Menu = ({ itemsList }) => {
  const [isOpen, setIsOpen] = useState(true);

  let x1 = null;
  let y1 = null;

  const handleTouchStart = e => {
    const firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;

    return null;
  };
  const handleTouchMove = e => {
    if (!x1 || !y1) return false;

    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;
    let xDifference = x2 - x1;
    let yDifference = y2 - y1;

    if (Math.abs(xDifference) > Math.abs(yDifference)) {
      if (xDifference > 0) {
        // console.log('right');
        setIsOpen(true);
      } else {
        // console.log('left');
        setIsOpen(false);
      }
    }
    x1 = null;
    y1 = null;
  };

  return (
    <nav
      className={isOpen ? 'menu' : 'menu is-hidden'}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* Більш простий варіант без анімації */}

      {/* {isOpen ? (
        <h3
          className="menu-title"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Gramend
        </h3>
      ) : (
        <Burger
          className="icon-burger"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      )} */}

      <h3
        className={isOpen ? 'menu-title' : 'menu-title is-hidden'}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        Gramend
      </h3>
      <Burger
        className={isOpen ? 'icon-burger is-hidden' : 'icon-burger'}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      />
      <ul className="menu-list">
        {itemsList.map(({ title, logo }, index) => (
          <li className="menu-item" key={index}>
            <Link className="menu-link" to="/">
              {logo}
              <p
                className={
                  isOpen ? 'menu-item--title' : 'menu-item--title is-hidden'
                }
              >
                {title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="button_wrapper">
        <Link className="menu-link" to="/">
          <button className={isOpen ? 'menu-button' : 'menu-button is-hidden'}>
            Log out
            <LogOut className="icon-logout" />
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Menu;
