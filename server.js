const express = require('express');
const app = express();
const hikki = require('hikki-me')
const PORT = 2000;

app.get('/', async (req, res, next) => {
    res.status(200).json({
        result: {
            Mahkota: "/Crown?auth=",
            Plala1: "/Trophy1?auth=",
            Plala2: "/Trophy2?auth="
        }
    })
})

app.get('/Crown', async (req, res, next) => {
    const auth = req.query.auth;
    if (!auth) return res.json({ message: "Masukin Query Auth!" });
    const data = await hikki.stumble.Crown(auth);
    res.status(200).json({
        data
    })
})

app.get('/Trophy1', async (req, res, next) => {
    const auth = req.query.auth;
    if (!auth) return res.json({ message: "Masukin Query Auth!" });
    const data = await hikki.stumble.Trophy1(auth);
    res.status(200).json({
        data
    })
})

app.get('/Trophy2', async (req, res, next) => {
    const auth = req.query.auth;
    if (!auth) return res.json({ message: "Masukin Query Auth!" });
    const data = await hikki.stumble.Trophy2(auth);
    res.status(200).json({
        data
    })
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})