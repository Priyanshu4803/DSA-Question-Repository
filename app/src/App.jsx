import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchResult from './Components/SearchResult';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const App = ({ toggleColor, questionColor, borderColor, icon }) => {
  const BASE_URL = "http://localhost:9000";
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {

      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
      }
    }

    fetchFoodData();
  }, [])

  const searchFood = (e) => {
    const searchValue = e.target.value;
    // console.log(searchValue);

    if (searchValue == "")
      setFilteredData(null);

    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase()))

    setFilteredData(filter);
    setSelectedBtn("all");
  }

  const FilterFood = (type) => {
    if (type == "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase()))
    // setSelectedBtn(null);
    setFilteredData(filter);
    setSelectedBtn(type);
  }

  const FilterPlatform = (platform) => {
    if (platform == "Select a platform") {
      setFilteredData(data);
      // setSelectedBtn("all");
      return;
    }

    const filter = data?.filter((food) =>
      food.platform.toLowerCase().includes(platform.toLowerCase()))
    // setSelectedBtn(null);
    setFilteredData(filter);
    // setSelectedBtn(type);
  }
  if (error) {
    return <div>{error}</div>
  }
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <>
      <Container>
        <TopContainer>
          <div className='logo'>
            <img src="/logoCodeGeeks.png"></img>
          </div>
          <div className="search">
            <input style={{ color: questionColor }} onChange={searchFood} placeholder='Search Question'></input>
            <button onClick={toggleColor}><div><FontAwesomeIcon icon={icon ? faMoon : faSun} /></div></button>
            <select onChange={(e) => FilterPlatform(e.target.value)}>
              <option value="Select a platform">Select a platform</option>
              <option value="leetcode">Leetcode</option>
              <option value="gfg">GeeksForGeeks</option>
            </select>

          </div>
        </TopContainer>

        <FilterContainer>
          <Button isSelected={selectedBtn == "all"} onClick={() => FilterFood("all")}>All</Button>
          <Button isSelected={selectedBtn == "dynamic programming"} onClick={() => FilterFood("dynamic programming")}>Dynamic Programming</Button>
          <Button isSelected={selectedBtn == "recursion"} onClick={() => FilterFood("recursion")}>Recursion</Button>
          <Button isSelected={selectedBtn == "tree"} onClick={() => FilterFood("tree")}>Tree</Button>
          <Button isSelected={selectedBtn == "graph"} onClick={() => FilterFood("graph")}>Graph</Button>
          <Button isSelected={selectedBtn == "array"} onClick={() => FilterFood("array")}>Array</Button>
          <Button isSelected={selectedBtn == "binary search"} onClick={() => FilterFood("binary search")}>Binary Search</Button>
          <Button isSelected={selectedBtn == "bit manipulation"} onClick={() => FilterFood("bit manipulation")}>Bit Manipulation</Button>
        </FilterContainer>

      </Container>
      <SearchResult data={filteredData} questionColor={questionColor} borderColor={borderColor} />

    </>
  )
};

export default App;

export const Container = styled.div`
max-width:1200px;
margin: 0 auto;
`
  ;
const TopContainer = styled.section`
height:140px;
display:flex;
justify-content: space-between;
align-items: center;
padding: 16px;

.logo {
  img{
    height: 300px;
    width: 300px;
  }
}
.search{
  display: flex;
  gap: 5px;

  button{
    width: 50px;
    border-radius: 5px;
    background-color: gainsboro;
    font-size: 17px;
    border-color: transparent;
  }
  input{
    background-color: transparent;
    border: 1px solid #DE3163;
    /* color: 	white; */
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;

    
  }
  ::placeholder{
      color: darkgray;
    }
}

@media (0 < width < 600px)
{
  flex-direction: column;
  height: 120px;
}
`;

const FilterContainer = styled.section`
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
padding-bottom: 30px;
`
const Button = styled.button`
background : ${({ isSelected }) => (isSelected ? "#DE3163" : "#FF5733")};
border-radius:5px;
padding: 6px 12px;
border: none;
color: white;
width: 120px;
height: 40px;
font-size: 12px;
cursor: pointer;

&:hover{
  background-color: #DE3163;
}


`

