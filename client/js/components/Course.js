import React from 'react';
import { Box, Typography, IconButton } from '@material-ui/core';
import { Favorite as FavoriteIcon } from '@material-ui/icons';
import { wishlistCourse } from '../store/actions/courseActions';
import { connect } from 'react-redux';

// Course banner component
// Props
// - { int } courseId the id of the course
// - { string } courseName the title of the courseActions
// - { boolean } isNew whether the cours is new
// - { boolean } wishListFlag whether the course is on the wishlist of the user
// - { function } wishlistCourse callback to toggle wishlistFlag of the course
const Course = ({ courseId, courseName, isNew = false, wishListFlag, wishlistCourse = () => {} }) => {
  const _handleAction = () => wishlistCourse(courseId, !wishListFlag);
  return (
    <Box 
      mb={2}
      borderRadius={8}
      display='flex'
      overflow='hidden'
      bgcolor='background'
      className='soft-shadow'
      minHeight={64}
    >
      <Box
        flex={2}
        position='relative'
      >
        { isNew && <Flag /> }
        <img 
          src="/static/images/placeholder.png" 
          alt={courseName} 
          className='course-banner-image'
        />
      </Box>
      <Box p={2} pr={0} flex={3}>
        <Typography variant='caption'>{ courseName }</Typography>
      </Box>
      <Box p={1}>
        <IconButton
          onClick={_handleAction}
          color={wishListFlag ? 'primary' : 'secondary'}
        >
          <FavoriteIcon fontSize='small' />
        </IconButton>
      </Box>
    </Box>
  )
}

// New flag component
const Flag = () => (
  <Box 
    position='absolute'
    top={12} 
    left={12} 
    pl={1} 
    pr={1} 
    bgcolor='background' 
    borderRadius={5}
  >
    <Typography variant='caption'>Neu</Typography>
  </Box>
)

export default connect(null, { wishlistCourse })(Course);