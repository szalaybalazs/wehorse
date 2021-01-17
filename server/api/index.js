const router = require('express').Router();
const database = require('../database');

/**
 * GET request
 * Returns the complete list of courses
 * EG: http://localhost:9999/api/courses
 * Parses "wishlisted" optional query paramenter and filters the list according to it
 * EG: http://localhost:9999/api/courses?wishlisted=true
 */
router.get('/courses', (req, res) => res.json(database.getCourses(req.query.wishlisted === 'true' || null)));

/**
 * POST request
 * Request body: { course: ID, wishlisted: Boolean }
 * Updates the course's wishlist status
 * Returns the updated course object
*/
router.post('/wishlist', (req, res) => {
  const { course: courseId, wishlist } = req.body;
  if (typeof(courseId) === 'undefined' || typeof(wishlist) !== 'boolean') return res.status(400).json({ message: 'Missing fields', error: true });

  const course = database.updateCourse(courseId, { wishListFlag: wishlist });
  if (!course) return res.status(404).json({ message: 'Course not found', error: true });
  res.json(course);
})

module.exports = router;
