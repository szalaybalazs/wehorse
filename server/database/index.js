const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const MOCK_COURSELIST = require('./mock');

// Using a local, JSON based db at the moment
// this could be created in any scalable database as well (MongoDB, DynamoDB or MySQL)
const adapter = new FileSync('db.json');
const db = low(adapter);

// Setting default database content
db.defaults({ courses: MOCK_COURSELIST }).write();

/**
 * Get every course in the database
 * @param {Boolean} isWishlisted Whether to filter courses based on wishlist. Returns everything if not defined or null
 */
const _handleCourses = (isWishlisted = null) => db.get('courses').filter(course => (typeof(isWishlisted) === 'boolean') ? course.wishListFlag === isWishlisted : true);

/**
 * Update a specific course in the datavase
 * @param {number} courseId Id of the course
 * @param {*} update The differential of the course, whish will be updated
 */
const _handleCourseUpdate = (courseId = null, update = {}) => {
  const course = db.get('courses').find({ courseId }).assign(update).value();
  db.write();
  return typeof(course.courseId) === 'undefined' ? null : course;
}

// Export database methods
module.exports = {
  getCourses: _handleCourses,
  updateCourse: _handleCourseUpdate,
}