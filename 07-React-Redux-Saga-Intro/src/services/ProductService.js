import product from "../components/Product.jsx";

export class ProductService {

     static products = [
        {
            id : 12,
            name : "MI Smart Watch",
            imageUrl : "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg",
            qty : 1,
            price : 12000
        },
        {
            id : 13,
            name : "Apple Smart Watch",
            imageUrl : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23591864/2024/6/24/53c8eab8-b988-4377-9455-3ede4fbcd77c1719227124685SpikyKidsCallingSOSGPSCameraEducationalMultifunctionSmartWat1.jpg",
            qty : 1,
            price : 16000
        },
        {
            id : 14,
            name : "Samsung Watch",
            imageUrl : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/23591864/2024/6/24/53c8eab8-b988-4377-9455-3ede4fbcd77c1719227124685SpikyKidsCallingSOSGPSCameraEducationalMultifunctionSmartWat1.jpg",
            qty : 1,
            price : 13000
        },
        {
            id : 15,
            name : "Vi Smart Watch",
            imageUrl : "https://images-cdn.ubuy.co.in/633b12488d2edc65997f4c20-smart-watch-bluetooth-smartwatch-touch.jpg",
            qty : 1,
            price : 17000
        },
        {
            id : 16,
            name : "Oppo Smart Watch",
            imageUrl : "https://m.media-amazon.com/images/I/71WoHCC996L._AC_UF1000,1000_QL80_.jpg",
            qty : 1,
            price : 11000
        }
    ]

    static getProducts(){
        return this.products;
    }
}