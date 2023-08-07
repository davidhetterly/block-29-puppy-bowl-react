import { Link } from "react-router-dom";


export default function NavBar() {
    return (
    <nav className="navbar">
      <div className="navbar-logo">Puppy Bowl 2023</div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li>
          <Link to="/players" className="navbar-link">All Players</Link>
        </li>
        <li>
          <Link to="/newPlayer" className="navbar-link">Add Player</Link>
        </li>
      </ul>
    </nav>
  );
}