import { useRef, useState } from 'react';
import './App.scss';
import CategoryList from './components/CategoryList';
const App = () => {
  const [containerList, setContainerList] = useState([
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/women.png"
    },
    {
      id: 5,
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    },
  ]);
  return (
    <div className="App">
       <CategoryList containerList={containerList}></CategoryList>
    </div>
  );
}

export default App;
