import React from 'react';
import { shallow } from 'enzyme';
import Buttons from './Buttons';

describe('Buttons', ()=> {
    let wrapper;
    beforeEach(()=> wrapper = shallow(<Buttons />));


    it('should render the buttons class div', ()=> {
        expect(wrapper.find('.buttons').length).toEqual(1);
    });
    
})