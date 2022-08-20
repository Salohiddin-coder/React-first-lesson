import Moon from "../assets/images/Path.svg"
import "./header.css"

export const Header = () => {
  return (
    <div className="header-wrapper">
      <h1>Where in the world?</h1>
      <span className="header-span">
        <img src={Moon} width={15} height={14} /> Dark Mode
      </span>
    </div>)
  }