const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const listingsRouter = require('./listings.js');
const bookingsRouter = require('./bookings.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/listings', listingsRouter);
router.use('/bookings', bookingsRouter);

// // test api connection to front end
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;