import React from 'react' 
import styled from 'styled-components';
import { green, neutral, red, typeScale, yellow } from '../../utils';  
import DisplayedItemContainer from '../../components/utils/DisplayedItemContainer';


const DashboardMainContentContainer = styled.div` 
    margin-block: 20px;
    background: ${neutral[200]};
    padding: 20px;
    border-radius: 10px;
`

const DashboadCards = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 20px;
`

const DashboardCard = styled.div`
    background: ${props => props.color};
    padding: 20px;
    border-radius: 10px;
`

const DashboardCardTitle = styled.span`
  font-size: ${typeScale.header4};
  font-weight: 500;
`

const DashboardCardContent = styled.div`
  display: flex;
  justify-content: space-between;
`

const DashboardCardIcon = styled.i`
  color: ${props => props.color};
  font-size: ${typeScale.header3};
`

const DashboardCardNumber = styled.p`
  font-size: ${typeScale.header3};
  color: ${props => props.color};
`


export default function Dashboard() {
  return (
    <DisplayedItemContainer> 
      <DashboadCards>
        <DashboardCard color={red[100]}>
          <DashboardCardContent>
            <DashboardCardIcon className='fa fa-users' color={neutral[100]}/>
            <DashboardCardNumber color={neutral[100]}>100</DashboardCardNumber>
          </DashboardCardContent>
          <DashboardCardTitle>Users</DashboardCardTitle>
        </DashboardCard>
        <DashboardCard color={yellow[100]}>
        <DashboardCardContent>
            <DashboardCardIcon className='fa fa-list-alt' color={neutral[100]}/>
            <DashboardCardNumber color={neutral[100]}>100</DashboardCardNumber>
          </DashboardCardContent>
          <DashboardCardTitle>Articles</DashboardCardTitle>
        </DashboardCard>
        <DashboardCard color={green[100]}>
        <DashboardCardContent>
            <DashboardCardIcon className='fa fa-comment' color={neutral[100]}/>
            <DashboardCardNumber color={neutral[100]}>100</DashboardCardNumber>
          </DashboardCardContent>
          <DashboardCardTitle>Comments</DashboardCardTitle>
          </DashboardCard> 
      </DashboadCards>
      <DashboardMainContentContainer>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
        
      </DashboardMainContentContainer>
    </DisplayedItemContainer>
  )
}
