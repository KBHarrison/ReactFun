import React from 'react'
import { mount } from 'enzyme'
import CommentList from '../CommentList'
import Root from '../../Root'

let wrapped;
beforeEach(() => {

    const initialState = {
        comments: ['C1', 'C2']
    }

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

it('creates one list item per comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
})

it('makes sure rendering happens', () => {
    expect(wrapped.render().text()).toContain('C1')
    expect(wrapped.render().text()).toContain('C2')
})