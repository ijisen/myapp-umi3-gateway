import React, { useState, useRef } from 'react';
import './style.less';

const Card = () => {
  const [collapse, toggleCollapse] = useState(true);
  // 1\. 获取DOM 节点的值
  const textInput = useRef(null);

  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">Card Actions</h4>
        <div className="heading-elements">
          <button
            onClick={() => {
              toggleCollapse(!collapse);
              console.log(textInput?.current);
              console.log(textInput?.current?.clientHeight);
            }}
          >
            Collapse
          </button>
        </div>
      </div>
      <div
        className={`card-content ${!collapse ? 'collapse show' : 'collapsing'}`}
      >
        <div className="card-body">
          <div className="row" ref={textInput}>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
            <p>Hi there, this content needs to shown on button click</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
