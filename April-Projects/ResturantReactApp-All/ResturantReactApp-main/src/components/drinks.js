import './fooditem.css'

function Drinks (props) {
    return(
        <div className='main-food-item'>
            <div className='food-items'>
                <span className='item-padding drinks'>{props.dType}</span>
                <strong>{props.dName}</strong>                
            </div>
            
            <button className='food-items'>{props.dPrice}</button>
        </div>
    );
}
export default Drinks;