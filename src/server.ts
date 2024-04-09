import app from './app';
import * as http from "http";
const PORT = 51527;
http.createServer(app).listen(PORT, () => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    
    console.log('Express server listening on port ' + PORT);
    console.log("Server running at http://127.0.0.1:/",PORT);
})