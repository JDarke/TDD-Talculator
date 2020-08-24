import React from 'react';
import { shallow, mount } from 'enzyme';
import Buttons from './Buttons';

describe('Buttons', ()=> {
    let wrapper;
    let mockHandler;
    beforeEach(()=> wrapper = shallow(<Buttons />));


    it('should render the buttons class div', () => {
        expect(wrapper.find('.buttons').length).toEqual(1);
    });

    
    it('should have the correct props', () => {
        //expect(wrapper.props().toContain();
    });

    //it()

    //handleNum, handleSign, handleOp, handleEval, handleClr, handleDec
    beforeEach(
        () => {
            mockHandler = jest.fn();   
            wrapper = mount(<Buttons
                handleNum={mockHandler}
              />)
        }
      );
    
      it("should receive props from parent", () => {
        expect(wrapper.props().handleNum).toEqual(mockHandler);
      });
})