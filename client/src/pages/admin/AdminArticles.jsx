import React, { useState } from 'react'
import PaginatedItems from '../../components/utils/PaginatedItems' 
import TableItems from './../../components/utils/TableItems';
import TopSection from '../../components/utils/TopSection';
import DisplayedItemContainer from '../../components/utils/DisplayedItemContainer';
import CardItems from '../../components/utils/CardItems';

const items = [{
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

export default function AdminArticles() {

    const [displayMode , setDisplayMode] = useState('table');
    const changeDisplayDataMode = (e)=>{
        const name = e.target.getAttribute('name') ;
       setDisplayMode(name);
    }

    const addHandler = ()=>{
        console.log('add article');
    }

  return (
    <DisplayedItemContainer>
      <TopSection changeDisplayDataMode={changeDisplayDataMode} addHandler={addHandler}/>
      <PaginatedItems itemsPerPage={displayMode === "table" ? 5 : 8} items={items} Component={displayMode === "table" ? TableItems : CardItems} isAdmin={true}/>
    </DisplayedItemContainer>
  )
}

