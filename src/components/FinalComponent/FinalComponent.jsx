import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './FinalComponent.css';
import Header from '../../Header/Header';

class FinalComponent extends Component {
  render() {
    const { stats } = this.props;
    return (
      <div>
        <Header />
        <div className="FinalComponent-commonDiv">
          <div className="FinalComponent-commonDiv--AllStar">
            <div
              className={
                stats.accuracy >= 0
                  ? 'FinalComponent-gold'
                  : 'FinalComponent-silver'
              }
            />
            <div
              className={
                stats.accuracy >= 20
                  ? 'FinalComponent-gold'
                  : 'FinalComponent-silver'
              }
            />
            <div
              className={
                stats.accuracy >= 40
                  ? 'FinalComponent-gold'
                  : 'FinalComponent-silver'
              }
            />
            <div
              className={
                stats.accuracy >= 60
                  ? 'FinalComponent-gold'
                  : 'FinalComponent-silver'
              }
            />
            <div
              className={
                stats.accuracy >= 80
                  ? 'FinalComponent-gold'
                  : 'FinalComponent-silver'
              }
            />
          </div>
          <div className="FinalComponent-scoreDiv">
            <p className="FinalComponent-Title">Your score is</p>
            <p className="FinalComponent-score">{stats.accuracy}%</p>
            <div className="FinalComponent">
              <p className="FinalComponent-Title">Words per Minute: <span className="FinalComponent-score">{stats.wordsPerMinute}</span></p>
              <p className="FinalComponent-Title">Characters per Minute: <span className="FinalComponent-score">{stats.averageSpeed}</span></p>
              <p className="FinalComponent-Title">Number of errors: <span className="FinalComponent-score">{stats.numberOfErrors}/{stats.totalCharacters}</span></p>
            </div>
        <NavLink to="/levels" className="identyMenuItem FinalComponent--btn">NAZAR</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

function MSTP(state) {
  return {
    stats: state.inputTracking
  };
}

export default connect(MSTP)(FinalComponent);
