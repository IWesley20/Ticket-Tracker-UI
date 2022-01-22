import { ImMinus } from 'react-icons/im';

const ContactBoxSections = ({ sectionTitle }) => {
    return (
        <div className="contact__header">
            <div className="cta__title">
                <h3 className="contact__title message__title">{sectionTitle}</h3>
            </div>
            <div className="minus__icon">
                <ImMinus className="minus" style={{ color: '#a6a6a6' }} size={10} />
            </div>
        </div>
    )
}

export default ContactBoxSections;
