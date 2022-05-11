const express = require ('express');
const app = express();
const housesAvailableForSaleRouter = require ('./routes/housesAvailableForSalerouter.js');

const PORT = 7700

app.use(express.json());
app.use('/houses', housesAvailableForSaleRouter);



app.listen(PORT, () => console.log(`App is running on port: ${PORT}`))


