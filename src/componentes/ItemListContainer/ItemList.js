import Item from "./Item"

const ItemList = ({data}) => {

    console.log(data)

    return (
        <ul className="productos">
            { data.map(obj =>
                <Item data={obj}/>
            )}
            
        </ul>
    );
}

export default ItemList