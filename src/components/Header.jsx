function Header({ remaining, completed }) {
  return (
    <header className="header">
      <h1>Personal Task Manager</h1>
      <p className="counts">
        <span>{remaining} remaining</span> | <span>{completed} completed</span>
      </p>
    </header>
  );
}

export default Header;
