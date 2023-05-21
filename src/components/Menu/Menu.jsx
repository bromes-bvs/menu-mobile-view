import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Burger } from '../../assets/logos/Burger.svg';
import { ReactComponent as LogOut } from '../../assets/logos/logout.svg';

const Menu = ({ itemsList }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className={isOpen ? 'menu' : 'menu is-hidden'}>
      {isOpen ? (
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
      )}
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
        <button className={isOpen ? 'menu-button' : 'menu-button is-hidden'}>
          Log out
          <LogOut className="icon-logout" />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
