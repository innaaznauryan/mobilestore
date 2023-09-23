import Rating from "./Rating"

const PhoneComponent = ({id, brand, image, model, price, quantity, year}) => {
return (
<>
    <h4>{brand}</h4>
    <h2>{model}</h2>
    <img src={`/Phones_Data_Storage/images/${brand}/${image}`} alt="phone" />
    <div className="bottom">
        <p className="year">Model year: {year}</p>
        <p>Price: {price} ֏</p>
        <Rating id={id}/>
    </div>
</>
)
}

export default PhoneComponent