import {FRAME_SET_ID, FRAME_SET_VARIANT, SET_FRAME, FRAME_SET_ERROR} from 'store/actions/frame';

const INITIAL_STATE = {
    id: 'ID TEST',
    error: '',
    variant: {},
    frame: {},
    columns: [],
    frameIdSelected: ''
}

export default function frame(state = INITIAL_STATE, action) {

    switch (action.type) {
        case FRAME_SET_ERROR: 

            return {
                ...state,
                error: action.payload.data.toString() === 'Error: 500' ? 'Error' : 'You are not authorized'
            }
        case FRAME_SET_ID:
  
            return {
                ...state,
                id: action.id
            }

        case FRAME_SET_VARIANT: {

            return {
                ...state,
                variant: action.payload.data,
            }
        }

        case SET_FRAME: {

            const filterColumns = action.payload.data.body.filter(item => {
                if(item.parentFrameId === action.payload.id){
                    return item
                }
            })

            return {
                ...state,
                columns: filterColumns,
                frame: action.payload.frame,
                frameIdSelected: action.payload.id
            }
        }
     
        default:
            return state
    }
}