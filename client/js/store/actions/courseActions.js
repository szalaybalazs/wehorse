import { FETCH_COURSES, WISHLIST, WISHLIST_FILTER } from './types';

/**
 * Load course list and update redux state
 * @param { boolean } wishlisted whether to show only wishlisted courses
 */
export const fetchCourses = (wishlisted = false) => async (dispatch) => {
  try {
    // Fetch course
    const res = await fetch(`/api/courses?wishlisted=${wishlisted}`);
    const courses = await res.json();

    // Update state only if the response is an array (othervice there were an error - Should be handled!)
    if (Array.isArray(courses)) dispatch({ type: FETCH_COURSES, payload: courses });
  } catch(error) {
    console.warn('Failed to load courses: ', error);
  }
}

/**
 * Toggle wishlist filter state
 * @param { boolean } isWishlisted Wishlist filter state
 */
export const filterWishlished = (isWishlisted = false) => async (dispatch) => dispatch({ type: WISHLIST_FILTER, payload: isWishlisted })

/**
 * Wishlist a course, update local and remote state
 * @param { int } courseId The id of the course
 * @param { boolean } isWishlisted The new wishlist state of the course
 */
export const wishlistCourse = (courseId, isWishlisted = false) => async (dispatch) => {
  dispatch({ type: WISHLIST, payload: { courseId, isWishlisted } });

  // Updating remote db
  try {
    const res = await fetch('/api/wishlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ course: courseId, wishlist: isWishlisted })
    });
  } catch (error) {
    console.warn('Failed to update remote database', error);
  }
}