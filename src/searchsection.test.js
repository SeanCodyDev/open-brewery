import React from 'react';
import {shallow, mount} from 'enzyme';
import sampleResults from './sampleResults';

import SearchSection from './components/searchsection';
import {Button} from 'react-bootstrap'

describe('<SearchSection/>', () => {
  const regions = ['Alabama', 'Alaska', 'Arkansas'];
  const searchTerm = 'Alabama';
  let results = [{}]

    it('Renders without crashing', () => {
        
        shallow(<SearchSection regions={regions} searchTerm={searchTerm} results={results}/>);
    });

    //a test that confirms buttons are rendered for the regions
    it('Renders buttons for all of the provided regions', () => {
      const wrapper = mount(<SearchSection regions={regions} searchTerm={searchTerm} results={results} />);
      expect(wrapper.contains(<Button className="state-button" type="button">{regions[0]}</Button>))
      expect(wrapper.contains(<Button className="state-button" type="button">{regions[1]}</Button>))
      expect(wrapper.contains(<Button className="state-button" type="button">{regions[2]}</Button>))
    })

    //handleSubmit is called when a button is clicked
    it('calls handleSubmit when a search button is clicked', () => {
      const callback = jest.fn();
      const wrapper = mount(<SearchSection regions={regions} searchTerm={searchTerm} results={results} handleSubmit={callback} />);
      const searchBtn = wrapper.find('.search-button-list').find('button')
      searchBtn.simulate('click');
      expect(callback).toHaveBeenCalled();

    })

    //show menu button is rendered when there are results
    it('hideMenu button is rendered when there are results, showMenu button is rendered when a search button is clicked', () => {
      const callback = jest.fn();
      results = sampleResults;
      const wrapper = mount(<SearchSection regions={regions} searchTerm={searchTerm} results={results} handleSubmit={callback} />)
      const searchBtn = wrapper.find('.search-button-list').find('button')
      let btnTest = wrapper.find('.menu-button').find('button').text()
      expect(wrapper.contains(<Button className="menu-button">Hide Menu</Button>))
      expect(btnTest).toEqual('Hide Menu')

      searchBtn.simulate('click');
      btnTest = wrapper.find('.menu-button').find('button').text()
      expect(wrapper.contains(<Button className="menu-button">Show Menu</Button>))
      expect(btnTest).toEqual('Show Menu')
    })

});