const LoginIssueProps = ({ title, value = "" }) => {
    return (
        <div className="issue__properties">
            <div className="issue__title">
                <h3>{title}</h3>
            </div>
            <div className="issue__value">
                <p>{value}</p>
            </div>
        </div>
    )
}

export default LoginIssueProps;
