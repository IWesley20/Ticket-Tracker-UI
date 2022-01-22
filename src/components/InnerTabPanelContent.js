import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import '../styles/InnerTabPanelContent.css';

const InnerTabPanelContent = () => {
    return (
        <div className="inner__content">
            <div className="content__left">
                <ContentLeft />
            </div>
            <div className="content__right">
                <ContentRight />
            </div>
        </div>
    )
}

export default InnerTabPanelContent;