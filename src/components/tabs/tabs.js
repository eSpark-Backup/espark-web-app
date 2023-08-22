import React from "react";
import "./style.css";

const Tabs = ({ data }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          {data.map((item) => {
            return (
              <div className="icon-tab col-xs-12 col-sm-2 col-sm-offset-3 active">
                <span className="{item.icon}"></span>
                <span className="icon-label">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="item col-sm-10 col-sm-offset-1">
        {data.map((item) => {
          return (
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3>{item.name}</h3>
              </div>
              <div className="panel-body">Yahan pr Specific Services aain gi</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
