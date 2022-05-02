import React, {  useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import './Home.css'
import axios from 'axios'
// import ImageUploading from 'react-images-uploading';

function Home() {
    const navigate = useNavigate()
    const initialValues = {
        name: "",
        address: "",
        city: "",
        state: "",
        email_id: "",
        phone: "",
        company_name: "",
        about_background: "",
        about_company: "",
        about_problem: "",
        about_solution: "",
        about_value_proposition: "",
        about_competetors: "",
        about_revenue_modal: "",
        about_potential: "",
        about_plan: "",
        incubation_type: "",
        about_bussiness_proposal: "",

    }
    const [companyLogo, setCompanyLogo] = useState('')
    const [formData, setFormData] = useState(initialValues)
    const [errorMessage,setErrorMessage] = useState('')



    const handleOnChange = (e) => {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
        console.log(formData.phone)
    }


    const handleSubmit = e => {
        if(!formData.name||!formData.address||!formData.city||!formData.state||!formData.email_id||!formData.phone||!formData.company_name||!formData.about_background||!formData.about_company||!formData.about_problem||!formData.about_solution||!formData.about_value_proposition||!formData.about_competetors||!formData.about_revenue_modal||!formData.about_potential||!formData.about_plan||!formData.incubation_type||!formData.about_bussiness_proposal){
            setErrorMessage("Every field shoud be filled")
          }else{
        console.log(formData)
        console.log(companyLogo)
        axios.post('http://127.0.0.1:8000/api/application_form/', formData).then((res) => {
            console.log(res.data)
            return res.data
        }).then((data) => {
            console.log(data)
            let form_data = new FormData();
            form_data.append('company_logo', companyLogo);
            form_data.append('application_form', data.id);
            console.log(form_data)

            axios.post('http://localhost:8000/api/company_logo/', form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log(res)
            }).catch((error) => {
                console.error(error)
            })
        })
    }}

    return (
        <div>
            <Container maxWidth="md" sx={{ pt: 5 }}>
                <Grid container >
                    <Grid item xs={1} md={1} />
                    <Grid item xs={10} md={10}>
                        <Box className='holder' sx={{ boxShadow: 4, padding: 5 }}>
                            <div className='logo-holder'>
                                <h2>Application For Incubation</h2>

                            </div>
                            <div className='logout-holder'>
                                <Button onClick={e => {
                                    localStorage.clear();
                                    return navigate('/login')
                                }} variant="contained" component="label" className='upload-button'>
                                    Logout

                                </Button>

                            </div>
                            <Grid container spacing={2} sx={{ pt: 2 }}>

                                <Grid item xs={12} sm={6} >
                                    <TextField id="name-basic" label="Name" name='name' variant="standard" className='form' onChange={handleOnChange} />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField id="address-basic" label="Address" name='address' variant="standard" className='form' onChange={handleOnChange} />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField id="city-basic" label="City" name='city' variant="standard" className='form' onChange={handleOnChange} />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField id="state-basic" label="State" variant="standard" className='form' name='state' onChange={handleOnChange} />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField id="email-basic" label="Email" variant="standard" className='form' name='email_id' onChange={handleOnChange} />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField id="phone-basic" type='number' onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
                                    }} onWheel={(e) => e.target.blur()} label="Phone no" variant="standard" className='form' name='phone' onChange={handleOnChange} />
                                </Grid>
                                <Grid item xs={12} sm={6} >
                                    <TextField id="company-name-basic" label="Company Name" variant="standard" className='form' name='company_name' onChange={handleOnChange} />
                                </Grid>
                                <Grid item xs={12} sm={6} className='image-upload-holder'>
                                    <div className='image'>
                                        <div className='image-label'>
                                            <p>Upload Image</p>
                                        </div>
                                        {companyLogo && <img src={URL.createObjectURL(companyLogo)} alt="" className='image-upload' />}

                                    </div>
                                    <div className='upload-button-holder'>
                                        <Button variant="contained" component="label" className='upload-button'>
                                            Upload File
                                            <input type="file" name='company_logo' onChange={e => {
                                                setCompanyLogo(e.target.files[0])
                                                console.log(e.target.files);
                                            }} hidden />
                                        </Button>
                                    </div>

                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="Describe Your Team And Background."
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className='form'
                                        name='about_background'
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="Describe Your Company And Products."
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className='form'
                                        name='about_company'
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="Describe The Problem You Are Trying To Solve."
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className='form'
                                        name='about_problem'
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="What Is Unique About Your Solution?"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className='form'
                                        name='about_solution'
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="What Is Your Value Proposition For The Customer?"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className='form'
                                        name='about_value_proposition'
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="Who Are Your Competitors And What Is Your Competative Advantage?"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className='form'
                                        name='about_competetors'
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="Explain Your Revenue Model."
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className='form'
                                        name='about_revenue_modal'
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="What Is The Potential Market Size Of The Product?"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className='form'
                                        name='about_potential'
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="How Do You Market Or Plan To Market Your Products And Services."
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className='form'
                                        name="about_plan"
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl sx={{ float: 'left' }}>
                                        <FormLabel id="demo-controlled-radio-buttons-group">Type Of Incubation Needed.</FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="incubation_type"
                                            onChange={handleOnChange}
                                        >
                                            <FormControlLabel value="Physical Incubation" control={<Radio />} label="Physical Incubation" />
                                            <FormControlLabel value="Virtual Incubation" control={<Radio />} label="Virtual Incubation" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="standard-multiline-static"
                                        label="Upload A Detail Business Proposal."
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        className='form'
                                        name='about_bussiness_proposal'
                                        onChange={handleOnChange}
                                    />
                                </Grid>
                                {errorMessage&&
                                    <p className='error'>{errorMessage}</p>
                                }
                            </Grid>
                            <div style={{ padding: '20px', textAlign: "center" }}>

                                <Button onClick={handleSubmit} >Submit</Button>

                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={1} />
                </Grid>
            </Container>
        </div>
    )
}

export default Home