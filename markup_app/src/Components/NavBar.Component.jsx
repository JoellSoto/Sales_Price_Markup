import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Pagina Inicial','Novo Produto', 'Custos Fixos','Perfil','Sair'];
const navigation =['/','/addProduct','/fixed-costs','/','/login'];
const StyledTypography = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'monospace',
  fontWeight: 600,
  color: 'inherit',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: 'clamp(18px, 5vw, 22px)', // Adjust the values as needed
  // Other styles...
});

const onExit=()=>{
  localStorage.setItem("isLogin","");
}

function DrawerAppBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Menu
      </Typography>
      <Divider/>
      <List>
          <ListItem key={'Pagina Inicial'} disablePadding onClick={()=>navigate('/')}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={'Pagina Inicial'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'fixed-costs'} onClick={()=>navigate('/fixed-costs')} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={'Custos Fixos'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'produtos'} onClick={()=>navigate('/addProduct')} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={'Novo Produto'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'sair'} onClick={()=>{onExit();navigate('/login')}} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={'Sair'} />
            </ListItemButton>
          </ListItem>
      </List>
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
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon/>
          </IconButton>
          <StyledTypography
      onClick={() => navigate('/')} // Make sure to import the necessary function for navigation
      variant="h5"
      component="a"
      href=""
    >
      Sistema de Precificação
    </StyledTypography>    
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item,index) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={()=>{if(item==='sair'){onExit();navigate(navigation[index])}else navigate(navigation[index])}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
        
      </AppBar>
      <Box component="nav">
     
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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