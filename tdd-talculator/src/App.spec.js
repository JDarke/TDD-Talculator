import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Calculator from './Components/Calculator/Calculator';




describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    

    it('should render the Calculator Component', () => {
        expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
    });
});
  