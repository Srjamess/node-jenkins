const { Router } = require('express')
const {getEtapa,createEtapa,updateEtapaByID} =
 require('../controllers/etapa')

const router = Router()

// crear
router.post('/', createEtapa)

// consultar todos
router.get('/', getEtapa)

// editar
router.put('/:id', updateEtapaByID)

module.exports = router;