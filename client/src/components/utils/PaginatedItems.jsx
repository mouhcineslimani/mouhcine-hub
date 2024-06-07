import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { bgColorPrimary, neutral } from '../../utils';

const PaginationContainer = styled.div`
  margin: 0px; 
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    gap:10px;
  }

  li {
    margin: 0 5px;
    cursor: pointer;
    color: ${neutral[600]};
    background: ${bgColorPrimary[100]};
    padding: 10px;
    border-radius: 10px;
    &:hover {
        background: ${bgColorPrimary[400]};
        color: ${neutral[100]}; 
    }
  }
 `;

export default function  PaginatedItems({ itemsPerPage, items, Component , isAdmin }) {
    const [itemOffset, setItemOffset] = useState(0);
   
    const endOffset = itemOffset + itemsPerPage; 
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
     const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };
  
    return (
      <PaginationContainer>
        <Component currentItems={currentItems} isAdmin={isAdmin} />
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </PaginationContainer>
    );
  }

