import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';


const ChooseVehicle = () => {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { isDirty } } = useForm({
        defaultValues: {
            VehicleType: "",
            VehicleModel: ""
        }
    })

    const onSubmit = (data) => {
        console.log(data)
        localStorage.setItem("ChooseVehicle", JSON.stringify(data))
        navigate('/booking-details')
    }

    return (
        <>
            <Container>
                <Typography m={2} component={'h6'} variant='h4' fontWeight={'Bold'}>Choose Vehicle</Typography>

                <Box p={6} sx={{ border: '1px solid grey' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Select for Vehicle type */}
                        {/* <select id="Vehicle" {...register("VehicleType", {
                            required: "Vehicle is required"
                        })}>
                            <option value="Mustang">Mustang</option>
                            <option value="Ferrari">Ferrari</option>
                            <option value="Lamborgini">Lamborgini</option>
                            <option value="Porsche">Porsche</option>
                            <option value="Audi">Audi</option>
                            <option value="RollsRoyce">RollsRoyce</option>
                        </select> */}
                        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="VehicleType">VehicleType</InputLabel>
                            <Select
                                margin={'5px'}
                                labelId="VehicleType"
                                label="Vehicle Type"
                                {...register("VehicleType", {
                                    required: true
                                })}
                            >
                                <MenuItem value={"Mustang"}>Mustang</MenuItem>
                                <MenuItem value={"Ferrari"}>Ferrari</MenuItem>
                                <MenuItem value={"Lamborgini"}>Lamborgini</MenuItem>
                                <MenuItem value={"Porsche"}>Porsche</MenuItem>
                                <MenuItem value={"Audi"}>Audi</MenuItem>
                                <MenuItem value={"RollsRoyce"}>RollsRoyce</MenuItem>
                            </Select>
                        </FormControl>

                        <br />

                        {/* Vehicle Model No. */}
                        {/* <select id="VehicleModel" {...register("VehicleModel")}>
                            <option value="Model1">Model1</option>
                            <option value="Model2">Model2</option>
                            <option value="Model3">Model3</option>
                            <option value="Model4">Model4</option>
                            <option value="Model5">Model5</option>
                            <option value="Model6">Model6</option>
                        </select> */}
                        <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="VehicleModel">VehicleModel</InputLabel>
                            <Select
                                margin={'5px'}
                                labelId="VehicleModel"
                                label="Vehicle Model"
                                {...register("VehicleModel", {
                                    required: true
                                })}
                            >
                                <MenuItem value={"Model1"}>Model1</MenuItem>
                                <MenuItem value={"Model2"}>Model2</MenuItem>
                                <MenuItem value={"Model3"}>Model3</MenuItem>
                                <MenuItem value={"Model4"}>Model4</MenuItem>
                                <MenuItem value={"Model5"}>Model5</MenuItem>
                                <MenuItem value={"Model6"}>Model6</MenuItem>
                            </Select>
                        </FormControl>

                        <br />

                        {/* Link to Booking Details */}
                        <Button sx={{ mt: 3 }} disabled={!isDirty} type='submit' variant='outlined'>
                            Next
                            {/* <Link to="/booking-details">Next</Link> */}
                        </Button>
                    </form>
                </Box>
            </Container>

        </>
    )
}

export default ChooseVehicle