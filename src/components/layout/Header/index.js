import React from 'react';

import FramePanelNavigation from 'components/panels/FramePanelNavigation';


const Header = () => {
    return (
        <React.Fragment>
            <div>Frames</div>
            <div>
                <div>
                    <FramePanelNavigation />
                </div>
                <div>Copy buttons</div>
            </div>
        </React.Fragment>
    )
}

export default Header