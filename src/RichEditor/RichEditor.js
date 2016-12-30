import React, {Component} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import './RichEditor.css';
import InlineStyleControls from './InlineStyleControls';
import BlockTypeControls, {extendedBlockRenderMap} from './BlockTypeControls';
import customStyleMap from './customStyleMap';

class RichEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        };

        this._onChange = this
            ._onChange
            .bind(this)

        this._onToggleInlineStyle = this
            ._onToggleInlineStyle
            .bind(this)

        this._onToggleBlockType = this
            ._onToggleBlockType
            .bind(this)
    }

    _onChange(editorState) {
        this.setState({editorState});
    }

    _onToggleInlineStyle(style) {
        switch (style) {
            case 'BOLD':
            case 'ITALIC':
            case 'UNDERLINE':
            case 'CODE':
            case 'STRIKETHROUGH':
                this._onChange(RichUtils.toggleInlineStyle(this.state.editorState, style));
                break;

            default:
                console.log('unknown style (Did you forget to declare a new style in the RichEditor.js?)', style);
        }
    }

    _onToggleBlockType(type) {
        switch (type) {
            case 'header-one':
            case 'header-two':
            case 'header-three':
            case 'header-four':
            case 'header-five':
            case 'header-six':
            case 'blockquote':
            case 'unordered-list-item':
            case 'ordered-list-item':
            case 'code-block':
            case 'ALIGN-LEFT':
            case 'ALIGN-RIGHT':
            case 'ALIGN-CENTER':
            case 'ALIGN-JUSTIFY':
                console.log(type);
                this._onChange(RichUtils.toggleBlockType(this.state.editorState, type));
                break;

            default:
                console.log('unknown style (Did you forget to declare a new type in the RichEditor.js?) ', type);
        }
    }

    render() {
        const {editorState} = this.state;

        return (
            <div className='richEditor'>
                <div className='panel'>
                    <InlineStyleControls
                        editorState={editorState}
                        onToggle={this._onToggleInlineStyle}/>
                    <BlockTypeControls
                        editorState={editorState}
                        onToggle={this._onToggleBlockType}/>

                </div>
                <div className='content'>
                    <Editor
                        blockRenderMap={extendedBlockRenderMap}
                        customStyleMap={customStyleMap}
                        editorState={editorState}
                        onChange={this._onChange}/>
                </div>
            </div>
        );
    }
}

export default RichEditor;