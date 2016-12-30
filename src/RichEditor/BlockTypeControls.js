import React, {PropTypes} from 'react';
import Button from './Button/Button';
import Draft from 'draft-js';
import Immutable from 'immutable';

const blockRenderMap = Immutable.Map({
    'ALIGN-LEFT': {
        wrapper: <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            }}/>
    },
    'ALIGN-RIGHT': {
        wrapper: <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: 'flex-end'
            }}/>
    },
    'ALIGN-CENTER': {
        wrapper: <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: 'center'
            }}/>
    },
    'ALIGN-JUSTIFY': {
        wrapper: <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignItems: 'stretch'
            }}/>
    }
});

export const extendedBlockRenderMap = Draft
    .DefaultDraftBlockRenderMap
    .merge(blockRenderMap);

const BLOCK_TYPES = [
    {
        label: 'H1',
        type: 'header-one'
    }, {
        label: 'H2',
        type: 'header-two'
    }, {
        label: 'H3',
        type: 'header-three'
    }, {
        label: 'H4',
        type: 'header-four'
    }, {
        label: 'H5',
        type: 'header-five'
    }, {
        label: 'H6',
        type: 'header-six'
    }, {
        icon: 'quote-right',
        type: 'blockquote'
    }, {
        icon: 'list-ul',
        type: 'unordered-list-item'
    }, {
        icon: 'list-ol',
        type: 'ordered-list-item'
    }, {
        icon: 'code',
        type: 'code-block'
    }, {
        icon: 'align-left',
        type: 'ALIGN-LEFT'
    }, {
        icon: 'align-center',
        type: 'ALIGN-CENTER'
    }, {
        icon: 'align-right',
        type: 'ALIGN-RIGHT'
    }, {
        icon: 'align-justify',
        type: 'ALIGN-JUSTIFY'
    }
];

const BlockTypeControls = (props) => {
    const {editorState} = props;
    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();

    return (
        <div className="blockTypeControls">
            {BLOCK_TYPES.map((item) => <Button
                key={item.label || item.icon}
                active={item.type === blockType}
                label={item.label}
                icon={item.icon}
                onToggle={props.onToggle}
                style={item.type}/>)}
        </div>
    );
};

BlockTypeControls.propTypes = {
    editorState: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default BlockTypeControls;