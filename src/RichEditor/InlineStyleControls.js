import React, {PropTypes} from 'react';
import Button from './Button/Button';

var INLINE_STYLES = [
    {
        icon: 'bold',
        style: 'BOLD'
    }, {
        icon: 'italic',
        style: 'ITALIC'
    }, {
        icon: 'underline',
        style: 'UNDERLINE'
    }, {
        icon: 'strikethrough',
        style: 'STRIKETHROUGH'
    }
];

const InlineStyleControls = (props) => {
    var currentStyle = props
        .editorState
        .getCurrentInlineStyle();

    return (
        <div className="inlineStyleControls">
            {INLINE_STYLES.map(item => <Button
                key={item.icon}
                active={currentStyle.has(item.style)}
                icon={item.icon}
                onToggle={props.onToggle}
                style={item.style}/>)}
        </div>
    );
};

InlineStyleControls.propTypes = {
    editorState: PropTypes.object.isRequired,
    onToggle: PropTypes.func.isRequired
}

export default InlineStyleControls;