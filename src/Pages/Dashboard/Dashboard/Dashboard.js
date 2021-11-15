import * as React from 'react';
import Button from '@mui/material/Button';

import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MyOrder from '../../MyOrder/MyOrder';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProducts from '../AddProducts/AddProducts';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import ManageOrders from './ManageOrders/ManageOrders';
import useAuth from '../../../hooks/useAuth';
import ManageProducts from './ManageProducts/ManageProducts';
import Reviews from '../Reviews/Reviews';

const drawerWidth = 170;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none' }} to={`${url}/myorder`}> <Button color="secondary">My Orders</Button> </Link>
            <Link style={{ textDecoration: 'none' }} to={`${url}/pay`}> <Button color="secondary">Payment Option</Button> </Link>
            <Link style={{ textDecoration: 'none' }} to={`${url}/review`}> <Button color="secondary">Review</Button> </Link>


            {
                admin && <Box>

                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}> <Button color="secondary">Make Admin</Button> </Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/addProducts`}> <Button color="secondary">Add Products</Button> </Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageproducts`}> <Button color="secondary">Manage Products</Button> </Link>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageallorders`}> <Button color="secondary">Manage All Orders</Button> </Link>

                </Box>


            }
            <p> <Button onClick={logOut} variant="danger">Logout</Button></p>


            {/* <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}


        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <h5>DashBoard   <Link style={{ textDecoration: 'none', marginLeft: '850px' }} to="/"> <Button style={{ color: 'white' }}  ><small>back to home</small></Button> </Link></h5>


                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>

                    </Route>
                    <Route path={`${path}/myorder`}>
                        <DashboardHome></DashboardHome>

                    </Route>
                    <Route path={`${path}/addproducts`}>
                        <AddProducts></AddProducts>

                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>

                    </Route>
                    <Route path={`${path}/review`}>
                        <Reviews></Reviews>

                    </Route>
                    <Route path={`${path}/manageallorders`}>
                        <ManageOrders></ManageOrders>

                    </Route>
                    <Route path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>

                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
