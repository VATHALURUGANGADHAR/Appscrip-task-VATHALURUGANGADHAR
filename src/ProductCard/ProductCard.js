import './productCard.css'
const ProductCard = (props) => {
    const { image, title} = props
    const desc = title.substr(0, 15)
    console.log(image)
    return (
            <li className='displayContainer'>
            <img src = {image} alt = {title} className='imagealtr' />
            <h1 className='description'>{desc}...</h1>
            <p className='para'><span className='style'>Sign in </span> or Create an account to see pricing</p>
        </li>


    )
}
export default ProductCard