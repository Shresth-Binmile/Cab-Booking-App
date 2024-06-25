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
                                    </Select>
                                    {errors.VehicleType? errors.VehicleType.message : null}
                                </FormControl>
                            )}
                        />

                        <br />

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
                                    </Select>
                                    {errors.VehicleModel? errors.VehicleModel.message : null}
                                </FormControl>
                            )}
                        />

                        <br />

                        {/* Link to Booking Details */}
                        <Button sx={{ mt: 3 }} type='submit' variant='outlined'>
                            Next
                        </Button>
                    </form>
                </Box>
            </Container>

        </>
    )
}

export default ChooseVehicle