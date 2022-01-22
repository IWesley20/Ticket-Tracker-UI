const TicketHistoryProps = ({ name, status, dateTime }) => {
    return (
        <div className="ticket__history__container">
            <div className="values">
                <div className="left">
                    <div className="issue__title">
                        <p>{name}</p>
                    </div>
                </div>
                <div className="middle">
                    <div className="issue__title">
                        <p>{status}</p>
                    </div>
                </div>
                <div className="right">
                    <div className="issue__title">
                        <p>{dateTime}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TicketHistoryProps;
