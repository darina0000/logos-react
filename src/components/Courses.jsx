const Courses = ({ courses }) => {
  return (
    <section className="ref-courses">
      <div className="ref-container">
        <h2>Форматы обучения в Центре</h2>
        
        <div className="ref-courses__grid">
          <div className="ref-course-list">
            {courses.map((course) => (
              <article key={course.id}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <strong>{course.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;