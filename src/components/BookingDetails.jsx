import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'


const BookingDetails = () => {

    const navigate = useNavigate()
    const schema = yup.object({
        ScheduleDate: yup.date().required().default(dayjs(Date.now())),
        ScheduleTime: yup.date().required().default(dayjs(Date.now()))
    }).required("Date & Time fields are mandatory")

    const { control, handleSubmit } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        localStorage.setItem("BookingDetails", JSON.stringify(data))

        const dataFromLocalStorage = JSON.parse(localStorage.getItem("BookingDetails"))
        const { ScheduleDate, ScheduleTime } = dataFromLocalStorage
        navigate('/ticket')
    }

    return (
        <>
            <Container>
                <Typography m={2} component={'h6'} variant='h4' fontWeight={'Bold'}>Booking Details</Typography>

                <Box p={6} sx={{ border: '1px solid grey' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Choose Date */}
                        <Controller
                            name="ScheduleDate"
                            control={control}
                            render={({ field }) => (<><LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker {...field} />
                            </LocalizationProvider></>)}
                        />

                        {/* Choose Time */}
                        <Controller
                            name="ScheduleTime"
                            control={control}
                            render={({ field }) => (<LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker sx={{ mt: 5 }} {...field} />
                            </LocalizationProvider>)}
                        />

                        <br />

                        {/* Link to Ticket */}
                        <Button sx={{ mt: 5 }} type='submit' variant='outlined'>
                            Submit
                        </Button>

                    </form>
                </Box>

            </Container>

        </>
    )
}

export default BookingDetails