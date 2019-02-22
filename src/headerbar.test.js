import React from 'react';
import {shallow, mount} from 'enzyme';

import HeaderBar from './components/headerbar';

describe('<HeaderBar/>', () => {
    it('Renders without crashing', () => {
        shallow(<HeaderBar />);
    });

});