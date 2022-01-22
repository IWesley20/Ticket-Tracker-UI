import '../styles/LoginIssue.css';
import LoginIssueProps from './LoginIssueProps';

const LoginIssue = () => {
    return (
        <div className="issue__container">
            <div className="cta__title issue__container__inner">
                <h3 className="message__title">LOGIN ISSUE</h3>
                <LoginIssueProps title="Ticket Duration" value="1 Hour" />
                <LoginIssueProps title="Email Thread Status" value="Received" />
                <LoginIssueProps title="Priority" value="Low" />
                <LoginIssueProps title="Status" value="Open" />
                <LoginIssueProps title="Type" value="1 Hour" />
                <LoginIssueProps title="Watchers" value="John Doe" />
                <LoginIssueProps title="Tags" value="General" />
                <LoginIssueProps title="Related Account" />
                <LoginIssueProps title="Related Contact" />
                <LoginIssueProps title="Email" />
                <LoginIssueProps title="Assigned To" />
            </div>
        </div>
    )
}

export default LoginIssue;
