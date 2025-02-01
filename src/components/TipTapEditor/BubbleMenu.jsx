const Bubbles = ({editor, tippyOptions}) => {
    return (
        <div className="bubble-menu">
          <button type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'tb-button-active' : 'bubble-button'}
          >
            Bold
          </button>
          <button type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'tb-button-active' : 'bubble-button'}
          >
            Italic
          </button>
          <button type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'tb-button-active' : 'bubble-button'}
          >
            Strike
          </button>
        </div>
    )
}

export default Bubbles;
