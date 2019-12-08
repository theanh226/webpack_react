import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/monokai.css';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/mode/python/python';
import './chat.css';

function CodeMirrorCom({ codeProps }) {
  const [updateCode, setUpdateCode] = useState('');
  useEffect(() => {
    setUpdateCode(codeProps);
    // return () => {

    // };
  }, [codeProps]);
  return (
    <div>
      <h2>View Tutor</h2>
      <CodeMirror
        value={updateCode}
        options={{
          mode: 'javascript',
          theme: 'monokai',
          lineNumbers: true,
        }}
        // onBeforeChange={(editor, data, value) => {
        //   console.log(editor);
        //   setUpdateCode(codeProps);
        // }}
        // onChange={(editor, data, value) => {
        //   setUpdateCode(codeProps);
        // }}
      />
    </div>
  );
}

CodeMirrorCom.propTypes = {
  codeProps: PropTypes.string,
};

export default CodeMirrorCom;
