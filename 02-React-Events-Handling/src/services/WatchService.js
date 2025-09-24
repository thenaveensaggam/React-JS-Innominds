export class WatchService{

    static watches = [
        {
            id: "AA001",
            imageUrl: "https://m.media-amazon.com/images/I/81aEolfpwvS._UL1500_.jpg",
            name: "Rolex Watch",
            price: 1800,
            qty: 2
        },
        {
            id: "AA002",
            imageUrl: "https://m.media-amazon.com/images/I/81i0qbDldBL._AC_UY1000_.jpg",
            name: "Apple Watch",
            price: 1400,
            qty: 2
        },
        {
            id: "AA003",
            imageUrl: "http://sc04.alicdn.com/kf/H6043bced77e3440f87c8e2dba150d7eeK.jpg",
            name: "Oppo Watch",
            price: 1500,
            qty: 2
        },
        {
            id: "AA004",
            imageUrl: "https://m.media-amazon.com/images/I/711RyF1yTqL._UX342_.jpg",
            name: "Lenovo Watch",
            price: 1600,
            qty: 2
        },
        {
            id: "AA005",
            imageUrl: "https://img.joomcdn.net/8beb62536e2162f03441a1fbd89adc2028bab422_original.jpeg",
            name: "Mi Watch",
            price: 1700,
            qty: 2
        }
    ];

    static getAllWatches(){
        return this.watches;
    }
}