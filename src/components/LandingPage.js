import React from 'react';
import RepaymentsTracker from './RepaymentsTracker';
import Sidebar from './Sidebar';

function LandingPage() {
    return (
        <> 
            <div className="flex">
                <Sidebar />
                <RepaymentsTracker />
            </div> 
        </>
    );
}

export default LandingPage;
