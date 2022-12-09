import React from 'react'

// import useStyles from './styles.js';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material'

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {
    // const classes=useStyles();
    return (
        <Card>
            <CardActionArea href={url} target="_blank" style={{padding:'8px'}}>
                <CardMedia component="img" height="250" image={urlToImage || "https://getmemetemplates.com/wp-content/uploads/2022/10/Sorry-english-1024x823.jpg"} title={title} />
                <div>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2" align="right">{source.name}</Typography>
                </div>
                <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" href={url}>Learn More</Button>
                <Typography variant="h5" color="textSecondary" component="h2" align="right">{i + 1}</Typography>
            </CardActions>

        </Card>
    )
}

export default NewsCard;