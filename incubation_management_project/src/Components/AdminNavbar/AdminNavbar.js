import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './AdminNavbar.css'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import BookIcon from '@mui/icons-material/Book';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

function AdminNavbar() {
    const navigate = useNavigate()
    const [state, setState] = React.useState({

        left: false,

    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            pt={6}
            pl={3}
            pr={3}
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 'fit-content' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='side-content' onClick={e=>{
                navigate('/admin')
            }}>
                <ArticleIcon sx={{marginRight:'5px'}} />
                <p>Application List</p>
            </div>
            <div className='side-content' onClick={e=>{
                navigate('/admin/record_track')
            }}>
                <CalendarViewMonthIcon sx={{marginRight:'5px'}}/>
                <p>Record Track</p>
            </div>
            <div className='side-content' onClick={e=>{
                navigate('/admin/booking_slot')
            }}>
                <BookIcon sx={{marginRight:'5px'}}/>
                <p>Booking Slot</p>
            </div>
            <div className='side-content'>
                <LogoutIcon sx={{marginRight:'5px'}}/>
                <p>Logout</p>
            </div>
            

        </Box>
    );
    return (
        <Box className='nav-holder' sx={{boxShadow: 20, padding:3,position: 'fixed',zIndex:3,bgcolor:'white'}}>

            <div className='nav-content hide'>
                {['menu'].map((anchor) => (
                    <React.Fragment key={anchor} sx={{padding : 0}}>
                        <Button onClick={toggleDrawer(anchor, true)} sx={{padding : 0,width:'fit-content',minWidth: 'fit-content'}} ><ArrowDropDownIcon/></Button>
                        <SwipeableDrawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>

            <Container className='logo-holder'  sx={{ display: "flex",paddingLeft: "0px",paddingRight: "0px"}}>
                <div className='nav-content'>
                    <h3 >Incubation Project</h3>
                </div>
            </Container>
        </Box>
    )
}

export default AdminNavbar