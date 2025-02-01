import { useState, useEffect } from 'react';
import { BubbleMenu, useEditor, EditorContent } from '@tiptap/react';
import { Blockquote } from '@tiptap/extension-blockquote';
import { Bold } from '@tiptap/extension-bold';
import { BulletList } from '@tiptap/extension-bullet-list';
import { Code } from '@tiptap/extension-code';
import { CodeBlock } from '@tiptap/extension-code-block';
import { Document } from '@tiptap/extension-document';
import { Dropcursor } from '@tiptap/extension-dropcursor';
import { Gapcursor } from '@tiptap/extension-gapcursor';
import { HardBreak } from '@tiptap/extension-hard-break';
import { Heading } from '@tiptap/extension-heading';
import { Highlight } from '@tiptap/extension-highlight';
import { History } from '@tiptap/extension-history';
import { HorizontalRule } from '@tiptap/extension-horizontal-rule';
import { Italic } from '@tiptap/extension-italic';
import { ListItem } from '@tiptap/extension-list-item';
import { OrderedList } from '@tiptap/extension-ordered-list';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Strike } from '@tiptap/extension-strike';
import { Text } from '@tiptap/extension-text';
import { Link } from '@tiptap/extension-link';
import Toolbar from './Toolbar';
import Bubbles from './BubbleMenu'
import "@/styles/tiptap.css";
import "@tailwindcss/typography"

const TipTap = ({ value, onChange }) => {
  const [isEditorReady, setIsEditorReady] = useState(false);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
      },
    },
    extensions: [
      Blockquote,
      Bold,
      BulletList,
      Code,
      CodeBlock.configure({
        defaultLanguage: 'javascript', // Set a default language
      }),
      Document,
      Dropcursor,
      Gapcursor,
      HardBreak,
      History.configure({
        depth: 10,
      }),
      Heading.configure({ levels: [1, 2, 3] }), // Configure heading levels
      Highlight.configure({ multicolor: true }),
      HorizontalRule,
      Italic,
      Link,
      ListItem,
      OrderedList,
      Paragraph,
      Strike,
      Text,
    ],
    content: value || '',
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    immediatelyRender: false
  });

  useEffect(() => {
    setIsEditorReady(true);
  }, []);

  if (!isEditorReady) return null;

  return (
    <div>
      <Toolbar editor={editor} content={value} />
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <Bubbles editor={editor} />
        </BubbleMenu>
      )}
      <EditorContent editor={editor} className="editor-content prose-base" />
    </div>
  );
};

export default TipTap;
