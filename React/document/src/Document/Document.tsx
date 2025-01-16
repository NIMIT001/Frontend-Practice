import React, { useState } from 'react';

export const Document = () => {
  const [text, setText] = useState('');
  const [document, setDocument] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    if (!loading) {
      setLoading(true);
      e.preventDefault();
      insertTextInDocument();
      setText('');
    }
  };

  const insertTextInDocument = () => {
    let newDoc = `<p class="paragraph-highlight-class">${text}</p>`;
    setDocument(document + newDoc);
    removeHighlightAfterTime();
  };

  const removeHighlightAfterTime = () => {
    setTimeout(() => {
      setDocument((doc) => {
        let d = doc.replace(` class="paragraph-highlight-class"`, '');
        setLoading(false);
        return d;
      });
    }, 2000);
  };
  return (
    <div>
      <div className="body-container">
        <form onSubmit={handleSubmit}>
          <textarea
            onKeyDown={(e) => {
              if (e.key === 'enter' || e.which === 13) {
                handleSubmit(e);
              }
            }}
            className="textarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your text here..."
            rows={5}
          ></textarea>
        </form>
      </div>
      <div className="document-container">
        <p className="para">Document</p>
        {document ? (
          <div
            className="document-body"
            dangerouslySetInnerHTML={{
              __html: document,
            }}
          ></div>
        ) : (
          <div
            className="document-body"
            style={{ textAlign: 'center', color: '#52525240' }}
          >
            Added content will show here
          </div>
        )}
      </div>
    </div>
  );
};
