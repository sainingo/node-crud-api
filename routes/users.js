import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('ROUTES')
});

export default router;