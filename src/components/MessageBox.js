import { GiPaperClip } from 'react-icons/gi';
import { BsReplyFill } from 'react-icons/bs';
import { ImArrowRight } from 'react-icons/im';
import '../styles/MessageBox.css';

const MessageBox = () => {
    return (
        <div className="content__container">
            <div className="message__container">
                <div className="message__header">
                    <div className="cta__title">
                        <h3 className="message__title">Help! Issues Logging In</h3>
                    </div>
                    <div className="attachment">
                        <GiPaperClip className="clip" />
                    </div>
                </div>
                <div className="message__body">
                    <div className="opening__text">
                        <div className="top">
                            <p>Hello Support,</p>
                        </div>
                        <span id="date">March 08, 2017 2:03 PM</span>
                    </div>
                    <div className="middle">
                        <p className="issue">I am unable to login to my account. I tried resetting me password but I still cannot login. Can you please help.</p>
                    </div>
                    <div className="bottom">
                        <p>Thank you,</p>
                        <p>Customer</p>
                    </div>
                    <div className="message__buttons">
                        <div className="reply__btn">
                            <button>
                                <BsReplyFill className="reply" />
                            </button>
                        </div>
                        <div className="forward__btn">
                            <button>
                                <ImArrowRight className="forward" />
                            </button>
                        </div>
                        <div className="comment__btn">
                            <button>Comment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageBox;
