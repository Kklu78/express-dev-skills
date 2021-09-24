var express = require('express');
var router = express.Router();
const skillsController = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsController.index);
router.get('/new', skillsController.new);
router.get('/:id', skillsController.show);

router.post('/:id', skillsController.check);
router.post('/', skillsController.create);
router.delete('/:id', skillsController.delete);
router.post('/show/:id', skillsController.update);



module.exports = router;
