import React from 'react'
import './Feedback.css';
import { StarFilled, StarOutlined } from '@ant-design/icons';

function Feedback() {
    return (
        <div className="feedbackGet">
            <div className="feedbackfull">
                <div className="round"><p style={{marginLeft:2,marginTop:7}}>AC</p></div>
                <div className="feedDetails">
                    <div>Ankit Chile</div>
                    <div className="yellowStars">
                        <StarFilled style={{color:'yellow'}}/>
                        <StarFilled style={{color:'yellow'}}/>
                        <StarFilled style={{color:'yellow'}}/>
                        <StarOutlined style={{color:'grey'}}/>
                        <StarOutlined style={{color:'grey'}}/>                    
                    </div>
                    <div>Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.</div>
                </div>
            </div>
        </div>
    )
}

export default Feedback
