import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import dayjs from 'dayjs';


const Ticket = () => {

    const userData = localStorage.getItem("PersonalDetails")
    const username = userData ? JSON.parse(userData) : {}
    const scheduleData = localStorage.getItem("BookingDetails")
    const schedule = scheduleData ? JSON.parse(scheduleData) : {}


    return (
        <>
            <Container>
                <Typography m={2} component={'h6'} variant='h4' fontWeight={'Bold'}>Ticket</Typography>
                <Box p={6} sx={{ border: '1px solid grey' }}>

                    {/* Display messsage with name, date & time */}
                    <Typography fontStyle={"italic"} component={'p'} variant='h5'>Hi {username.Name}, your booking is scheduled at {dayjs(schedule.ScheduleDate).format('YYYY-MM-DD')} at {dayjs(schedule.ScheduleTime).format('HH:mm:ss')}.</Typography>

                    <Typography component={'h6'} variant='h4' fontWeight={'Bold'} fontStyle={'italic'}>Thank You</Typography>
                </Box>
            </Container>
        </>
    )
}

export default Ticket