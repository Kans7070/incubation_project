import { Box, Button, Container, Grid, Modal, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import React, { useEffect, useState } from 'react'
import './AdminBookingSlot.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function AdminBookingSlot() {
    const [mainRowSlot, setMainRowSlot] = useState([])
    const [secondartRowSlot, setSecondartRowSlot] = useState([])
    const [companyName, setCompanyName] = useState([])
    const [slotId, setSlotId] = useState()
    const [applicant, setApplicant] = useState()
    const [slotType, setSlotType] = useState()
    const [bookedOpen, setBookedOpen] = React.useState(false);
    const [booked, setBooked] = React.useState(false);
    const [bookingOpen, setBookingOpen] = React.useState(false);
    const handleBookingClose = () => setBookingOpen(false);
    const handleBookedClose = () => setBookedOpen(false);
    const [event,setEvent] = useState()
    useEffect(() => {

        fetch('http://127.0.0.1:8000/api/main_booking_slot', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(data => {
            console.log(data)
            return data.json()
        }).then(data => {
            console.log(data)
            for (let x in data) {
                console.log(data[x])
                if (x === data.length) {
                    break
                } else {
                    setMainRowSlot(data)
                }
            }
        })
        fetch('http://127.0.0.1:8000/api/secondary_booking_slot', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(data => {
            console.log(data)
            return data.json()
        }).then(data => {
            console.log(data)
            for (let x in data) {
                console.log(data[x])
                if (x === data.length) {
                    break
                } else {
                    setSecondartRowSlot(data)
                }
            }
        })
        fetch('http://127.0.0.1:8000/api/application_form', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        }).then(data => {
            console.log(data)
            return data.json()
        }).then(data => {
            console.log(data)
            for (let x in data) {
                console.log(data[x])
                if (x === data.length) {
                    break
                } else {
                    setCompanyName(data)
                }
            }
        })

    }, [event])

    const handleBookingClick = (id, arg) => {
        console.log(id, arg)
        setSlotId(id)
        setSlotType(arg)
        setBookingOpen(true);
    }

    const handleBookedClick = (id,applicant,arg,)=>{
        setBookedOpen(true);
        if (arg == 1) {
            fetch(`http://127.0.0.1:8000/api/main_booking_slot/${id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }).then(data => {
                console.log(data)
                return data.json()
            }).then(data => {
                console.log(data)
                fetch(`http://127.0.0.1:8000/api/application_form/${data.application_form}/`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }).then(data => {
                console.log(data)
                return data.json()
            }).then((data)=>{
                console.log(data)
                setBooked(data)
            })
            }).catch(error=>console.error(error))
        }else{
            fetch(`http://127.0.0.1:8000/api/secondary_booking_slot/${id}/`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }).then(data => {
                console.log(data)
                return data.json()
            }).then(data => {
                console.log(data)
                fetch(`http://127.0.0.1:8000/api/application_form/${data.application_form}/`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            }).then(data => {
                console.log(data)
                return data.json()
            }).then((data)=>{
                console.log(data)
                setBooked(data)
            })
            }).catch(error=>console.log(error))
        }
        setEvent(slotId, slotType)

    }


    const confirm = (formId) => {
        console.log(slotId, slotType)
        console.log(companyName)
        setBookingOpen(false);
        if (slotType == 1) {
            fetch(`http://127.0.0.1:8000/api/main_booking_slot/${slotId}/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({application_form : formId})
            }).then(data => {
                console.log(data)
                return data.json()
            }).then(data => {
                console.log(data)
                fetch(`http://127.0.0.1:8000/api/application_form/${formId}/`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({slot_booked : true})
                  }).then(data => {
                    console.log(data);
                    return data.json()
                  }
                  ).then(data => {
                    console.log(data)
                    setEvent({user:data.username,status:data.status})
                    console.log("user:",data.username,"status:",data.status)
                    console.log(event)
              
                  }).catch(error => {
                    console.error(error)
                  })
                
            }).catch(error=>console.log(error))
        }else{
            fetch(`http://127.0.0.1:8000/api/secondary_booking_slot/${slotId}/`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({application_form : formId})
            }).then(data => {
                console.log(data)
                return data.json()
            }).then(data => {
                console.log(data)
                fetch(`http://127.0.0.1:8000/api/application_form/${formId}/`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({slot_booked : true})
                  }).then(data => {
                    console.log(data);
                    return data.json()
                  }
                  ).then(data => {
                    console.log(data)
                    setEvent({user:data.username,status:data.status})
                    console.log("user:",data.username,"status:",data.status)
                    console.log(event)
              
                  }).catch(error => {
                    console.error(error)
                  })
            }).catch(error=>console.log(error))
        }
        setEvent(slotId, slotType)


    }

    return (
        <div className='right'>
            <div>
                <Modal
                    keepMounted
                    open={bookingOpen}
                    onClose={handleBookingClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h5" component="h1" align='center' sx={{textDecoration:'underline',marginBottom : 2}} >
                        Companies
                        </Typography>
                        {companyName.map((row) => row.slot_booked? null : <Typography className='booking_slot' id="keep-mounted-modal-title" align='right' variant="p" component="p" onClick={() => { confirm(row.id) }} >
                        {row.company_name}
                        </Typography>)}

                    </Box>
                </Modal>
            </div>
            <div>
                <Modal
                    keepMounted
                    open={bookedOpen}
                    onClose={handleBookedClose}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={style}>
        
                        <Typography id="keep-mounted-modal-title" variant="h6" component="h2"  >
                            Company Name : {booked.company_name}
                        </Typography>

                    </Box>
                </Modal>
            </div>

            <Container style={{ paddingTop: '35px' }} >
                <Grid xs={12}>
                    <Box className='main-content-holder'>
                        <Box>

                            <div >
                                <Box sx={{ display: 'flex', }}>

                                    {mainRowSlot.map((row) => row.application_form ?  <Paper className='up-paper' onClick={(e) => {
                                        let arg = 1
                                        handleBookedClick(row.id,row.application_form,arg)
                                    }} sx={{ bgcolor: 'green', width: '50%', margin: '5px', padding: '4% 0' }} />:<Paper className='up-paper' onClick={(e) => {
                                        let arg = 1
                                        handleBookingClick(row.id, arg)
                                    }} sx={{ bgcolor: 'red', width: '50%', margin: '5px', padding: '4% 0' }} />)}


                                </Box>
                                <hr className='up-hr' />
                                <hr className='up-hr' />
                                <div style={{ display: 'flex', width: '100%' }}>
                                    <Grid container>
                                        {secondartRowSlot.map((row) => row.application_form ? <Grid item xs={1}>
                                            <Paper className='up-paper' onClick={(e) => {
                                                let arg = 2
                                                handleBookedClick(row.id,row.application_form,arg)
                                            }} sx={{ bgcolor: 'green', padding: "45% 0", width: '90%', margin: '4px' }} />
                                        </Grid>
                                        :
                                        <Grid item xs={1}>
                                            <Paper className='up-paper' onClick={(e) => {
                                                let arg = 2
                                                handleBookingClick(row.id, arg)
                                                
                                            }} sx={{ bgcolor: 'red', padding: "45% 0", width: '90%', margin: '4px' }} />
                                        </Grid>
                                        )}
                                    </Grid>

                                </div>
                            </div>
                        </Box>
                    </Box>
                </Grid>

            </Container>
        </div>
    )
}

export default AdminBookingSlot