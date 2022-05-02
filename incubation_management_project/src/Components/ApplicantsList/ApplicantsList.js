import { Box, Button, Container, Grid, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './ApplicantsList.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import axios from 'axios';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ApplicantsList() {
  const [rows, setRows] = useState([])
  const [event, setEvent] = useState()
  const [bookingOpen, setBookingOpen] = React.useState(false);
  const handleBookingClose = () => setBookingOpen(false);
  const [openData, setOpenData] = useState()

  useEffect(() => {
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
          setRows(data)
        }
      }


    })
  }, [event])


  const handleReject = (id) => {
    console.log(id)
    fetch(`http://127.0.0.1:8000/api/application_form/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: false })
    }).then(data => {
      console.log(data);
      return data.json()
    }
    ).then(data => {
      console.log(data)
      setEvent({ user: data.username, status: data.status })
      console.log("user:", data.username, "status:", data.status)
      console.log(event)

    }).catch(error => {
      console.error(error)
    })
    setBookingOpen(false);

  }


  const handleAccept = (id) => {
    console.log(id)
    fetch(`http://127.0.0.1:8000/api/application_form/${id}/`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: true })
    }).then(data => {
      console.log(data);
      setEvent('')
      return data.json()
    }
    ).then(data => {
      console.log(data)
      setEvent({ user: data.username, status: data.status })
      console.log("user:", data.username, "status:", data.status)
      console.log(event)
    }).catch(error => {
      console.error(error)
    })
    setBookingOpen(false);

  }

  const handleOpen = (id) => {
    axios.get(`http://127.0.0.1:8000/api/application_form/${id}/`).then((res) => {
      setBookingOpen(true);
      setOpenData(res.data)
      console.log(res.data)

    }).catch(error => console.error(error))
  }


  return (
    <div className="right">
      <div>
        <Modal
          keepMounted
          open={bookingOpen}
          onClose={handleBookingClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Typography id="keep-mounted-modal-title" variant="h5" component="h1" align='center ' sx={{ textDecoration: 'underline', marginBottom: 2 }} >
              About Company
            </Typography>
            {openData && <div container>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Name:{openData.name}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Address:{openData.address}
              </Typography>


              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                City:{openData.city}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                State:{openData.state}
              </Typography>


              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Email:{openData.email_id}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Phone:{openData.phone}
              </Typography>


              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Company Name:{openData.company_name}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Describe Your Team And Background:{openData.about_background}
              </Typography>


              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Describe Your Company And Products:{openData.about_company}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Describe The Problem You Are Trying To Solve:{openData.about_problem}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                What Is Unique About Your Solution? :{openData.about_solution}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                What Is Your Value Proposition For The Customer? :{openData.about_value_proposition}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Who Are Your Competitors And What Is Your Competative Advantage? :{openData.about_competetors}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Explain Your Revenue Model?:{openData.about_revenue_modal}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                What Is The Potential Market Size Of The Product? :{openData.about_potential}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                How Do You Market Or Plan To Market Your Products And Services :{openData.about_plan}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Type Of Incubation Needed :{openData.incubation_type}
              </Typography>

              <Typography id="keep-mounted-modal-title" variant="p" component="p" align='left'  >
                Upload A Detail Business Proposal :{openData.about_bussiness_proposal}
              </Typography>
              <Button onClick={(e) => { handleAccept(openData.id) }} variant="text" sx={{ color: 'green' }}>Accept</Button>
              <Button onClick={(e) => { handleReject(openData.id) }} variant="text" sx={{ color: 'red' }}>Reject</Button>


            </div>
            }



          </Box>
        </Modal>
      </div>

      <Container className='right' style={{ float: 'left' }}>
        <Grid xs={12}>
          <Box className='main-content-holder'>
            <Box className='content'>
              <h2>New Applicants List</h2>
              <div className='list'>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Si:no</TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Company Details</TableCell>

                        <TableCell>Control</TableCell>

                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell align="right" onClick={e => { handleOpen(row.id) }}>{row.id}</TableCell>

                          <TableCell align="right" onClick={e => { handleOpen(row.id) }}>{row.company_name}</TableCell>
                          <TableCell align="right" onClick={e => { handleOpen(row.id) }}>{row.about_company}</TableCell>
                          {row.status == null ? <TableCell align="right"><Button variant="text" sx={{ color: 'green' }}>Pending</Button></TableCell> : row.status ? <TableCell align="right"><Button variant="text" sx={{ color: 'black' }}>Accepted</Button></TableCell> : <TableCell align="right"><Button variant="text" sx={{ color: 'black' }}>Rejected</Button></TableCell>}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Box>
            <Box className='content' >
              {rows.map((row) => (
                <div>
                  {row.status == null && <h2>Pending Applicants List</h2>}
                  <div className='list'>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          {row.status == null && <TableRow>
                            <TableCell>Si:no</TableCell>
                            <TableCell>Company Name</TableCell>
                            <TableCell>Company Details</TableCell>
                            <TableCell></TableCell>
                            <TableCell>Control</TableCell>
                            <TableCell></TableCell>
                          </TableRow>}
                        </TableHead>
                        <TableBody>
                          {row.status == null && <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >

                            <TableCell align="right" onClick={e => { handleOpen(row.id) }}>{row.id}</TableCell>
                            <TableCell align="right" onClick={e => { handleOpen(row.id) }}>{row.company_name}</TableCell>
                            <TableCell align="right" onClick={e => { handleOpen(row.id) }}>{row.about_company}</TableCell>
                            <TableCell align="right">
                              <Button onClick={(e) => { handleAccept(row.id) }} variant="text" sx={{ color: 'green' }}>Accept</Button>
                            </TableCell>
                            <TableCell align="right">
                              <Button onClick={(e) => { handleReject(row.id) }} variant="text" sx={{ color: 'red' }}>Reject</Button>
                            </TableCell>
                            <TableCell></TableCell>

                          </TableRow>}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              ))}
            </Box>
          </Box>
        </Grid>
      </Container>
    </div>
  )
}

export default ApplicantsList