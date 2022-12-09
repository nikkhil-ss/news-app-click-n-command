import React from 'react'
import { Grid, Grow } from '@mui/material'
import NewsCard from '../NewsCard/NewsCard'
// import useStyles from './style';

const infocards=[
  {color: "blue", title: 'Latest News', text: "Give me the Latest news"},
  {color: "blue", title: 'News byy category', info: "Business, Entertainment, Science"},
  {color: "blue", title: 'News by Terms', info: "Bitcoin, Smartphone, Technology"},
  {color: "blue", title: 'News byy Sources', source: "CNN, Wired, BBC News, Time, IGN, Buzzfeed", command: "Give me the news form (source)"}
]

const NewsCards = ({ articles }) => {
  // const classes = useStyles();

  if(!articles.length){
    return (
      <Grow in>
      <Grid   width="100%" padding="0 5%" margin="0" container alignItems="stretch" spacing={3}>

        test
      </Grid>

      </Grow>
    )
  }

  return (
    <Grow in>
      <Grid   width="100%" padding="0 5%" margin="0" container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ disply: 'flex' }}>
            <NewsCard article={article} i={i} />
          </Grid>

        ))}
      </Grid>


    </Grow>
  );
}
export default NewsCards;