import React from 'react';
import { shallow } from 'enzyme';
import FormulaScrn from './FormulaScrn';

describe('FormulaScrn', ()=> {
    let wrapper;
    beforeEach(()=> wrapper = shallow(<FormulaScrn />));


    it('should render formula class div', ()=> {
        expect(wrapper.find('.formula').length).toEqual(1);
    })
})