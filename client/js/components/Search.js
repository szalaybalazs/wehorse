import React from 'react';
import { Container, Box, Typography, TextField, InputAdornment, IconButton } from '@material-ui/core';
import { Favorite as FavoriteIcon, Search as SearchIcon } from '@material-ui/icons';
import { connect } from 'react-redux';
import { filterWishlished } from '../store/actions/courseActions';

const Search = ({ wishlist, filterWishlished }) => {
  const _handleAction = () => filterWishlished(!wishlist);
  return (
    <Box display='flex' mb={6} className='soft-shadow'>
      <TextField
        flex={1}
        style={{ flex: 1, background: 'white' }} // This is very very bad
        placeholder="Wonach suchst du?"
        variant='outlined'
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton 
                color={wishlist ? 'primary' : 'secondary'}
                onClick={_handleAction}
              >
                <FavoriteIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    </Box>
  )
}

const mapStateToProps = state => ({ wishlist: state.courses.wishlistFilter });
export default connect(mapStateToProps, { filterWishlished })(Search);
