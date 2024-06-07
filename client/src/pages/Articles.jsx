import React, { useState } from 'react'
import styled from 'styled-components';
import Categories from '../components/Categories';
import { bgColorPrimary, neutral, typeScale } from '../utils';  
import CardItems from '../components/utils/CardItems';

const Container = styled.div`
  display: flex; 
  margin: 0 1rem;
  flex-direction: ${props => props.direction || "row"}; 
`;

const ShowMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem; 
`
const ShowMoreBtn = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background: ${bgColorPrimary[100]};
  border: none;
  color: ${neutral[100]};
  box-shadow: 3px 4px 2px ${neutral[600]};
  font-size: ${typeScale["paragraph"]};
  cursor: pointer;
  transition: 0.15s; 
  width: 300px;
  &:hover {
    background: ${bgColorPrimary[400]};
    color: ${neutral[600]}; 

  }
`

const articles = [{
  id: 1,
  title: 'Article 1',
}, {
  id: 2,
  title: 'Article 2',
}, {
  id: 3,
  title: 'Article 3',
}, {
  id: 4,
  title: 'Article 4',
}, {
  id: 5,
  title: 'Article 5',
}, {
  id: 6,
  title: 'Article 6',
}, {
  id: 7,
  title: 'Article 7',
}, {
  id: 8,
  title: 'Article 8',
}, {
  id: 9,
  title: 'Article 9',
}, {
  id: 10,
  title: 'Article 10',
}, {
  id: 11,
  title: 'Article 11',
}, {
  id: 12,
  title: 'Article 12',
}, {
  id: 13,
  title: 'Article 13',
}, {
  id: 14,
  title: 'Article 14',
}, {
  id: 15,
  title: 'Article 15',
}, {
  id: 16,
  title: 'Article 16',
}, {
  id: 17,
  title: 'Article 17',
}, {
  id: 18,
  title: 'Article 18',
}, {
  id: 19,
  title: 'Article 19',
}, {
  id: 20,
  title: 'Article 20',
}
];


export default function Articles() {

  const [displayCount, setDisplayCount] = useState(8); 

  const handleSeeMore = () => {
    setDisplayCount(prevCount => prevCount + 8);
  };

  return (
    <Container direction="column"> 
        <Categories/> 
        <CardItems currentItems={articles.slice(0, displayCount)} isAdmin={false} />
        {displayCount < articles.length && (
        <ShowMoreContainer>
          <ShowMoreBtn onClick={handleSeeMore}>See More</ShowMoreBtn>
        </ShowMoreContainer>
      )}
    </Container>
  );
}
