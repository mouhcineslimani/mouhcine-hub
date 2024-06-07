
import styled from 'styled-components';
import { neutral } from '../../utils';

const Container = styled.div`
  display: flex; 
  flex-direction: column;  
  margin: 0px;
  background: ${neutral[100]};
  padding: 20px;
  border-radius: 10px;
`;
 
export default function DisplayedItemContainer({children}) {
  return (
    <Container>
        {children}
    </Container>
  )
}
