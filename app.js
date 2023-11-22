const express = require('express');

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
 response.status(200).json({
   message_en: 'Hello World from Docker!',
   message_es: 'Hola Mundo desde Docker!'
 });
});

app.listen(PORT, () => {
 console.log(`Server is up on localhost:${PORT}`);
});
