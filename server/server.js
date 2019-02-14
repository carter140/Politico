import express from 'express';
import routers from './routes/route';
import joiErrors from './middlewares/joiErrors';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routers);

// use celebrate middleware to handle joi errors
app.use(joiErrors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});

export default app;
