const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/') {
        res.writeHead(200);
        res.end( 'Bienvenue sur notre serveur Node.j !');
    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end('Voici la page à propos.');
    } else if (req.url === '/contact') {
        res.writeHead(200);
        res.end('Contactez-nous à contact@monserveur.com.');
    } 
      else if (req.url === '/autre') {
        res.writeHead(404);
        res.end('404 - Page non trouvée');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
