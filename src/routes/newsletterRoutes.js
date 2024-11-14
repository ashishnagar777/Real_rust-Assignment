const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

router.get('/', newsletterController.getSubscriptions);
router.post('/', newsletterController.addSubscription );

module.exports = router;
