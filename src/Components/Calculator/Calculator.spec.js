import React from 'react';
import { shallow, mount } from 'enzyme';
import Calculator from './Calculator';
import Display from '../Display/Display';
import Buttons from '../Buttons/Buttons';

describe('Calculator', ()=> {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Calculator />));

    it('should render the container class div', ()=> {
        expect(wrapper.find('.container').length).toEqual(1);
    });

    it('should render the calculator class div', ()=> {
        expect(wrapper.find('.calculator').length).toEqual(1);
    });

    it('should render the h1 title', ()=> {
        expect(wrapper.find('h1').length).toEqual(1);
    });

    it('should render the Display Component', () => {
        expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
    });

    it('should render the Buttons Component', () => {
        expect(wrapper.containsMatchingElement(<Buttons />)).toEqual(true);
    });

    it('should render the author class div', ()=> {
        expect(wrapper.find('.author').length).toEqual(1);
    });
   
})