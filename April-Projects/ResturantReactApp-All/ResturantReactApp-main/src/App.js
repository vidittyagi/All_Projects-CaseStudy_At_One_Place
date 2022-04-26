import logo from './logo.svg';
import './App.css';
import Fooditems from './components/fooditem';
import Drinks from './components/drinks';

function App() {
  const data = [
    {
      dishType:'veg',
      dishName: 'Panner Tikka',
      dishPrice: 'INR 100'
    },
    {
      dishType:'veg',
      dishName: 'Panner Tikka Masala',
      dishPrice: 'INR 100'
    },
    {
      dishType:'veg',
      dishName: 'Panner Bhurji',
      dishPrice: 'INR 100'
    }

  ]

  const drinkData = [
    {
      dType:'Mocktail',
      dName: 'Mojito',
      dPrice: 'INR 100'
    },
    {
      dType:'Mocktail',
      dName: 'Lemonade',
      dPrice: 'INR 100'
    },
    {
      dType:'Cocktail',
      dName: 'Liit',
      dPrice: 'INR 100'
    }

  ]
  return (
    <div>
      <h2 className='itemHeader'>Balraj's Kitchen</h2>
      <h3>Main Course</h3>
      <Fooditems dishType={data[0].dishType} dishName={data[0].dishName} dishPrice={data[0].dishPrice}></Fooditems>
      <Fooditems dishType={data[1].dishType} dishName={data[1].dishName} dishPrice={data[1].dishPrice}></Fooditems>
      <Fooditems dishType={data[2].dishType} dishName={data[2].dishName} dishPrice={data[2].dishPrice}></Fooditems>
      <h3>Drinks</h3>
      {drinkData.map((item) => <Drinks dType={item.dType} dName={item.dName} dPrice={item.dPrice}/>)}
    </div>
  );
}

export default App;
