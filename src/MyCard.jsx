import {
    CardHeader,
    Typography,
    Button,
    Box,
    CardMedia,
    CardContent,
    CardActions,
    Card,
    Modal
} from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import { useState } from 'react'
import {boxStyle, textStyle} from './style.js'

const MyCard = () => {
    const [isOpen, setOpen] = useState(false)

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true)

    return (
        <Grid item xs={3}>
            <Card>
                <CardHeader
                    title="My Favorite Animal"
                    subheader="The legendary..."
                />
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />

                {/* ! Main stuff, writing or desciption */}
                <CardContent>

                    {/* ! Typography componenets are for text */}
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>

                </CardContent>

                {/* Actions are to store buttons and links */}
                <CardActions>
                    {/* HandleOpen will open the modal by changing the open state to true */}
                    <Button size="small" onClick={handleOpen}>Open Modal</Button>
                </CardActions>
            </Card>

            {/* Modal only shows when 'isOpen' is true */}
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={boxStyle}>
                    <Typography variant='h3' sx={textStyle}>
                        Thanks for looking at my favorite animal bro.
                    </Typography>
                </Box>
            </Modal>
        </Grid>
    )
}

export default MyCard