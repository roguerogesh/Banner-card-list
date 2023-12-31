// Write your code here.
import './index.css'
const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li>
      <h1 className="heading">{headerText}</h1>
      <p className="description">{description}</p>
      <button className="button">Show More</button>
    </li>
  )
}

export default BannerCardItem
