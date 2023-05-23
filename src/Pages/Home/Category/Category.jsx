import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCards from '../NewsCards/NewsCards';
import UseTitle from '../../../Hooks/useTitile';

const Category = () => {
    const {id}=useParams();
UseTitle('Category')
    const categoryNews=useLoaderData();
    // console.log(categoryNews)
    return (
        <div>
           {id &&  <h2>This category News:{categoryNews.length}</h2>}

            {
                categoryNews.map(news=> <NewsCards
                key={news._id}
                news={news}
                
                ></NewsCards>)
            }
        </div>
    );
};

export default Category;