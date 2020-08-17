import React from 'react';
import { shallow } from 'enzyme';
import Value from './Value';

describe('Value', ()=> {
    let wrapper;
    beforeEach(()=> wrapper = shallow(<Value />));


    it('should render the output class div', ()=> {
        expect(wrapper.find('.output').length).toEqual(1);
    })
})