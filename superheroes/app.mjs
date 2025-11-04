import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

connectDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estaticos para CSS/JS del frontend
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', superHeroRoutes);

app.use((req, res) => {
    res.status(404).send({ mensaje: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});