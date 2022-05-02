import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Grid, LinearProgress } from '@mui/material'
import './AdminRecordTrack.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'


function AdminRecordTrack() {
    const [rows, setRows] = useState([])
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
    }, [])
    
    
    return (
        <div className="right">

            <Container >
                <Grid xs={12}>
                    <Box className='main-content-holder'>
                        <Box className='content'>
                            <h2>Record Track</h2>
                            <div className='list'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="center">Si:no</TableCell>
                                                <TableCell align="center">Company Name</TableCell>
                                                <TableCell align="center">Company Details</TableCell>
                                                <TableCell align="center">progress</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row,index) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    
                                                    <TableCell align="right">{row.id}</TableCell>
                                                    <TableCell align="right">{row.company_name}</TableCell>
                                                    <TableCell align="right">{row.about_company}</TableCell>
                                                    <TableCell><LinearProgress variant="buffer" value={row.status != null ? row.status ? row.slot_booked ? 100 : 75 : 50 : 0  } /></TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                        </Box>

                    </Box>
                </Grid>
            </Container>
        </div>
    )
}

export default AdminRecordTrack