import React from 'react';
import PropTypes from 'prop-types';
import CodeMirrorCom from './CodeMirrorCom';

function Tutor({ code }) {
  return (
    <div>
      <CodeMirrorCom codeProps={code} />
    </div>
  );
}

Tutor.propTypes = {
  code: PropTypes.string,
};

export default Tutor;
