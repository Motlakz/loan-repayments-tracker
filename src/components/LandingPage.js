import React, { useState } from 'react';
import Sidebar from './Sidebar';
import RepaymentsTracker from './RepaymentsTracker';

function LandingPage() {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <> 
            <div className="flex">
                {sidebarVisible && <Sidebar />}
                <button 
                    className="toggle-btn h-24 mt-20 p-2 bg-purple-300 hover:text-white hover:bg-purple-400 text-purple-600"
                    onClick={toggleSidebar}
                >
                    Toggle Sidebar
                </button>
                <RepaymentsTracker />
            </div> 
        </>
    );
}

export default LandingPage;
