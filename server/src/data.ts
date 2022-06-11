type Product = {
  id: number;
  name: string;
  price: number;
  qtyStock: number;
};
export const data: Product[] = [
  {
    id: 16,
    name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
    price: 20.49,
    qtyStock: 158,
  },
  {
    id: 18,
    name: "BEBIDA ENERGÉTICA VIBE 2L",
    price: 8.99,
    qtyStock: 659,
  },
  {
    id: 19,
    name: "ENERGÉTICO RED BULL ENERGY DRINK 250ML",
    price: 7.29,
    qtyStock: 909,
  },
  {
    id: 20,
    name: "ENERGÉTICO RED BULL ENERGY DRINK 355ML",
    price: 10.79,
    qtyStock: 159,
  },
  {
    id: 22,
    name: "ENERGÉTICO RED BULL ENERGY DRINK SEM AÇÚCAR 250ML",
    price: 2.39,
    qtyStock: 659,
  },
  {
    id: 23,
    name: "ÁGUA MINERAL BONAFONT SEM GÁS 5L",
    price: 20.49,
    qtyStock: 909,
  },
  {
    id: 24,
    name: "FILME DE PVC WYDA 28CMX15M",
    price: 3.99,
    qtyStock: 160,
  },
];
type Order = {
  id: number;
  clientName: string;
  products: Array<Product>;
};
export const orders = [
  {
    id: 77,
    clientName: "Ana",
    date: new Date(),
    products: [
      {
        id: 22,
        name: "ENERGÉTICO RED BULL ENERGY DRINK SEM AÇÚCAR 250ML",
        price: 2.39,
        qty: 2,
      },
      {
        id: 23,
        name: "ÁGUA MINERAL BONAFONT SEM GÁS 5L",
        price: 20.49,
        qty: 3,
      },
      {
        id: 24,
        name: "FILME DE PVC WYDA 28CMX15M",
        price: 3.99,
        qty: 1,
      },
    ],
  },
  {
    id: 78,
    clientName: "Carolina",
    date: new Date(),
    products: [
      {
        id: 16,
        name: "AZEITE  PORTUGUÊS EXTRA VIRGEM GALLO 500ML",
        price: 20.49,
        qty: 2,
      },
      {
        id: 18,
        name: "BEBIDA ENERGÉTICA VIBE 2L",
        price: 8.99,
        qty: 4,
      },
    ],
  },
];
