import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import EditorInsights from '../EditorInsights/EditorInsights';
import UseTitle from '../../../Hooks/useTitile';
const News = () => {
    const news=useLoaderData()
    console.log(news)
UseTitle('News Details')
    const {image_url,details,title,category_id}=news
    return (
        <>
         <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {details}
        </Card.Text>
       <Link to={`/category/${category_id}`}> <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
      </Card.Body>
    </Card>


<div className='mt-5'>
    <EditorInsights></EditorInsights>
</div>

        </>
    );
};

export default News;