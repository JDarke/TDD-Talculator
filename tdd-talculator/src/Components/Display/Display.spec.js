import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';
import FormulaScrn from '../FormulaScrn/FormulaScrn'
import Value from '../Value/Value'

describe('Display', ()=> {
    let wrapper;
    beforeEach(()=> wrapper = shallow(<Display />));
 

    it('should render display class div', ()=> {
        expect(wrapper.find('.display').length).toEqual(1);
    })

    it('should render the FormulaScrn Component', () => {
        expect(wrapper.containsMatchingElement(<FormulaScrn />)).toEqual(true);
    });

    it('should render the Value Component', () => {
        expect(wrapper.containsMatchingElement(<Value />)).toEqual(true);
    });
})