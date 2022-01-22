import '../styles/TicketHistory.css';

const TicketHistory = () => {
    return (
        <div className="ticket__history__container">
            <div className="values">
                <div className="left">
                    <div className="issue__title">
                        <h3>Name</h3>
                    </div>
                </div>
                <div className="middle">
                    <div className="issue__title">
                        <h3>Status</h3>
                    </div>
                </div>
                <div className="right">
                    <div className="issue__title">
                        <h3>Date & Time</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketHistory;
