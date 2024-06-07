import React from "react";
import { bgColorPrimary, neutral,typeScale } from "../utils";
import styled from "styled-components";
import { contacts, content, projects } from '../assets/data/data';
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: start;
  gap:1rem;
  padding: 1rem;
  background-color: ${neutral[300]};
  box-shadow: 0 0 2px ${neutral[600]};
  width: 100%;
  margin-bottom: 5px;
  & > *{
    flex: 1;
  } 
`;

const Container = styled.div`
  display: flex; 
  justify-content: space-between;
  flex-direction: ${props => props.direction || "row"}; 
  text-align: left;
  & > * {
    flex : 1;
  }
`;

const FooterAppName = styled.h1`
  font-size: ${typeScale["header1"]};
`;

const FooterAppParag = styled.p`
  font-size: ${typeScale["paragraph"]};
  margin: 10px 0;
`;


const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: ${props => props.direction || "row"};
`;

const ListItem = styled(Link)` 
  font-size: ${typeScale["paragraph"]};
  margin-bottom: 15px;
  color: ${neutral[600]};
  text-decoration: none;
  cursor: pointer;
  transition: 0.15s;
  &:hover {
    color: ${bgColorPrimary[100]}; 
    font-weight: 600;
  }
`;

const ListName = styled.h3`
  font-size: ${typeScale["header3"]};
`;

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Footer() {

  const projectList = projects.length > 0 && projects.map(project => <ListItem to={project.link} key={project.id} target="_blank" rel="noopener noreferrer">{project.name}</ListItem>);
  const constactList = contacts.length > 0 && contacts.map(contact=> <ListItem to={contact.link} key={contact.id} target="_blank" rel="noopener noreferrer">{contact.name}</ListItem>);
  const contentList = content.length > 0 && content.map(content => <ListItem to={content.link} key={content.id} target={content.type === "internal" ? "_self" : "_blank" } rel="noopener noreferrer">{content.name}</ListItem>);
  
  return (
    <FooterContainer>
      <Container direction="column">  
        <FooterAppName>Mouhcine's Hub</FooterAppName>
        <FooterAppParag>Software engineer, entrepreneur and content creator</FooterAppParag>
        <FooterAppParag>Morocco, flag</FooterAppParag>
      </Container>
      <Container>
        <ContainerList>
          <ListName>Projects</ListName>
          <List direction="column">{projectList}</List>
        </ContainerList> 
        <ContainerList>
          <ListName>Contacts</ListName>
          <List direction="column">{constactList}</List>
        </ContainerList> 
        <ContainerList>
          <ListName>Content</ListName>
          <List direction="column">{contentList}</List>
        </ContainerList> 
      </Container>
    </FooterContainer>
  );
}
