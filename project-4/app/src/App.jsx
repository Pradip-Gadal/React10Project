
import { useEffect, useState } from "react";
import Body from "./component/Body";
import Navbar from "./component/navbar";

export const BASE_URL = "http://localhost:9000"

const App = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(null)

  useEffect(()=>{
    const fetchFoodData = async () => {
      setLoading(true);
      try {
       const response = await fetch(BASE_URL);
       const json = await response.json();
       setData(json);
       setLoading(false);
      }
      catch(error){
       setError("unable to fetch Data");
      }
    };
    fetchFoodData();
  }, [])
  console.log(data)

  if (error) return <div>{error}</div>;

  if (loading) return <div>loading......</div>;



  return (
    <div>
      <Navbar />
      <Body data = {data} />
    </div>
  )
};

export default App;
