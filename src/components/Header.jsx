const Header = ({ orgName }) => {
  return (
    <header className="ref-header">
      <div className="ref-container">
        <div className="ref-header__inner">
          <div className="ref-logo">
            <span>{orgName}</span>
          </div>
          
          <nav className="ref-nav">
            <a href="#about">О центре</a>
            <a href="#courses">Курсы</a>
            <a href="#teachers">Преподаватели</a>
            <a href="#results">Результаты</a>
            <a href="contacts.html">Контакты</a>
          </nav>
          
          <div className="ref-header__tools">
            <a href="login.html" className="ref-account">
              <span>Кабинет</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;