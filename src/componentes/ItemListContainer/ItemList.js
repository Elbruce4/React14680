import Item from "./Item"

const ItemList = ({data}) => {

    return (
        <ul className="productos">
            { data.map(obj =>
                <Item key={obj.id} data={obj}/>
            )}
        </ul>
    );
}

export default ItemList