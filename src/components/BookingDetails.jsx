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


const BookingDetails = () => {

    const navigate = useNavigate()

    const { control, handleSubmit } = useForm({
        defaultValues: {
            ScheduleDate: dayjs(Date.now()),
            ScheduleTime: dayjs(Date.now())
        }
    })

    const onSubmit = (data) => {
        // console.log(dateObject.toISOString())
        // console.log(data)
        localStorage.setItem("BookingDetails", JSON.stringify(data))

        const dataFromLocalStorage = JSON.parse(localStorage.getItem("BookingDetails"))
        const { ScheduleDate, ScheduleTime } = dataFromLocalStorage
        // console.log(ScheduleDate, ScheduleTime)

        // const formattedDate = dayjs(ScheduleDate).format('YYYY-MM-DD');
        // const formattedTime = dayjs(ScheduleTime).format('HH:mm:ss')
        // console.log(formattedDate, formattedTime)
        // console.log(JSON.parse(localStorage.getItem('BookingDetails')))
        navigate('/ticket')
    }

    return (
        <>
            <Container>
                <Typography m={2} component={'h6'} variant='h4' fontWeight={'Bold'}>Booking Details</Typography>

                <Box p={6} sx={{ border: '1px solid grey' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Choose Date */}
                        {/* <input type="date" {...register("ScheduleDate")} /> */}
                        <Controller
                            name="ScheduleDate"
                            control={control}
                            render={({ field }) => (<><LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker {...field} />
                            </LocalizationProvider></>)}
                        />

                        {/* Choose Time */}
                        {/* <input type="time" {...register("ScheduleTime")} /> */}
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
                            {/* <Link to="/ticket">Submit</Link> */}
                        </Button>

                    </form>
                </Box>

            </Container>

        </>
    )
}

export default BookingDetails