import React from 'react';
import {shallow, mount} from 'enzyme';
import sampleResults from './sampleResults';

import ResultCard from './components/resultcard';
import {Card} from 'react-bootstrap'
    
describe('<ResultCard />', () => {

    //new tab opens when a result url is clicked
    it('new tab is opened when a result url is clicked', () => {
        const wrapper = shallow(<ResultCard result={sampleResults[0]}/>);
        //finished test here
    })

    //card text sections are displayed as expected from results object
    it('card properly displays results data', () => {
        const wrapper = shallow(<ResultCard result={sampleResults[0]}/>);

        const nameText = wrapper.find('.results-card-header').text()
        expect(nameText).toEqual(sampleResults[0].name)
        
        const cityText = wrapper.find('.results-city-header').text()
        expect(cityText).toEqual(sampleResults[0].city)

        const breweryTypeText = wrapper.find('.results-brewery-type').text();
        expect(breweryTypeText).toEqual(`Brewery Type: ${sampleResults[0].brewery_type}`)

        const urlText = wrapper.find('.results-url').props().href
        expect(urlText).toEqual(sampleResults[0].website_url)

    } )
    

})