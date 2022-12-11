import React from 'react';
import {Master as MasterLayout} from './layouts';
import HomeContent from './HomeContent';

function Home(props) {
    return (
        <MasterLayout
            {...props}
            pageTitle={Lang.get('navigation.dashboard')}
        >
            <HomeContent/>
        </MasterLayout>
    );
}

export default Home;
