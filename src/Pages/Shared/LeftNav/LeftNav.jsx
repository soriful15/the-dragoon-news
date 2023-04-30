import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftEditorInsights from './LeftEditorInsights';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5005/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))

    }, [])


    return (
        <div>
            <h4> all categories</h4>
            <div className='ps-4'>

                {
                    categories.map(category => <p
                        key={category.id}>

                        <Link to={`category/${category.id}`} className='text-black text-decoration-none '>{category.name}</Link>
                
                    </p>)
                }
            </div>
<div>
    <LeftEditorInsights></LeftEditorInsights>
</div>
        </div>
    );
};

export default LeftNav;