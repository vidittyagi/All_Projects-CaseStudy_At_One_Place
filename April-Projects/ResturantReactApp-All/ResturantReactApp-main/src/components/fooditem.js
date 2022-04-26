import './fooditem.css'

function Fooditems (props){
    return (
        <div className='main-food-item'>
            <div className='food-items'>
                <span className='item-padding veg'>{props.dishType}</span>
                <strong>{props.dishName}</strong>
                
            </div>            
            <button className='food-items'>{props.dishPrice}</button>
        </div>
    );
}
export default Fooditems;