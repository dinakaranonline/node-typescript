import express, { Request, Response, NextFunction } from "express";

import { json } from "body-parser";

import toDoRoutes from "./routes/todo";

const app = express();

app.use("/todos", toDoRoutes);

//commit testing
app.use(json());

app.use(
  (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

app.listen(3000);
