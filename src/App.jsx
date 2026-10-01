import { organizationName, mainTitle, coursesData } from './data/coursesData';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import './index.css';
const App = () => {
  return (
    <div className="reference-home">
       <Header orgName={organizationName} />
      <main>
        <Hero title={mainTitle} orgName={organizationName} />
        <Courses courses={coursesData} />
      </main>
    </div>
  );
};

export default App;