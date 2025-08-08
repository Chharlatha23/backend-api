const express = require(&#39;express&#39;);
const router = express.Router();
const Item = require(&#39;../models/Item&#39;);
// CREATE
router.post(&#39;/&#39;, async (req, res) =&gt; {
try {
const newItem = new Item(req.body);
await newItem.save();
res.status(201).json(newItem);
} catch (err) {
res.status(400).json({ message: err.message });
}
});
// READ ALL
router.get(&#39;/&#39;, async (req, res) =&gt; {

try {
const items = await Item.find();
res.json(items);
} catch (err) {
res.status(500).json({ message: err.message });
}
});
// UPDATE
router.put(&#39;/:id&#39;, async (req, res) =&gt; {
try {
const updatedItem = await Item.findByIdAndUpdate(req.params.id,
req.body, { new: true });
res.json(updatedItem);
} catch (err) {
res.status(400).json({ message: err.message });
}
});
// DELETE
router.delete(&#39;/:id&#39;, async (req, res) =&gt; {
try {
await Item.findByIdAndDelete(req.params.id);
res.json({ message: &#39;Item deleted&#39; });
} catch (err) {
res.status(500).json({ message: err.message });
}
});
module.exports = router;