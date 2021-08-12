import { useState , useEffect , useParam} from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const param = useParam()
    console.log(param)

    const [producto , setProducto] = useState([]);

    
    const productos = [
        {
            id : 1,
            nombre : "Remera",
            descripcion : "Remera corte en v, color violeta con el logo de Jarana",
            precio : 500,
            url : "https://saborstore.com/wp-content/uploads/2019/10/Remera-Violeta-S-Vintage-Amarillo-Frente.jpg",
            category : 1,
            stock : 6

        },{
            id: 2,
            nombre: "Buzo" ,
            descripcion: "Buzo con bolsillo canguro",
            precio: 800,
            url: "https://http2.mlstatic.com/D_NQ_NP_890315-MLA42931276756_072020-O.jpg",
            category : 1,
            stock : 4
        },{
            id: 3,
            nombre: "Mochila",
            descripcion: "Mochila mediada de color amarillo con tres bolsillo",
            precio: 1200,
            url : "http://d2r9epyceweg5n.cloudfront.net/stores/001/148/839/products/cool_gris_01-600x6001-97f3f23735bf2e4a2e15866547906348-640-0.jpg",
            category : 2,
            stock : 7
        },{
            id : 4,
            nombre : "Zapatillas",
            descripcion : "Zapatillas con plataforma",
            precio : 2000,
            url : "https://www.cronista.com/files/image/295/295924/5ffe0a66110c3.webp?oe=jpg",
            category : 3,
            stock : 4,
        },{
            id : 5,
            nombre : "Pantalon",
            descripcion : "Jean tiro alto slim fit",
            precio : 1000,
            url : "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/jean_celeste_localizado_bien_alto_y_chupin_hilo_azul_1583778284.jpeg?itok=tpm9q421",
            category : 1,
            stock : 8,

        },{
            id : 6,
            nombre : "Ojotas",
            descripcion : "Ojotas tipo chancleta",
            precio : 700,
            url : "https://http2.mlstatic.com/D_NQ_NP_902862-MLA43706134844_102020-W.jpg",
            category : 3,
            stock : 3,

        },{
            id : 7,
            nombre : "Gorra",
            descripcion : "Gorra simple color salmon",
            precio : 500,
            url : "https://i.ebayimg.com/images/g/P1QAAOSwi7BdF75y/s-l300.jpg",
            category : 2,
            stock : 9,

        },{
            id : 8,
            nombre : "Cinturon",
            descripcion : "Cinturon rojo",
            precio : 400,
            url : "https://previews.123rf.com/images/vvoennyy/vvoennyy1604/vvoennyy160400251/55892856-cintur%C3%B3n-rojo-de-ancho-con-hebilla-de-lat%C3%B3n-aislado-en-el-fondo-blanco.jpg",
            category : 2,
            stock : 5,

        },{
            
            id : 9,
            nombre : "Remera",
            descripcion : "Remera escote en v",
            precio : 1000,
            url : "https://www.upp.com.uy/storage/images/large_7MZ.jpeg",
            category : 1,
            stock : 6,
        }
    ]
    useEffect (()=>{
        
    function getItems () {

        setTimeout(()=>{
            new Promise ((resolve) =>{
                resolve(productos.filter(obj=>obj.id == param.id))
            }).then(prod=>setProducto(prod))
        },2000)
    }

    getItems();

    }, [])


    console.log(producto)

    return (
        <div className="productos">
           {   producto.map(obj=>
               <ItemDetail data={obj}/> )} 
        </div>
    );
}

export default ItemDetailContainer