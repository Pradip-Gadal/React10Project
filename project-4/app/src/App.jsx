
import { useEffect, useState } from "react";
import Body from "./component/Body";
import Navbar from "./component/navbar";

export const BASE_URL = "http://localhost:9000"

const App = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(null)
  const [filterData, setFilterData] = useState(null)
  const [btnData, setBtnData] = useState("All")


  useEffect(()=>{
    const fetchFoodData = async () => {
      setLoading(true);
      try {
       const response = await fetch(BASE_URL);
       const json = await response.json();
       setData(json);
       setFilterData(json);
       setLoading(false);
      }
      catch(error){
       setError("unable to fetch Data");
      }
    };
    fetchFoodData();
  }, []);
  const btnFunction = (type) => {
      if (type=="All"){
        setFilterData(data);
        setBtnData("All");
        return;
      }
      const typeFilter = data?.filter((food) => 
      food.type.toLowerCase().includes(type.toLowerCase()));
      setFilterData(typeFilter);
      setBtnData(type);
    }

  const searchFood = (e) => {
    const foodItems = e.target.value;
    console.log(foodItems)

    const logic = (x) => (x.name.toLowerCase().includes(foodItems.toLowerCase())); 
  
    if (foodItems === ""){
      setFilterData(null)
    } else{
      const filtered = data?.filter(logic)
      setFilterData(filtered);
    }   
  };


  if (error) return <div>{error}</div>;
  if (loading) return <div>loading......</div>;



  return (
    <div>
      <Navbar 
        searchFood = {searchFood}
        btnFunction = {btnFunction}
        btnData={btnData}
      />
      <Body 
        data = {filterData}
      />
    </div>
  )
};

export default App;
