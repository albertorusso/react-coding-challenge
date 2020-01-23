import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {frameSetID, frameSetVariant} from 'store/actions/frame'

import Header from 'components/layout/Header'
import Body from 'components/layout/Body'

const FramePage = (props) => {

    useEffect(() => {
        props.onFrameSetVariant()
       
    }, []);

    return (
        <React.Fragment>
            <Header />
            <Body />
            {props.error && alert(props.error)}
        </React.Fragment>
    )
}

const mapStateToProps = ({frame}) => ({
    id: frame.id,
    variant: frame.variant,
    error: frame.error
})

const mapDispatchToProps = dispatch => {
    return {
        onFrameSetID: (data) => {
            dispatch(frameSetID(data))
        },
        onFrameSetVariant: () => {
            dispatch(frameSetVariant());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FramePage)

