import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';

export const Header: FC = () => { 

    return (
        <Box sx={{ flexGrow: 1}}>
          <AppBar position="static" style={{ background: '#2C2C2C' }}>
            <Toolbar>
              {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Alzheimer's Risk Profile
              </Typography> */}
            </Toolbar>
          </AppBar>
        </Box>
      );
}