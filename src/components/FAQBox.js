import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import '../styles/FAQBox.css';
import InquiryBox from './InquiryBox';

const FAQBox = () => {
    const [input, setInput] = useState("");

    return (
        <div id="FAQ__container__outer" className="content__container">
            <div className="FAQ__container">
                <div className="FAQ__searchbox">
                    <div className="input__text">
                        <input type="text" placeholder="Search FAQs" onChange={e => setInput(e.target.value)} />
                        {!input.length && <BiSearch className="search" />}
                    </div>
                </div>
            </div>
            <InquiryBox question="What is delyte?" />
            <InquiryBox question="What are tags?" />
            <InquiryBox question="What is an account?" />
            <InquiryBox question="How do I assign a contact?" />
            <InquiryBox question="How do I set ticket priority?" />
            <InquiryBox question="Question Title Displayed Here?" />
            <InquiryBox question="Question Title Displayed Here?" />
        </div>
    )
}

export default FAQBox;
