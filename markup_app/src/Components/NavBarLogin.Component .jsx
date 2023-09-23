import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Styles from '../Styles/navBar.module.scss';


const drawerWidth = 240;
const navItems = ['','', '', '',''];
const navigation =['','',''];
const StyledTypography = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'monospace',
  fontWeight: 600,
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: 'clamp(18px, 5vw, 22px)', // Adjust the values as needed
  flexGrow: 1,
  textAlign: 'center',
  // Other styles...
});



function DrawerAppBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      
      <Divider/>
      
    </Box>
    
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline/>
      <AppBar component="nav">
      
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
           
            
          >
            
          </IconButton>
          <span   className={Styles.navTitlemobile}>
            <Typography
              variant="h1"
              component="div"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                fontFamily: 'monospace',
                fontWeight: 600,
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
                fontSize: 'clamp(18px, 5vw, 22px)', // Adjust the values as needed
                flexGrow: 1,
                textAlign: 'center',
              }}
            >
              Sistema de Precificação 
            </Typography>
          </span>
          <span   className={Styles.navTitleDesktop}>
            <Typography
              variant="h1"
              component="div"
              sx={{
                display: 'flex',
                justifyContent: 'start',
                fontFamily: 'monospace',
                fontWeight: 600,
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
                fontSize: 'clamp(18px, 5vw, 22px)', // Adjust the values as needed
                flexGrow: 1,
                textAlign: 'center',
              }}

            >
              Sistema de Precificação 
            </Typography>  
          </span>  
       
        </Toolbar>
        
      </AppBar>
      <Box component="nav">
     
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
          
        </Drawer>
        
      </Box>
      
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;