import styled from "styled-components";
import { bgColorPrimary, neutral } from "../../utils";

 const TopSectionSearchContainer = styled.div`
  display: flex;
  /* padding: 5px; */
`;

 const TopSectionSearchinput = styled.input`
  outline: none;
  border: none;
  background: ${neutral[300]};
  width: 70%;
  padding: 10px 15px;
  border-radius: 10px;
`;

 const TopSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    flex: 1;
  }
`;

 const TopSectionBtns = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

 const TopSectionIcon = styled.i`
  width: 10%;
  background: ${bgColorPrimary[100]};
  padding: 4px;
  text-align: center;
  color: ${neutral[100]};
  cursor: pointer;
  padding: 10px;
`;

export default function TopSection({changeDisplayDataMode, addHandler}) {
  return (
    <TopSectionContainer>
      <TopSectionSearchContainer>
        <TopSectionSearchinput type="text" placeholder="Search..." />
      </TopSectionSearchContainer>
      <TopSectionBtns>
        <TopSectionIcon
          className="fas fa-th"
          name="table"
          onClick={changeDisplayDataMode}
        />
        <TopSectionIcon
          className="fas fa-list"
          name="list"
          onClick={changeDisplayDataMode}
        />
        <TopSectionIcon className="fas fa-plus" onClick={addHandler} />
      </TopSectionBtns>
    </TopSectionContainer>
  );
}
