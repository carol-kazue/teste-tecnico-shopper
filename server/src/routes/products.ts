// import { Request, Response } from "express";
// import { data } from "../data";
// import { app } from "../index";

// app.get("/products", (req: Request, res: Response) => {
//   res.send(data);
// });

// app.put("/products/:id/edit", (req: Request, res: Response) => {
//   try {
//     const id = Number(req.params.id);
//     const qty = req.body.qty;
//     const chageProduct = data.map((product) => {
//       if (id === product.id) {
//         product.qtyStock = product.qtyStock - qty;
//       }
//       return product;
//     });
//     res.send(chageProduct);
//   } catch (error: any) {
//     res.end(error.message);
//   }
// });
