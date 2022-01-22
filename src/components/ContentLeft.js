import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import MessageBox from './MessageBox';
import ContactBox from './ContactBox';
import FAQBox from './FAQBox';
import '../styles/ContentLeft.css';

const ContentLeft = () => {
    return (
        <div className="left__container">
            <Tabs>
                <TabList className="tab__list">
                    <Tab>Message</Tab>
                    <Tab>Contact Info</Tab>
                    <Tab>FAQ</Tab>
                </TabList>

                <TabPanel>
                    <MessageBox />
                </TabPanel>
                <TabPanel>
                    <ContactBox />
                </TabPanel>
                <TabPanel>
                    <FAQBox />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default ContentLeft;
