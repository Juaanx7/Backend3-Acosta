import { Router } from 'express';
import userModel from '../dao/models/User.js';
import petModel from '../dao/models/Pet.js';
import { generateMockUsers, generateMockPets } from '../services/mockingUsers.js';

const router = Router();

router.get('/mockingusers', (req, res) => {
    const users = generateMockUsers(50);
    res.json(users);
});

router.post('/generateData', async (req, res) => {
    try {
        const { users, pets } = req.body;

        if (!users || !pets) {
            return res.status(400).json({ message: 'Se requieren los parámetros users y pets' });
        }

        const mockUsers = generateMockUsers(users);
        const mockPets = generateMockPets(pets);

        await userModel.insertMany(mockUsers);
        await petModel.insertMany(mockPets);

        res.json({ message: `Se insertaron ${users} usuarios y ${pets} mascotas correctamente.` });
    } catch (error) {
        res.status(500).json({ message: 'Error al generar datos', error: error.message });
    }
});

export default router;