import React from 'react';
import { Link } from 'react-router-dom';

const TemrsCondition = () => {
    return (
        <div>
            <h2>Terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim qui reprehenderit quasi, voluptas minima et sapiente. Perferendis iste velit expedita quia ex minima quas reiciendis quidem, excepturi explicabo, aspernatur accusamus!</p>

            <p>Go Back to <Link to="/register"> Register</Link></p>
        </div>
    );
};

export default TemrsCondition;