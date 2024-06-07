import React from 'react'
import styled from 'styled-components'
import { bgColorPrimary, blue, neutral, red, yellow } from '../../utils'
import { Link } from 'react-router-dom';

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 55vh; 
`

const TableHeader = styled.div`
  display: flex;
  padding: 10px 0;
  & > * {
    flex:1;
    text-align: center;
  }
`

const TableRow = styled(TableHeader)`
  & > *:last-child {
    display: flex;
    justify-content: space-evenly; 
  }
`

const TableRowFirst = styled(TableRow)`
  font-weight: 600;
  background: ${bgColorPrimary[100]};
  
`

const TableRowItem = styled.span`
  color: ${neutral[600]};
`

const TableContent = styled.div`
  display: flex; 
  flex-direction: column;
  gap:4px;
`

const TableIcon = styled.i`
  cursor: pointer;
  color: ${neutral[600]};
  font-size: 14px;
  &:hover { 
    color: ${neutral[100]};
  }
`

const TableBtn = styled(Link)`
  padding: 5px;
  border-radius: 5px;
  background: ${props => props.color};
  text-decoration: none;
  text-align: center;
  width: 30px;
`



export default function TableItems({currentItems}) {

    const keys = Object.keys(currentItems[0]);
    const TableHeaders = <TableRowFirst> {
      keys.map((key, index) =><TableRowItem key={index}>{`${key.charAt(0).toUpperCase()}${key.slice(1)}`}</TableRowItem>
    )}
      <TableRowItem>Actions</TableRowItem>
    </TableRowFirst>

  return (
    <TableContainer>
      <TableHeader>
       {TableHeaders} 
      </TableHeader>
      <TableContent>
        {currentItems.map((item, index) => {
          return (
            <TableRow key={index}>
              <TableRowItem>{item.id}</TableRowItem>
              <TableRowItem>{item.title}</TableRowItem>
              <TableRowItem>
                <TableBtn color={yellow[100]}><TableIcon className='fa fa-pen'/></TableBtn>
                <TableBtn color={red[100]}><TableIcon className='fa fa-trash'/></TableBtn>
                <TableBtn color={blue[100]}> <TableIcon className='fa fa-eye'/></TableBtn>
              </TableRowItem>
            </TableRow>
          )
        })}
      </TableContent>
    </TableContainer>
  )
}
