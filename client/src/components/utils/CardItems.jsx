import styled from "styled-components";
import { neutral, typeScale } from "../../utils";
import { Link } from "react-router-dom";

 const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${neutral[100]};
  border-radius: 1rem;
  box-shadow: 0 0 2px ${neutral[600]};
  width: 100%;
`;

 const CardImage = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    object-fit: cover;
  }
`;

 const CardTitle = styled.p`
  font-size: ${typeScale["header4"]};
  text-align: center;
  margin: 0; 
`;

 const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.countrow || 3}, 1fr);
  gap: 1.6rem;
  margin-top: 20px;
`;

 const CardLink = styled(Link)`
  text-decoration: none;
  color: ${neutral[600]};
  &:hover {
    border-radius: 1rem;
    box-shadow: 4px 5px 5px ${neutral[600]};
  }
`;

const CardBtns = styled.div`
  display: flex;
  justify-content: space-around;
  gap:5px;
  background: ${neutral[300]};
  width: 100%;
  padding: 5px;
  border-radius: 10px;
`

const CardBtn = styled(Link)`
  padding: 5px;
  border-radius: 5px;
  background: ${neutral[300]};
  text-decoration: none;
  text-align: center;
  color: ${neutral[600]};
`

const CardItem = ({item,isAdmin})=>{
  return <CardContainer>
    <CardImage>
      <img src="https://via.placeholder.com/150" alt="article" />
    </CardImage>
    <CardTitle>
      {item.title}
    </CardTitle>
{isAdmin &&    <CardBtns>
      <CardBtn to="/edit">
        <i className="fa fa-edit" />
      </CardBtn>
      <CardBtn to="/details">
        <i className="fa fa-eye" />
      </CardBtn>
      <CardBtn to="/delete">
        <i className="fa fa-trash" />
      </CardBtn>
    </CardBtns>
}
  </CardContainer>
}


export default function CardItems({ currentItems, isAdmin }) {
  console.log(isAdmin);
  const listAdmin =  currentItems.map(item => <CardItem key={item} item={item} isAdmin={isAdmin} />);
  const listClient = currentItems.map(item => <CardLink to="/item" key={item}><CardItem item={item} isAdmin={isAdmin} /></CardLink>);
  
  return (
    currentItems &&
    <CardsContainer countrow={4}>
      { isAdmin ? listAdmin : listClient }
    </CardsContainer>
  );
}
