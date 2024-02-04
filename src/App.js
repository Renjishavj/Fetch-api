import styled from "styled-components";
import ImageCard from "./components/ImageCard";
import { useEffect,useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  //Fetch from a api using axios
  useEffect(() => {
    axios
      .get('http://localhost:3300/movies')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log('Error', error));
  }, []);
  return (
   <Main>
    {
      data &&
      data.map((eachData)=>{
        return(
          <ImageCard key={eachData.title} data={eachData}/>
      )})
    }
   </Main>
  );
}

export default App;

const Main=styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
line-height: 10px;
justify-content: center;
padding: 50px 10px;
`
