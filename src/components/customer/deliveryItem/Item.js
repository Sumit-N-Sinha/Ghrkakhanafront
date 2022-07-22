import './DeliveryItem.css';
function Item(props){
  return (
    <>
    <div>
      <div className="delivery-item-cover">
        <img src={props.cover} className="delivery-item-image" alt={props.title}/>
      </div>
      <div className="delivery-item-title">{props.title}</div>
    </div>
    </>
  );
}
export default Item;