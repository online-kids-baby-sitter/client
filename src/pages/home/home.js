import React from "react";
import Header from "../../components/header/header";
import {FormattedMessage} from "react-intl";
import styled from "styled-components";
import Footer from "../../components/footer/footer";
import Slider from "react-slick"
import mediaQuery from "styled-media-query";
import Iframe from "react-iframe"
import YouTube from 'react-youtube';
import {useMediaQuery} from "react-responsive";


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    swipeToSlide: true
  };
  const isMobile = useMediaQuery({query: '(max-device-width: 768px)'});

  return (
    <div>
      <Header>
        <div className="ui container">
          <h1 className="ui header"><FormattedMessage id="home.fly"/></h1>
          <Driver/>
          <h2 className="ui header"><FormattedMessage id="home.aboutUs"/></h2>
          <div>
            <FormattedMessage id="home.aboutUsDescription1"/><br/>
            <FormattedMessage id="home.aboutUsDescription2"/><br/>
            <FormattedMessage id="home.aboutUsDescription3"/>
          </div>
          <div className="ui stackable grid">
            <Row className="ui row">
              <div className="eight wide column">
                <img className="ui image" alt="members" src="images/top/members.jpg"/>
              </div>
              <div className="eight wide column">
                <h2 className="ui header" style={{marginTop: "3vh"}}><FormattedMessage id="home.merit"/></h2>
                <ul className="ui list" style={{margin: "5vh 0 3vh 2vw"}}>
                  <li><FormattedMessage id="home.merit1"/></li>
                  <li><FormattedMessage id="home.merit2"/></li>
                  <li><FormattedMessage id="home.merit3"/></li>
                  <li><FormattedMessage id="home.merit4"/></li>
                </ul>
                <FormattedMessage id="home.meritDescription1"/><br/>
                <FormattedMessage id="home.meritDescription2"/>
              </div>
            </Row>
          </div>
          <div style={{margin: "2vh 0 2vh 0"}}>
            <FormattedMessage id="home.helpMother1"/><br/>
            <FormattedMessage id="home.helpMother2"/><br/>
            <FormattedMessage id="home.helpMother3"/>
          </div>
          <div className="ui stackable grid" style={{margin: "2vh 3vw 2vh 3vw"}}>
            <div className="eight wide column">
              <div className="ui stackable grid">
                <div className="eight wide column">
                  <img alt="price" src="images/top/money.png"/>
                </div>
                <div className="eight wide column">
                  <h3 className="ui header"><FormattedMessage id="home.price"/></h3>
                  <div style={{marginTop: "3vh"}}><FormattedMessage id="home.priceDescription"/></div>
                </div>
              </div>
            </div>
            <div className="eight wide column">
              <div className="ui stackable grid">
                <div className="eight wide column">
                  <img alt="price" src="images/top/time.png"/>
                </div>
                <div className="eight wide column">
                  <h3 className="ui header"><FormattedMessage id="home.time"/></h3>
                  <div style={{marginTop: "3vh"}}>
                    <FormattedMessage id="home.timeDescription1"/><br/>
                    <FormattedMessage id="home.timeDescription2"/><br/>
                    <FormattedMessage id="home.timeDescription3"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ui centered grid" style={{margin: "10vh 0 3vh 0"}}>
            <a className="ui primary massive button" href="https://community.camp-fire.jp/projects/view/296398"
               style={{width: "40vw", backgroundColor: "#897657"}}><FormattedMessage id="header.applicationForm"/></a>
          </div>
          <Driver/>
          <h2 className="ui header"><FormattedMessage id="home.schedule"/></h2>
          <div style={{margin: "3vh 0 3vh 0"}}><FormattedMessage id="home.scheduleDescription"/></div>
          <Iframe
            url="https://calendar.google.com/calendar/embed?src=as560lc4bt0hkl1i2552fk5aak%40group.calendar.google.com&ctz=Asia%2FTokyo"
            width="100%"
            height="700"
            allowFullScreen
            sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox"
          />
          <Driver/>
          <div className="stackable ui grid">
            <div className="seven wide column">
              <h2 className="ui header"><FormattedMessage id="home.someday"/></h2>
            </div>
            <div className="nine wide column">
              <YouTube videoId="Fn-XXMoJXeU" opts={{width: isMobile ? "300" : "600"}}/>
            </div>
          </div>
          <h2 className="ui header"><FormattedMessage id="home.contents"/></h2>
          <div className="stackable ui grid" style={{margin: "3vh 0 3vh 0"}}>
            <div className="eight wide column">
              <FormattedMessage id="home.contentsDescription1"/><br/>
              <FormattedMessage id="home.contentsDescription2"/><br/>
              <img className="ui image" alt="family" src="images/top/family.png"/>
            </div>
            <div className="eight wide column">
              <FormattedMessage id="home.everyday"/><br/>
              <FormattedMessage id="home.everydayContents"/><br/>
              <br/>
              <FormattedMessage id="home.daily"/><br/>
              <FormattedMessage id="home.monday"/><br/>
              <FormattedMessage id="home.tuesday"/><br/>
              <FormattedMessage id="home.wednesday"/><br/>
              <FormattedMessage id="home.thursday"/><br/>
              <FormattedMessage id="home.friday"/><br/>
              <br/>
              <FormattedMessage id="home.everyMonth"/><br/>
              <FormattedMessage id="home.gathering"/><br/>
              <br/>
              <FormattedMessage id="home.bimonthly"/><br/>
              <FormattedMessage id="home.sendLetter"/>
              <br/>
              <br/>
              <FormattedMessage id="home.many2many"/>
            </div>
          </div>
          <Driver/>
          <h2 className="ui header"><FormattedMessage id="home.customersVoice"/></h2>
          <div style={{margin: "0 0 5vh 0", display: !isMobile && "flex", justifyContent: !isMobile && "center"}}>
            <Slider {...settings} style={{width: !isMobile && "60vw"}}>
              {range(6).map(n => ++n).map(index =>
                (<Voices key={index}>
                  <Message><FormattedMessage id={`home.customerMessage${index}`}/></Message>
                </Voices>))}
            </Slider>
          </div>
          <Driver/>
          <div>
            <h2 className="ui header"><FormattedMessage id="home.mamaList"/></h2>
            <div className="ui cards" style={{justifyContent: "center"}}>
              {range(9).map(index => (
                <div className="card" key={index}>
                  <div className="image">
                    <img src={`images/members/mama${index}.jpg`}/>
                  </div>
                  <div className="content">
                    <div className="header">
                      <FormattedMessage id={`mamas.${index}.name`}/>
                    </div>
                    <div className="description">
                      <FormattedMessage id={`mamas.${index}.description`}/>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="ui centered grid" style={{margin: "10vh 0 3vh 0"}}>
            <a className="ui primary massive button" href="https://community.camp-fire.jp/projects/view/296398"
               style={{width: "40vw", backgroundColor: "#897657"}}><FormattedMessage id="header.applicationForm"/></a>
          </div>
          <Driver/>
          <div className="ui stackable grid" style={{margin: "0 0 5vh 0"}}>
            <div className="three wide column">
              <h2 className="ui header"><FormattedMessage id="home.organizer"/></h2>
            </div>
            <div className="six wide column">
              <div className="ui image">
                <img src={`images/members/UC.jpg`}/>
              </div>
              <div className="content">
                <div className="header">
                  <FormattedMessage id={`home.UCName`}/>
                </div>
                <div className="description">
                  <FormattedMessage id={`home.UCDescription1`}/><br/>
                  <FormattedMessage id={`home.UCDescription2`}/>
                </div>
              </div>
            </div>
            <div className="six wide column">
              <div className="ui image">
                <img src={`images/members/mio.jpg`}/>
              </div>
              <div className="content">
                <div className="header">
                  <FormattedMessage id={`home.MIOName`}/>
                </div>
                <div className="description">
                  <FormattedMessage id={`home.MIODescription1`}/><br/>
                  <FormattedMessage id={`home.MIODescription2`}/><br/>
                  <FormattedMessage id={`home.MIODescription3`}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <Footer/>
    </div>
  )
};

const range = length => [...Array(length).keys()]

const mediaMobile = mediaQuery.lessThan("medium");

const Driver = styled.div`
border:1px solid rgba(34,36,38,.15);
margin: 5vh 0 5vh 0;
`;

const Row = styled.div`
margin-top: 5vh;
`;

const Voices = styled.div`
  color: #2C3882;
  text-align: center;
`;
const Message = styled.div`
  text-align: left;
  font-size: 1.5rem;
  line-height: normal;
  margin-bottom: 4vh;
`;
const Name = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1vh;
`;
export default Home;
