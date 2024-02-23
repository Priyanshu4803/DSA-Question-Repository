import { useState } from "react";
import styled from "styled-components"
// import { Button } from "../App";
// import { Container } from "../App";
const BASE_URL = "http://localhost:9000";



const SearchResult = ({ data, questionColor , borderColor}) => {
  const [revisitColor, setRevisitColor] = useState("#ff4343");
  const toggleRevisitColor = () => {
    setRevisitColor((prevColor) => (prevColor === "#ff4343" ? "green" : "#ff4343"));
  };

  const getFirstThreeWords = (str) => {
    const words = str.split(' ');
    return words.slice(0, 3).join(' ');
  };
  return (
    <>
      {/* <Container> */}
      {/* <FoodCardContainer> */}
      <FoodCards>
        {
          data?.map((food) => (
            <FoodCard key={food.name} style={{borderColor:borderColor}}>
              <div className="food_image">
                <img src={BASE_URL + food.image}  ></img>
              </div>
              <div className="food_info">
                <div className="info">
                  {food.name.length >= 40 ? (
                    <>
                      <h3 >{getFirstThreeWords(food.name)}...</h3>
                    </>
                  ) : (
                    <h3 style={{ fontSize: '18px', fontWeight: 500, color: questionColor }}>{food.name}</h3>
                  )}

                  <a href={food.text} target="_blank" rel="noopener noreferrer">Question Link</a>
                </div>
                <div className="food_buttons">
                  <Button onClick={toggleRevisitColor} style={{ backgroundColor: revisitColor }}>{food.revisit}</Button>
                  <Button>{food.complete}</Button>
                </div>
              </div>




            </FoodCard>
          ))
        }
      </FoodCards>
      {/* </FoodCardContainer> */}
      {/* </Container> */}
    </>
  )
}

export default SearchResult

// const Container = styled.div`
// background-image: url("/bg.png");
// background-size: cover;
// max-width: 100%;
// display: flex;
// flex-wrap: wrap;
// row-gap: 32px;
// column-gap: 20px;
// justify-content: center;
// align-items: center;
// `;
// const FoodCardContainer = styled.section`
// max-width: 1200px;
// min-height: calc(100vh - 200px);
// `;

const FoodCards = styled.div`
max-width: 1200px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;
row-gap: 32px;
column-gap: 20px;
justify-content: center;
align-items: center;
padding-top: 20px;
`;
const FoodCard = styled.div`

  width: 350px;
  height: 150px;
  /* border: 0.66px solid ${(props) => props.borderColor}; */
  border: 0.8px solid ;
  background-color: rgb(224, 176, 255 , .2);


  /* margin-bottom: 5px; */

  /* border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    ); */

  /* background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    ); */
  /* background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px); */

  border-radius: 15px;

  display: flex;
  /* justify-content: space-between; */
  padding: 8px;

  .food_info{
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    margin-left: 20px;
    margin-top: 4px;
    /* padding-left: 50px; */
    padding-right: 10px;
    a{
      /* text-decoration: none;
       */
      &:hover{
        /* text-decoration: none; */
        color: pink;
      }
    }
    /* h3{
      font-size: 18px;
      font-weight: 500;
      color: ${(props) => props.questionColor};
    } */
    p{
      margin-top: 4px;
      font-size: 12px;
    }
    a{
      color: black;
    }
    /* button{
      font-size: 12px;
    } */

    
  }
  .food_image {
      img{
        margin-left: 10px;
        margin-top: 4px;
        height: 40px;
        width: 40px;
      }
    }

    .food_buttons{
      display: flex;
      align-items: end;
      /* gap: 200px; */
      justify-content: space-between;
      gap: 10px;
    }
    .food_tag{
      display: flex;
      justify-content: space-between;
      grid-template-columns: 15px;
    }
  `
const Button = styled.button`
background : ${({ isSelected }) => (isSelected ? "darksalmon" : "#ff4343")};
border-radius:5px;
padding: 6px 12px;
border: none;
color: white;
width: 100px;
height: 30px;
font-size: 12px;
/* margin-bottom: 50px; */
cursor: pointer;

&:hover{
  background-color: darksalmon;
}


`