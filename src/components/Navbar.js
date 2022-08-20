import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar-wrapper">
        <input className="navbar-input" type='text' placeholder="Search for a country…"/>
        <select className="navbar-selection">
          <option >Filter by Region</option>
        </select>
      </div>
    </div>
    )
  }