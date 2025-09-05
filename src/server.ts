import { connectDB } from "./config/db"; 
import app from "./app"; 
const PORT = process.env.PORT; 
(async () => { 
  try { 
    await connectDB(); 
    app.listen(PORT, () => { 
      console.log(`🚀 Server running on http://localhost:${PORT}`); 
    }); 
  } 
  catch (err) 
  { 
    console.error("Failed to start server:", err);
     process.exit(1); 
    } 
  })();
