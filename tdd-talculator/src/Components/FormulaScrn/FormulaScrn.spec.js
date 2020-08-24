import React from 'react';
import { shallow, mount } from 'enzyme';
import FormulaScrn from './FormulaScrn';

describe('FormulaScrn', ()=> {
    let wrapper;
    beforeEach(()=> wrapper = shallow(<FormulaScrn />));


    it('should render formula class div', ()=> {
        expect(wrapper.find('.formula').length).toEqual(1);
    })


    beforeEach(
        () =>
          (wrapper = mount(
            <FormulaScrn formula={"testFormula"} />
          ))
      );
    
      it("should render formula class div with display text equal to formula prop", () => {
        expect(wrapper.find('.formula').text()).toEqual("testFormula");
      });
})