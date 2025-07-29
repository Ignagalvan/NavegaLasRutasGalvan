export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
};

const products: Product[] = [
    {
        id: '1',
        name: 'Camiseta React',
        description: 'Camiseta con logo de React. Ideal para devs.',
        price: 5000,
        category: 'ropa',
        image: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', // React logo
    },
    {
        id: '2',
        name: 'Taza JS',
        description: 'Taza con diseño JavaScript. Café potenciado.',
        price: 3000,
        category: 'accesorios',
        image: 'https://cdn-icons-png.flaticon.com/512/919/919828.png', // JS logo
    },
    {
        id: '3',
        name: 'Gorra Vite',
        description: 'Gorra con el logo de Vite. Ligera y rápida.',
        price: 4500,
        category: 'ropa',
        image: 'https://vitejs.dev/logo.svg', // Vite logo
    },
    {
        id: '4',
        name: 'Mousepad Dev',
        description: 'Mousepad XL para escritorio de programador.',
        price: 3500,
        category: 'accesorios',
        image: 'https://cdn-icons-png.flaticon.com/512/732/732212.png', // Código símbolo
    },
];


export const getProducts = (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 1000);
    });
};

export const getProductById = (id: string): Promise<Product | undefined> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find((p) => p.id === id);
            resolve(product);
        }, 1000);
    });
};

export const getProductsByCategory = (category: string): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtered = products.filter((p) => p.category === category);
            resolve(filtered);
        }, 1000);
    });
};
