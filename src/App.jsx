import { organizationName, mainTitle, coursesData } from './data/coursesData';

const App = () => {
  return (
    <div className="reference-home">
      <h1>{mainTitle}</h1>
      <h2>{organizationName}</h2>
      <p>Количество курсов: {coursesData.length}</p>
      <ul>
        {coursesData.map((course) => (
          <li key={course.id}>
            {course.title} — {course.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;