import React from "react";
import "./style.css";

const Tabs = ({ data }) => {
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          {data.map((item) => {
            return (
              <div class="icon-tab col-xs-12 col-sm-2 col-sm-offset-3 active">
                <span class="{item.icon}"></span>
                <span class="icon-label">{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div class="item col-sm-10 col-sm-offset-1">
        {data.map((item) => {
          return (
            <div class="panel panel-default">
              <div class="panel-heading">
                <h3>{item.name}</h3>
              </div>
              <div class="panel-body">Yahan pr Specific Services aain gi</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
