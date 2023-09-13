import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard() {
    

    return (
        <Card sx={{
            maxWidth: 550,
            padding: 1,
            borderRadius: 2
        }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    TaskTracker.com
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Welcome to our TaskTracker! Stay organized, boost productivity, and manage your tasks effortlessly. Create, update, and track your to-do items with ease. Never forget an important task again. Start managing your tasks now!
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" href="/signin">
                    Get Started
                </Button>
            </CardActions>
        </Card>
    );
}
