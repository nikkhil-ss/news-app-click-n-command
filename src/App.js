import React, { useState ,useEffect } from 'react';
import alanbtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';


const App = () => {
    const [newsArticles, setNewsArticles]= useState([]);
    useEffect(() => {
        alanbtn({
            key: '6f4501b7fecfbda2f62a2e88d54dd21a2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: ({ command, articles }) => {
                if (command === 'newHeadlines') {
                    console.log(articles);
                    setNewsArticles(articles);
                }

            },

        });
    }, [])


    return (
        <div>
            <h1> Alan AI news Application</h1>
            <NewsCards articles={newsArticles}></NewsCards>
            <h1>what does this app do/ what is this app</h1>
            <h2>to get headlines say "give me the news from "</h2>
        </div>
    );
}

export default App;
