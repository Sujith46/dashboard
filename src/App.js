import Container from './components/Container/Container';
import Drawer from './components/Drawer/Drawer';
import ContentContainer from './components/Container/ContentContainer/ContentContainer';
import NavBar from './components/NavBar/NavBar';
import OverviewContainer from './components/Container/OverviewContainer/OverviewContainer';
import Statistics from './components/Statistics/Statistics';
import Sales from './components/Sales/Sales';
import Referrer from './components/Referrer/Referrer';
import Profile from './components/Profile/Profile';
import Video from './components/Video/Video';

import './App.scss';

function App() {
  return (
    <Container>
      <Drawer/>
      <ContentContainer>
        <NavBar/>
        <OverviewContainer>
          <div className="HeaderContainer">
            <h2 className="Overview--heading">Overview</h2>
            <button className="Button">Add funds<span className="Button__Icon"></span></button>
          </div>
          <div className="BoxesContainer">
            <div className="BoxesContainer__Left">
              <div className="ChartsContainer">
                <Statistics />
                <Sales />
              </div>
              <div className="TableContainer">
                <Referrer />
              </div>
            </div>
            <div className="BoxesContainer__Right">
              <Profile />
              <Video />
            </div>
          </div>
        </OverviewContainer>
      </ContentContainer>
    </Container>
  );
}

export default App;
