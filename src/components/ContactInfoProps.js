const ContactInfoProps = ({ leftName, leftValue, rightName, rightValue }) => {
    return (
        <div className="contact__properties issue__properties">
            <div className="left">
                <div className="issue__title">
                    <h3>{leftName}</h3>
                </div>
                <div className="issue__value">
                    <p>{leftValue}</p>
                </div>
            </div>
            <div className="right">
                <div className="issue__title">
                    <h3>{rightName}</h3>
                </div>
                <div className="issue__value">
                    <p>{rightValue}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfoProps;
