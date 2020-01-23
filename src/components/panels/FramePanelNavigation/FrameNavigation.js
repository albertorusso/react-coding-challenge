import React from 'react';
import {connect} from 'react-redux'
import {setFrame} from 'store/actions/frame'

const FrameNavigation = (props) => {

    const Button = ({frame}) => {
        return (
            <button onClick={() => props.onSetFrame(frame, frame.frameId)}>{frame.frameId}</button>
        )
    }

    return (
        <React.Fragment>
            <Button frame={props.frames.first} />
            {props.frames.middle.map((item, i) => {
                return (
                    <Button 
                        key={i}
                        frame={item}
                    />
                )
            })}
            <Button frame={props.frames.first}/>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSetFrame: (id) => {
            dispatch(setFrame(id));
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(FrameNavigation)
