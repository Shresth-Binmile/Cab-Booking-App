import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'


const ChooseVehicle = () => {

    const navigate = useNavigate()
    const vehicles = ['Mustang', 'Ferrari', 'Lamborgini', 'Porsche', 'Audi', 'RollsRoyce']
    const models = ['Model1', 'Model2', 'Model3', 'Model4', 'Model5', 'Model6']
    const schema = yup.object({
        VehicleType: yup.string().required('VehicleType is required').default(''),
        VehicleModel: yup.string().required('VehicleModel is required').default('')
    }).required()

    const { control, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
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
                        <Controller
                            name='VehicleType'
                            control={control}
                            render={({ field }) => (
                                <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="VehicleType">VehicleType</InputLabel>
                                    <Select
                                        margin={'5px'}
                                        labelId="VehicleType"
                                        label="Vehicle Type"
                                        {...field}
                                    >
                                        {
                                            vehicles.map((vehicle, index) => (
                                                <MenuItem key={index} value={`${vehicle}`}>{vehicle}</MenuItem>
                                            ))
                                        }
                                        {/* <MenuItem value={"Mustang"}>Mustang</MenuItem>
                                <MenuItem value={"Ferrari"}>Ferrari</MenuItem>
                                <MenuItem value={"Lamborgini"}>Lamborgini</MenuItem>
                                <MenuItem value={"Porsche"}>Porsche</MenuItem>
                                <MenuItem value={"Audi"}>Audi</MenuItem>
                                <MenuItem value={"RollsRoyce"}>RollsRoyce</MenuItem> */}
                                    </Select>
                                    {errors.VehicleType? errors.VehicleType.message : null}
                                </FormControl>
                            )}
                        />

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
                        <Controller
                            name='VehicleModel'
                            control={control}
                            render={({ field }) => (
                                <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="VehicleModel">VehicleModel</InputLabel>
                                    <Select
                                        margin={'5px'}
                                        labelId="VehicleModel"
                                        label="Vehicle Model"
                                        {...field}
                                    >
                                        {
                                            models.map((model, index) => (
                                                <MenuItem key={index} value={`${model}`}>{model}</MenuItem>
                                            ))
                                        }
                                        {/* <MenuItem value={"Model1"}>Model1</MenuItem>
                                <MenuItem value={"Model2"}>Model2</MenuItem>
                                <MenuItem value={"Model3"}>Model3</MenuItem>
                                <MenuItem value={"Model4"}>Model4</MenuItem>
                                <MenuItem value={"Model5"}>Model5</MenuItem>
                                <MenuItem value={"Model6"}>Model6</MenuItem> */}
                                    </Select>
                                    {errors.VehicleModel? errors.VehicleModel.message : null}
                                </FormControl>
                            )}
                        />

                        <br />

                        {/* Link to Booking Details */}
                        <Button sx={{ mt: 3 }} type='submit' variant='outlined'>
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