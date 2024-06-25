import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

const PersonalDetails = () => {
    const navigate = useNavigate();
    const schema = yup.object({
        Name: yup.string().required('Name is required'),
        Email: yup.string().default('').required('Email is required'),
        Mobile: yup.string().min(10).max(10).required('Mobile number is required'),
        Address: yup.string().default('').required('Address is required')
    }).required()

    const {
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        console.log(data)
        localStorage.setItem("PersonalDetails", JSON.stringify(data))
        navigate('/choose-vehicle');
    }

    return (
        <>
            <Container>
                <Typography m={2} component={'h6'} variant='h4' fontWeight={'Bold'}>Personal Details</Typography>

                <Box p={6} sx={{ border: '1px solid grey' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name */}
                        <div>
                            {/* <label htmlFor="Name">Full Name: </label>
                        <input type="text" placeholder='Enter Your Name' {...register("Name", {
                            required: "Enter your fullname"
                        })} /> */}
                            <Controller
                                name='Name'
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        id='name'
                                        label='Enter your Fullname.'
                                        variant='standard'
                                        {...field}
                                        helperText={errors.Name ? errors.Name.message:null}
                                    />
                                )}
                            />
                        </div>

                        <br />

                        {/* Email */}
                        <div>
                            {/* <label htmlFor="Email">Email: </label>
                        <input type="email" placeholder='Enter Your Email' {...register("Email", {
                            required: "Email is required"
                        })} /> */}
                            <Controller
                                name='Email'
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        id='email'
                                        label='Enter your Email.'
                                        variant='standard'
                                        {...field}
                                        helperText={errors.Email ? errors.Email.message:null}
                                    />
                                )}
                            />
                        </div>

                        <br />

                        {/* Phone Number */}
                        <div>
                            {/* <label htmlFor="Phone">Phone Number: </label>
                        <input type="number" placeholder='Enter Your Phone Number' {...register("Mobile", {
                            required: "Mobile Number is required"
                        })} /> */}
                            <Controller
                                name='Mobile'
                                control={control}
                                render={({ field }) => (<TextField
                                    type='number'
                                    id='phone'
                                    label='Enter your Mobile Number.'
                                    variant='standard'
                                    {...field}
                                    helperText={errors.Mobile ? errors.Mobile.message:null}
                                />)}
                            />
                        </div>

                        <br />

                        {/* Address */}
                        <div>
                            {/* <label htmlFor="Address">Address: </label>
                        <input type="text" placeholder='Enter Your Address' {...register("Address", {
                            required: "Address is required"
                        })} /> */}
                            <Controller
                                name='Address'
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        id='address'
                                        label='Enter your Address.'
                                        variant='standard'
                                        {...field}
                                        helperText={errors.Address ? errors.Address.message:null}
                                    />
                                )}
                            />
                        </div>

                        <br />

                        {/* Link to Choose Vehicle */}
                        <Button type='submit' variant='outlined'>
                            Next
                            {/* <Link type='submit' to="/choose-vehicle">Next</Link> */}
                        </Button>
                    </form>
                </Box>
            </Container>

        </>
    )
}

export default PersonalDetails