const mongoose = require(&#39;mongoose&#39;);
const ItemSchema = new mongoose.Schema({
name: { type: String, required: true },
quantity: { type: Number, required: true }
});
module.exports = mongoose.model(&#39;Item&#39;, ItemSchema);