export type Clothes ={
    id: string,
    name: string,
    category: string,
    image: any,
    venta: boolean,
    precio?: number,
    talla: string
}

export const clothes: Clothes[] = [
    {
        id: '1',
        name: 'Camisa negra',
        category: 'Camisas',
        image: require('../../assets/camisa1.jpg'),
        venta: true,
        precio: 100,
        talla: 'm'
    },
    {
        id: '2',
        name: 'Camisa blanaca',
        category: 'Camisas',
        image: require('../../assets/camisa3.jpg'),
        venta: false,
        talla: 's'
    },
    {
        id: '3',
        name: 'Botas',
        category: 'Calzado',
        image: require('../../assets/zapatos.jpg'),
        venta: true,
        precio: 500,
        talla: '8'
    },
    {
        id: '4',
        name: 'Camisa blanaca',
        category: 'Camisas',
        image: require('../../assets/camisa2.jpg'),
        venta: false,
        talla: 's'
    },
];