import app from "./app.js";
import cors from "cors"
app.use(cors())
app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP server running!");
  });
  