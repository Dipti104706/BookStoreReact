import React from 'react'
import './Feedback.css';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function Feedback(props) {
    
    return (
        <div className="feedbackGet">
            <div className="feedbackfull">
                <div className="round"><p style={{marginLeft:2,marginTop:7}}>AC</p></div>
                <div className="feedDetails">
                    <Typography component="legend">{props.allFeedbacks.user.name}</Typography>
                    <Rating name="disabled" value={props.allFeedbacks.ratings} disabled />
                    <div>{props.allFeedbacks.comments}</div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
