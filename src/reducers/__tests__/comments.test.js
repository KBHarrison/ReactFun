import commentsReducer from '../../reducers/comments'
import { SAVE_COMMENT } from '../../actions/types'
import comments from '../../reducers/comments'

it ('handles SAVE_COMMENT actions', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'Test Comment'
    }

    const newState = commentsReducer([], action)

    expect(newState).toEqual(['Test Comment']);
})

it ('handles action with unknown type', () => {
    const newState = commentsReducer([], {
        type: 'Unkonw type'
    })

    expect(newState).toEqual([]);
})