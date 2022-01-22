import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import InnerTabPanelContent from './InnerTabPanelContent';
import { FaTimes } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

const TabContent = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>
                    <div className="ticket__title">Ticket 1
                    <FaTimes size={15} className="icon" />
                    </div>
                </Tab>
                <Tab>
                    <div className="ticket__title">Ticket 2
                    <FaTimes size={15} className="icon" />
                    </div>
                </Tab>
                <Tab>
                    <div className="ticket__title">Ticket 3
                    <FaTimes size={15} className="icon" />
                    </div>
                </Tab>
                <Tab>
                    <div className="ticket__title">Add New
                        <FaPlus size={15} className="icon" />
                    </div>
                </Tab>
            </TabList>

            <TabPanel>
                <InnerTabPanelContent />
            </TabPanel>
            <TabPanel>
                <InnerTabPanelContent />
            </TabPanel>
            <TabPanel>
                <InnerTabPanelContent />
            </TabPanel>
            <TabPanel></TabPanel>
        </Tabs>
    )
}

export default TabContent;
