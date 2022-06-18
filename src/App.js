import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import Logo from './components/Logo';
import DCB from './components/DCB';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection>
            <Logo />
          </FullpageSection>
          <FullpageSection>
            <DCB />
          </FullpageSection>
          <FullpageSection>
            <Projects />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default App;
