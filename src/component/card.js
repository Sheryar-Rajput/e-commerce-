import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function MediaCard(props) {
    const src = props.src
    return (
        <Card sx={{
            maxWidth: 320, boxShadow: '0px 10px 19px 3px rgba(189,189,189,0.91)', borderRadius: 5,
        }}>
            <CardMedia
                component="img"
                height="160"
                image={src}
                alt="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    Rs.1500
                </Typography>
                <Typography variant="body2" color="text.secondary">

                    100% Original & Genuine . All are inspected by our team for originality and quality.
                </Typography>
            </CardContent>

            <AddShoppingCartIcon sx={{ ml: 2 }} />
        </Card>
    );
}
