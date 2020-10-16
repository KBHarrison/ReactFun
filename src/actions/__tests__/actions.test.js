import React from 'react'
import { saveComment } from '../../actions'
import { SAVE_COMMENT } from '../../actions/types'

let action;

describe('saveComment', () => {
    beforeEach(() => {
        action = saveComment('Payload')
    })

    it('has the correct type', () => {
        expect(action.type).toEqual(SAVE_COMMENT);
    })
    it('has the correct payload', () => {
        expect(action.payload).toEqual('Payload')
    })
})