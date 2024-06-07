import React from 'react'
import styled from 'styled-components';
import { categories } from '../assets/data/data.js';  
import { neutral, typeScale } from '../utils';

const Category = styled.div`
  color: ${neutral[100]};
  background: ${neutral[500]};
  margin: 0.5rem;
  font-size: ${typeScale["header4"]};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  &:hover {
    background: ${neutral[400]};
    cursor: pointer; 
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  margin-top: 2rem ;
`

export default function Categories() {

const categoryList = categories.length>0 && categories.map(category => <Category key={category.id}>{category.label}</Category>)

  return (
    <CategoriesContainer>
      {categoryList}
      </CategoriesContainer>
  )
}
