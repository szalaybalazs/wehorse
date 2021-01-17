import { FETCH_COURSES, WISHLIST, WISHLIST_FILTER } from '../actions/types';

// The initial redux state
const initialState = {
  courseList: [],
  wishlistFilter: false,
};

// Create reducer object
// (Syntacticaly better than the switch statement, still should be split to multiple files)
const reducers = {
  [FETCH_COURSES]: (state, action) => ({ ...state, courseList: action.payload }),
  [WISHLIST_FILTER]: (state, action) => ({ ...state, wishlistFilter: action.payload }),
  [WISHLIST]: (state, action) => {
    // Copy the course ist
    const courseList = [...state.courseList];
  
    // Get the index of the course in the courselist
    const index = courseList.findIndex(course => course.courseId === action.payload.courseId);
    // Check if course is in the list, and then update the list
    if (courseList[index]) courses[index].wishListFlag = action.payload.isWishlisted;
 
    // Update local state
    return { ...state, courseList };
  }
}

export default (state = initialState, action) => {
  if (reducers[action.type]) return reducers[action.type](state, action)
  return state;
}