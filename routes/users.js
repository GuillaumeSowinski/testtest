const express = require('express');
const router = express.Router();


router.post('/',(req, res) => {
    res.post("Envoie de l'utilisateur")
})

module.exports = router;