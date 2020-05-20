import React, {useState} from "react";
import LanguageSelector from "./languageSelector";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import mediaQuery from "styled-media-query";
import {Icon, Image, Menu, Segment, Sidebar} from 'semantic-ui-react'

const Header = ({children}) => {
  const [visible, setVisible] = useState(false);
  return <Sidebar.Pushable style={{height: "100%"}}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible={visible}
      width='thin'
    >
      <div style={{height: "100vh"}}>
        <Menu.Item as={Link} to="/">
          <Icon name='home'/>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/qa">
          <Icon name='question circle'/>
          Q&A
        </Menu.Item>
        <Menu.Item as="a" href="https://forms.gle/JaSEyM7JUm7jL6Lw5">
          <Icon name="edit"/>
          <FormattedMessage id="header.applicationForm"/>
        </Menu.Item>
      </div>
    </Sidebar>

    <Sidebar.Pusher>
      <div onClick={() => visible && setVisible(false)}>
        <Banner>
          <div className="ui container">
            <TableContainer>
              <Icon name="sidebar" style={{fontSize: "2rem", margin: "3vh 0 0 0"}}
                    onClick={() => setVisible(!visible)}/>
              <Items>
                <Link to="/qa"><Black><FormattedMessage id="header.q&a"/></Black></Link>
                <a href="https://forms.gle/JaSEyM7JUm7jL6Lw5"><Black><FormattedMessage
                  id="header.applicationForm"/></Black></a>
                <div style={{marginTop: "-0.15vw"}}><LanguageSelector/></div>
              </Items>
            </TableContainer>
          </div>
        </Banner>
        <div>{children}</div>
      </div>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
};

const mediaMobile = mediaQuery.lessThan("medium");


const Banner = styled.div`
  background-image: url('/images/header/banner.png');
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: 20vw;
  margin-bottom: 5vh;
`;
const TableContainer = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  ${mediaMobile`
    min-height: 10vh;
    display: block;
    font-size:0.9rem;
  `}
  margin-bottom:1rem;
`;
const Title = styled.div`
  display: block;
  width: 100vw;
  ${mediaMobile`width: 100vw;`}
  margin-left: -2vw;
`;
const Black = styled.div`
  color: black;
  margin-right: 4vw;
`;

const Items = styled.div`
  margin-top: 3vh;
  display: flex;
  text-align: right;
  color: black;
  ${mediaMobile`justify-content:center;`}
`;
export default Header;
