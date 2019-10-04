import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormComponent from './index';
configure({adapter: new Adapter()});

const setUp = (props = {}) =>{
    const component = shallow(<FormComponent {...props} />);
    return component;
}

const findAtrrByClass = (component:any,classname:string) =>{
    const wrapper = component.find(classname);
    return wrapper;
}

describe('Form Component', ()=> {
    let component : any;
    beforeEach(() => {
        component = setUp();
    });
    
    it('Should Render without error' , () => {
        const wrapper = findAtrrByClass(component,'.formComp');
        expect(wrapper.length).toBe(1);
    });

    it('Should match Snapshot',()=> {
        const wrapper = findAtrrByClass(component,'.formComp');
        expect(wrapper.length).toBe(1);
        expect(component).toMatchSnapshot();
    });

    it('Should render Form',()=>{
        const wrapper = findAtrrByClass(component,'.nameForm');
        expect(wrapper.length).toBe(1);
    });

    it('Should capture name correctly onChange', function(){
        const component = mount(<FormComponent />);
        const wrapper = component.find('input').at(0);
        wrapper.simulate("change", { target: { value: "John Doe" } });
        component.update();
        expect(component.find('input').at(0).props().value).toEqual("John Doe");
    });

});