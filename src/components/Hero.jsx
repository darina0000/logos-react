const Hero = ({ title, orgName }) => {
  return (
    <section className="ref-hero">
      <div className="ref-container">
        <div className="ref-hero__inner">
          <div className="ref-hero__content">
            <h1>{title}</h1>
            
            <div className="ref-features">
              <div className="ref-feature ref-feature--score">
                <strong>Готовим на баллы 80+</strong>
              </div>
              
              <div className="ref-feature ref-feature--online">
                <strong>Подготовка очно и онлайн</strong>
              </div>
              
              <div className="ref-feature ref-feature--experience">
                <strong>Более 10 лет опыта</strong>
              </div>
              
              <div className="ref-feature ref-feature--license">
                <strong>Лицензионные программы</strong>
              </div>
            </div>
            
            <div className="ref-hero__bottom">
              <p>
                {orgName} приглашает на курсы ЦТ по всем предметам. 
                Подготовка с гарантией 20+ баллов к вашему результату.
              </p>
              <button className="ref-button ref-button--green">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;