import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar,FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';
const NewsCards = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news
    return (
        <>

            <Card className=" mb-4">
                <Card.Header>
                    <div className='d-flex align-items-center'>
                        <div>
                            <Image style={{ height: '40px', }} src={author ? author.img : 'No Image '} roundedCircle />
                        </div>

                        <div className='ps-2 flex-grow-1'>
                            <p className='mb-0'>{author?.name}</p>
                            <p> {moment(author?.published_date).format("yyyy-MM-D ")}</p>
                        </div>

                        <div className=''>
                            <FaRegBookmark />
                            <FaShareAlt />
                        </div>

                    </div>





                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {details.length < 250 ? <>{details}</> :
                            <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex  align-items-center">



                    <div className='flex-grow-1'>
                        <Rating
                            placeholderRating={rating?.number}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar> }
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>}
                        /><span> {rating?.number}</span>
                    </div>

                    <div>
                        <FaEye></FaEye>{total_view}
                    </div>


                </Card.Footer>
            </Card>


        </>
    );
};

export default NewsCards;