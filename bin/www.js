// Import of the Express application instance
import app from '../app.js';

// Identification of the port to listen on
const port = process.env.PORT || 3000;

// Localhost to listen on
app.listen(port, () => console.log(`Server is running and Listening on: http//localhost:${port}`));
