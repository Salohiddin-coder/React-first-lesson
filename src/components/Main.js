import "./main.css"
import { Card } from "./Card"
import AfghanistanFlag from "../assets/images/afghanistan.png"
import AlandIslandFlag from "../assets/images/aland-island.png"
import AlbaniaFlag from "../assets/images/albania.png"
import AlgeriaFlag from "../assets/images/algeria.png"
import BrazilFlag from "../assets/images/brazil.png"
import GermanyFlag from "../assets/images/germany.png"
import IcelandFlag from "../assets/images/iceland.png"
import USAFlag from "../assets/images/usa.png"

export const Main = () => {
  return (
    <div className="main-section">
      <div className="main-wrapper">
        <ul className="list">
          <Card name='Germany' population='81,770,900' region='Europe' capital='Berlin' img={GermanyFlag}/>
          <Card name='United States of America' population='323,947,000' region='Americas' capital='Washington, D.C.' img={USAFlag}/>
          <Card name='Brazil' population='206,135,893' region='Americas' capital='Brasília' img={BrazilFlag}/>
          <Card name='Iceland' population='334,300' region='Europe' capital='Reykjavík' img={IcelandFlag}/>
          <Card name='Afghanistan' population='27,657,145' region='Asia' capital='Kabul' img={AfghanistanFlag}/>
          <Card name='Åland Islands' population='28,875' region='Europe' capital='Mariehamn' img={AlandIslandFlag}/>
          <Card name='Albania' population='2,886,026' region='Europe' capital='Tirana' img={AlbaniaFlag}/>
          <Card name='Algeria' population='40,400,000' region='Africa' capital='Algiers' img={AlgeriaFlag}/>
        </ul>
      </div>
    </div>
  )
}