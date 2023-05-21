import './App.css';
import Menu from './Menu/Menu';

import { ReactComponent as Friends } from '../assets/logos/friends.svg';
import { ReactComponent as Messages } from '../assets/logos/message.svg';
import { ReactComponent as Play } from '../assets/logos/play.svg';
import { ReactComponent as Settings } from '../assets/logos/setting.svg';

const items = [
  {
    title: 'Friends',
    logo: <Friends />,
  },
  { title: 'Messages', logo: <Messages /> },
  {
    title: 'Play',
    logo: <Play />,
  },
  { title: 'Settings', logo: <Settings /> },
];

function App() {
  return (
    <div className="container">
      <Menu itemsList={items} />
      <main className="main"></main>
    </div>
  );
}

export default App;
