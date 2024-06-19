import { useEffect, useState } from 'react';
import PlantList from './PlantList';
import { Outlet } from 'react-router-dom';

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(
      'https://lza4vi7uuvokxmbo5kmt4ou7i40nzhbg.lambda-url.us-east-1.on.aws/'
    )
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className=" w-full flex justify-center">
      <Outlet context={{ plants }} />
    </div>
  );
}

export default App;
