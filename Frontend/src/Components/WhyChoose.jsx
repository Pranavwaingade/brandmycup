import React from 'react'
import bg from '../img/sideimg.png'
import '../Style/WhyChoose.css'
import feedbackbox from './feedbackbox'

const WhyChoose = () => {

    const feedbackList = [
        { id: 'fb-101', customer: 'Alice', rating: 5, comment: 'Amazing service! Highly recommend.' },
        { id: 'fb-102', customer: 'Bob', rating: 4, comment: 'Very good, but shipping took an extra day.' },
        { id: 'fb-103', customer: 'Charlie', rating: 5, comment: 'The product exceeded my expectations.' },
        { id: 'fb-102', customer: 'Bob', rating: 4, comment: 'Very good, but shipping took an extra day.' },
        { id: 'fb-103', customer: 'Charlie', rating: 5, comment: 'The product exceeded my expectations.' }
    ];
    return (
        <>
            <div className="whychoose">
                <div className="Feedback">
                    <div className="heading">
                        <h2 style={{ color: 'black' }}>What Client Say</h2> <h2 style={{ color: ' #8d4a23' }}> About Us?</h2>
                    </div>
                    <div className="Customerfeed">
                        {feedbackList.map((item) => (
                            <div key={item.id} className="feedback-card">
                                <div className="inbox">
                                    <h3>{item.customer}</h3>
                                    <p className="rating">{'⭐'.repeat(item.rating)}</p>
                                    <p>"{item.comment}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default WhyChoose