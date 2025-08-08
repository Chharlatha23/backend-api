const express = require(&#39;express&#39;);
const mongoose = require(&#39;mongoose&#39;);
const bodyParser = require(&#39;body-parser&#39;);
const cors = require(&#39;cors&#39;);
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(&#39;YOUR_ATLAS_CONNECTION_STRING&#39;, {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() =&gt; console.log(&quot;MongoDB Atlas Connected&quot;))
.catch(err =&gt; console.log(err));
const itemRoutes = require(&#39;./routes/itemRoutes&#39;);
app.use(&#39;/api/items&#39;, itemRoutes);
app.listen(5000, () =&gt; console.log(&quot;Server running on port 5000&quot;));