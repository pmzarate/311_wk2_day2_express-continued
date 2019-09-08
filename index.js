const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 4001;

const commentRoutes = require('./routes/comments_Routes');
const contactRoutes = require('./routes/contacts_Routes');
const vehicleRoutes = require('./routes/vehicles_Routes');
const productsRoutes = require('./routes/products_Routes');


app.use("/", express.static('public'));
app.use(bodyParser.json());
app.use(commentRoutes);
app.use(contactRoutes);
app.use(vehicleRoutes);
app.use(productsRoutes);

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
