import { BiEdit } from 'react-icons/bi';
import { RiErrorWarningFill } from 'react-icons/ri';
import { FaExclamationCircle } from 'react-icons/fa';
import { ImShuffle } from 'react-icons/im';
import { FaQuestionCircle } from 'react-icons/fa';
import { BiCalendarCheck } from 'react-icons/bi';
import { AiFillTag } from 'react-icons/ai';
import '../styles/ContentRight.css';
import LoginIssue from './LoginIssue';

const ContentRight = () => {
    return (
        <div className="right__container">
            <div className="options__container">
                <div className="options">
                    <div className="edit__display">
                        <div className="edit__icon">
                            <BiEdit />
                        </div>
                        <h3 className="title">Edit</h3>
                    </div>
                    <div className="status__display">
                        <div className="status__icon">
                            <FaExclamationCircle />
                        </div>
                        <h3 className="title">Change Status</h3>
                    </div>
                    <div className="merge__display">
                        <div className="merge__icon">
                            <ImShuffle />
                        </div>
                        <h3 className="title">Merge</h3>
                    </div>
                    <div className="FAQ__display">
                        <div className="FAQ__icon">
                            <FaQuestionCircle />
                        </div>
                        <h3 className="title">Add to FAQ</h3>
                    </div>
                </div>
            </div>
            <div className="options__features">
                <div className="follow__up box">
                    <div className="follow__up__info">
                        <div className="follow__up__info__inner">
                            <div className="left__side">
                                <div className="gray__square"></div>
                                <div className="follow__up__title">
                                    <h3 className="title">Follow Up</h3>
                                </div>
                            </div>
                            <div className="right__side">
                                <div className="calendar__date">
                                    <p>April 10, 2017</p>
                                </div>
                            </div>
                        </div>
                        <button className="calendar__btn">
                            <BiCalendarCheck className="calendar__icon" />
                        </button>
                    </div>
                </div>
                <div className="tags box">
                    <div className="tags__info">
                        <div className="tags__info__inner">
                            <div className="left__side">
                                <div className="tag__icon">
                                    <AiFillTag />
                                </div>
                                <div className="tags__title">
                                    <p className="title" id="tag__caption">Add Tags</p>
                                </div>
                            </div>
                        </div>
                        <button className="add__btn">Add</button>
                    </div>
                </div>
            </div>
            <LoginIssue />
        </div>
    )
}

export default ContentRight;
