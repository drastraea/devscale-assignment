import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faHeading, faParagraph, faLink, faList, faStrikethrough, faListNumeric, faQuoteLeft, faRedo, faUndo, faFileCode, faHighlighter, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Toolbar = ({ editor }) => {
    const [showHeadingDropdown, setShowHeadingDropdown] = useState(false);
    const [showCodeDropdown, setShowCodeDropdown] = useState(false);
    const [showHighlightDropdown, setShowHighlightDropdown] = useState(false);

    if (!editor) {
        return null;
    }

    return (
        <div className="editor-toolbar sticky top-0 z-10 bg-white shadow-lg">
            <div className="editor-toolbar-button">
                <button type="button"
                    onClick={() => editor.chain().focus().setParagraph().run()}
                    className={editor.isActive('paragraph') ? 'tb-button-active' : 'tb-button'}
                >
                    <FontAwesomeIcon icon={faParagraph} size="sm" />
                </button>
                
                <div className="dropdown">
                    <button type="button" onClick={() => setShowHeadingDropdown(!showHeadingDropdown)} className={editor.isActive('heading') ? 'tb-button-active' : 'tb-button'}>
                        <FontAwesomeIcon icon={faHeading} size="sm" /> <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </button>
                    {showHeadingDropdown && (
                        <div className="dropdown-menu">
                            {[1, 2, 3].map(level => (
                                <button type="button" key={level} onClick={() => editor.chain().focus().toggleHeading({ level }).run()}>
                                    H{level}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                
                <button type="button"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'tb-button-active' : 'tb-button'}
                >
                    <FontAwesomeIcon icon={faBold} size="sm" />
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'tb-button-active' : 'tb-button'}
                >
                    <FontAwesomeIcon icon={faItalic} size="sm" />
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'tb-button-active' : 'tb-button'}
                >
                    <FontAwesomeIcon icon={faStrikethrough} size="sm" />
                </button>
                <div className="dropdown">
                    <button type="button" onClick={() => setShowCodeDropdown(!showCodeDropdown)} className={editor.isActive('codeBlock') ? 'tb-button-active' : 'tb-button'}>
                        <FontAwesomeIcon icon={faFileCode} size="sm" /> <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </button>
                    {showCodeDropdown && (
                        <div className="dropdown-menu">
                            {["JavaScript", "Python", "HTML", "CSS"].map(lang => (
                                <button type="button" key={lang} onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
                                    {lang}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                
                <div className="dropdown">
                    <button type="button" onClick={() => setShowHighlightDropdown(!showHighlightDropdown)} className={editor.isActive('highlight') ? 'tb-button-active' : 'tb-button'}>
                        <FontAwesomeIcon icon={faHighlighter} size="sm" /> <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    </button>
                    {showHighlightDropdown && (
                        <div className="dropdown-menu">
                            {["Yellow", "Green", "Blue", "Pink", "Unset"].map(color => (
                                <button type="button" key={color} onClick={() => editor.chain().focus().toggleHighlight({ color: color.toLowerCase() }).run()}>
                                    {color}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                
                <button type="button"
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'tb-button-active' : 'tb-button'}
                >
                    <FontAwesomeIcon icon={faQuoteLeft} size="sm" />
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'tb-button-active' : 'tb-button'}
                >
                    <FontAwesomeIcon icon={faList} size="sm" />
                </button>
                <button type="button"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'tb-button-active' : 'tb-button'}
                >
                    <FontAwesomeIcon icon={faListNumeric} size="sm" />
                </button>
                <button type="button"
                    onClick={() => {
                        const url = prompt('Enter a link URL:');
                        if (url) {
                            editor.chain().focus().setLink({ href: url }).run();
                        }
                    }}
                    className={editor.isActive('link') ? 'tb-button-active' : 'tb-button'}
                >
                    <FontAwesomeIcon icon={faLink} size="sm" />
                </button>
                <button type="button" onClick={() => editor.chain().focus().redo().run()} className="tb-button">
                    <FontAwesomeIcon icon={faRedo} size="sm" />
                </button>
                <button type="button" onClick={() => editor.chain().focus().undo().run()} className="tb-button">
                    <FontAwesomeIcon icon={faUndo} size="sm" />
                </button>
                
            </div>
        </div>
    );
};

export default Toolbar;