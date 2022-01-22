import ContactBoxSections from './ContactBoxSections';
import ContactInfoProps from './ContactInfoProps';
import TicketHistory from './TicketHistory';
import TicketHistoryProps from './TicketHistoryProps';
import '../styles/ContactBox.css';

const ContactBox = () => {
    return (
        <div className="content__container">
            <div className="contact__container message__container">
                <ContactBoxSections sectionTitle="CONTACT" />
                <ContactInfoProps leftName="Name" leftValue="John Doe" rightName="Department" rightValue="Sales" />
                <ContactInfoProps leftName="Email" leftValue="johndoe@gmail.com" rightName="Reports To" rightValue="Ashley" />
                <ContactInfoProps leftName="Phone" leftValue="123.456.7890" rightName="Notify Owner" rightValue="No" />
                <ContactInfoProps leftName="Account" leftValue="Deer Funds" rightName="Modified" rightValue="Yesterday" />
                <ContactInfoProps leftName="Title" leftValue="1 Hour" rightName="Created" rightValue="March 02, 2017" />

                <div style={{ margin: '1rem 0' }}>
                    <ContactBoxSections sectionTitle="ADDRESS INFORMATION" />
                    <ContactInfoProps leftName="Street" leftValue="1 Broad Street" rightName="PO Box" rightValue="1300" />
                    <ContactInfoProps leftName="City" leftValue="Philadelphia" rightName="State" rightValue="PA" />
                    <ContactInfoProps leftName="Postal Code" leftValue="19013" rightName="Country" rightValue="US" />
                </div>

                <ContactBoxSections sectionTitle="TROUBLE TICKET HISTORY" />
                <TicketHistory />
                <TicketHistoryProps name="Trouble Ticket 1" status="Received" dateTime="Received" />
                <TicketHistoryProps name="Trouble Ticket 2" status="Low" dateTime="Low" />
                <TicketHistoryProps name="Trouble Ticket 3" status="Open" dateTime="Open" />
                <TicketHistoryProps name="Trouble Ticket 4" status="1 Hour" dateTime="1 Hour" />
                <TicketHistoryProps name="Trouble Ticket 5" status="1 Hour" dateTime="1 Hour" />

            </div>
        </div>
    )
}

export default ContactBox;
