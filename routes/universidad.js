const { Router } = require('express')
const {  
    createUnivesidad, 
    getUniversidad,
    updateUniversidadByID } =
 require('../controllers/universidad')

const router = Router()

// crear
router.post('/', createUnivesidad)

// consultar todos
router.get('/', getUniversidad)

// editar
router.put('/:id', updateUniversidadByID)

module.exports = router;