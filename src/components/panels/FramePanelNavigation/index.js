import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import {frameSetVariant} from 'store/actions/frame'
import FrameNavigation from './FrameNavigation'

const FramePanelNavigation = (props) => {
    const [workingDatas, setWorkingDatas] = useState([])

    useEffect(()=> {
        if(props.variant.hasOwnProperty('body')){
            setWorkingDatas(props.variant.body.creativeList);
        }
    }, [props.variant])

    return (
        <div>
            {workingDatas.filter(item => {
                if(item.hasOwnProperty('workingData')){
                    return item;
                }
            }).map((item, i) => {
                return (
                    <div key={i}>
                        <FrameNavigation frames={item.workingData.frames} />
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = ({frame}) => ({
    variant: frame.variant
})

const mapDispatchToProps = dispatch => {
    return {
        onFrameSetVariant: () => {
            dispatch(frameSetVariant());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FramePanelNavigation)
