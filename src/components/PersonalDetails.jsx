import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const PersonalDetails = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
    } = useForm({
        defaultValues: {
            Name: "",
            Email: "",
            Mobile: "",
            Address: ""
        }
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
                            <TextField
                                required
                                id='name'
                                label='Enter your fullname.'
                                variant='standard'
                                {...register("Name", {
                                    required: "Enter your fullname"
                                })}
                            />
                        </div>

                        <br />

                        {/* Email */}
                        <div>
                            {/* <label htmlFor="Email">Email: </label>
                        <input type="email" placeholder='Enter Your Email' {...register("Email", {
                            required: "Email is required"
                        })} /> */}
                            <TextField
                                required
                                id='email'
                                label='Enter your Email.'
                                variant='standard'
                                {...register("Email", {
                                    required: "Enter your Email."
                                })}
                            />
                        </div>

                        <br />

                        {/* Phone Number */}
                        <div>
                            {/* <label htmlFor="Phone">Phone Number: </label>
                        <input type="number" placeholder='Enter Your Phone Number' {...register("Mobile", {
                            required: "Mobile Number is required"
                        })} /> */}
                            <TextField
                                type='number'
                                required
                                id='phone'
                                label='Enter your Mobile Number.'
                                variant='standard'
                                {...register("Mobile", {
                                    required: "Enter your Mobile Number."
                                })}
                            />
                        </div>

                        <br />

                        {/* Address */}
                        <div>
                            {/* <label htmlFor="Address">Address: </label>
                        <input type="text" placeholder='Enter Your Address' {...register("Address", {
                            required: "Address is required"
                        })} /> */}
                            <TextField
                                required
                                id='address'
                                label='Enter your Address.'
                                variant='standard'
                                {...register("Address", {
                                    required: "Enter your Address."
                                })}
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