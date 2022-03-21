import React, { useContext } from 'react'; 
import './Review.css'

const Review = React.memo((props) => {

 
    console.log("RENDER FROM REVIEW");
    return (

        <div className='Review'>
            {props.comment}
            
        </div>

    );

})

export default Review;