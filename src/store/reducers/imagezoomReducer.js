import { fromJS, Map } from 'immutable';
import * as actionTypes from '../actions/actionTypes';

export default function (storage) {
    const initialState = Map({
        imgUrl: '',
        imgShow: false
    });

    return function reducer(state = initialState, action) {
        switch (action.type) {
            // Each change to the redux store's behavior Map gets recorded to storage
            case actionTypes.IMG_SHOW: {
                return Map({
                    ...state,
                    imgShow: true,
                    imgUrl: action.imgUrl
                })
            }
            case actionTypes.IMG_CLOSE: {
                return Map({
                    ...state,
                    imgShow: false,
                    // imgUrl: ''
                })
                // return state.set('imgShow', false);
            }
            default:
                return state;
        }
    };
}
