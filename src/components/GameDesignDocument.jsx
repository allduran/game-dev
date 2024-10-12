// GameDesignDocument.jsx
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../styles/GameDesignDocument.css';

const GameDesignDocument = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (value) => {
    setContent(value);
  };

  return (
    <div className="gdd-container">
      <h2 className="gdd-title">Game Design Document</h2>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        placeholder="Start writing your game design document here..."
        className="gdd-editor"
      />
    </div>
  );
};

export default GameDesignDocument;
