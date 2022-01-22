import React from 'react'
import { VscChevronRight } from 'react-icons/vsc';
import '../styles/InquiryBox.css';

const InquiryBox = ({ question }) => {
    return (
        <div className="inquiry__container FAQ__container">
            <div className="cta__title">
                <h3 className="inquiry__title message__title">{question}</h3>
            </div>
            <div className="answer">
                <div className="answer__text">
                    <p>Lorem ipsum dolor sit amet, has ea unum affert. At usu clita admodum, ponderum contentiones ea eum. Legere ignota sit te.</p>
                    <p>Pri modo scripserit no. Eu dicat novum cum.</p>
                </div>
                <div className="chevron__icon">
                    <VscChevronRight className="chevron" />
                </div>
            </div>

        </div>
    )
}

export default InquiryBox;
