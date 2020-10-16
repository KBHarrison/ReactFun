import React from 'react'
import CommentBox from "../CommentBox"
import { mount } from 'enzyme'
import Root from '../../Root'

let wrapped;
beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>)
})

afterEach(() => {
    wrapped.unmount();
})


it("Has an input box and 2 buttons", () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
});

describe('the text area', () => {

    beforeEach(() => {
        let event = {
            target: {
                value: "New Comment"
            }
        }
        wrapped.find('textarea').simulate('change', event)
        wrapped.update()
    });
    
    it("Has a text area where users can type", () => {    
        expect(wrapped.find('textarea').prop("value")).toEqual("New Comment")
    });
    
    it("Empties the text area on submit", () => {
        wrapped.find('form').simulate('submit', null);
        wrapped.update();
    
        expect(wrapped.find('textarea').prop("value")).toEqual("")
    });
    
})

