import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import tableView from './tableView.js';

const TableContent = (props) => {
    const contentFrame = props.frame.content;
    const ViewData = ({keyValue, content}) => {
        for(let i in props.columns){
            if(props.columns[i].keyName === keyValue){
                return <td className={props.columns[i].isHidden ? 'hidden' : ''}>{content}</td>
            }
        }
        return <td></td>
    }

    return (
        <table>
            <thead>
                <tr>
                    {tableView.map((item, i) => {
                        return <th key={i}>{item.th}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {props.frame.content && (
                    <tr>
                        {tableView.map((item, i) => {
                            return (
                                <ViewData 
                                    key={i}
                                    keyValue={item.key} 
                                    content={contentFrame[item.key]}
                                />
                            )
                        })}
                    </tr>
                )}
            </tbody>
        </table>
    )
}

const mapStateToProps = ({frame}) => ({
    id: frame.id,
    frame: frame.frame,
    frameIdSelected: frame.frameIdSelected,
    columns: frame.columns,
    variant: frame.variant
})

export default connect(
    mapStateToProps,
    null
)(TableContent)