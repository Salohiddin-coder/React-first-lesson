import "./card.css";

export const Card = ({img, name, population, region, capital}) => {
  return (
    <li className="card-item">
      <img src={img} width={267} height={160} />
      <h2>{name}</h2>
      <p><strong>Population:</strong> {population}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Capital:</strong> {capital}</p>
    </li>
  )
}