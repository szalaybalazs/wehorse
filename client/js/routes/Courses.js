import React, { Fragment, useEffect  } from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import { Header, Course, Search } from '../components';
import { connect } from 'react-redux';
import { fetchCourses } from '../store/actions/courseActions';

const Courses = ({ courses = [], fetchCourses = () => {}, wishlistFilter }) => {
  // Load courses
  useEffect(() => {
    fetchCourses()
  }, []);
  
  // Should be done on the server side via new featch request
  const displayedCourses = courses.filter(course => !wishlistFilter || course.wishListFlag);
  
  
  // Load courses
  useEffect(() => {
    fetchCourses(wishlistFilter)
  }, [wishlistFilter]);
  return (
    <Fragment>
      <Header />
      <Box 
        align='center' 
        mt={6} 
        mb={6}
      >
        <Typography
          align='center'
          variant='h3'
          mt={12}
          mb={12}
        >
          Meine Kurse
        </Typography>
      </Box>
      <Container>
        <Search />
        <Box mb={6}>
          <Typography align='center'>
            { displayedCourses.length } Kurse
          </Typography>
        </Box>
        { displayedCourses.map(course => <Course key={course.courseId} {...course} />)}
      </Container>
    </Fragment>
  )
}

const mapStateToProps = state => ({ courses: state.courses.courseList, wishlistFilter: state.courses.wishlistFilter })
export default connect(mapStateToProps, { fetchCourses })(Courses);