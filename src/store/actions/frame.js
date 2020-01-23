import * as server from 'back-end/server.js';

export const FRAME_SET_ERROR = 'frame/SET_ERROR'; 
export const FRAME_SET_ID = 'frame/SET_ID';
export const FRAME_SET_VARIANT = 'frame/SET_VARIANT';
export const SET_FRAME = 'frame/SET_FRAME';

export function frameSetID(data) {
    return ({ 
        type: FRAME_SET_ID,
        id: data
    });
}

export function frameSetVariant() {
    return dispatch => {
        server.mockFetch('/variant').then(res => {
            if(res.hasOwnProperty('error')){
                dispatch(frameSetError(res.error));
            } else {
                dispatch(frameSetDataVariantSuccess(res));
            }
        })
    }
}

export function setFrame(frame) {
    return dispatch => {
        server.mockFetch('/columns').then(res => {
            if(res.hasOwnProperty('error')){
                dispatch(frameSetError(res.error));
            } else {
                dispatch(frameSetDataColumnsSuccess(res, frame));
            }
        })
    }
}

const frameSetError = (data) => ({
    type: FRAME_SET_ERROR,
    payload: {
        data: data
    } 
})

const frameSetDataVariantSuccess = (data) => ({
    type: FRAME_SET_VARIANT,
    payload: {
      data: data
    }
});

const frameSetDataColumnsSuccess = (data, frame) => ({
    type: SET_FRAME,
    payload: {
        data: data,
        frame: frame,
        id: frame.frameId,
    }
});







            