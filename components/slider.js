import React, { PureComponent } from "react";
import ReactDOM from "react-dom";

// import "./style-slider.css";

const DIRECTIOM_TYPE = {
  next: "NEXT",
  prev: "PREV",
};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      nums: [1, 2, 3, 4, 5, 6, 7],
      current: 2,
      needTransition: true,
      direction: "",
    };
  }

  handleSliderTranslateEnd = () => {
    console.log("handleSliderTranslateEnd");
    const { direction } = this.state;
    switch (direction) {
      case DIRECTIOM_TYPE.next:
        this.vaildNextSlider();
        break;
      case DIRECTIOM_TYPE.prev:
        this.vaildPrevSlider();
        break;
      default:
        break;
    }
  };

  vaildNextSlider = () => {
    const { current, nums } = this.state;
    let _current = current;
    // if (_current > nums.length - 3) {
    _current -= 1;
    const _nums = [...nums, ...nums.slice(0, 1)].slice(-7);
    this.setState({
      needTransition: false,
      current: _current,
      nums: _nums,
    });
    // }
  };

  vaildPrevSlider = () => {
    const { current, nums } = this.state;
    let _current = current;
    // if (_current < 1) {
    _current += 1;
    const _nums = [...nums.slice(-1), ...nums].slice(0, 7);
    this.setState({
      needTransition: false,
      current: _current,
      nums: _nums,
    });
    // }
  };

  handleNext = () => {
    const { current, nums } = this.state;
    let _current = current + 1;
    if (_current > nums.length - 3) return;
    this.setState({
      needTransition: true,
      current: _current,
      direction: DIRECTIOM_TYPE.next,
    });
  };

  handlePrev = () => {
    const { current } = this.state;
    let _current = current - 1;
    if (_current < 0) return;
    this.setState({
      needTransition: true,
      current: _current,
      direction: DIRECTIOM_TYPE.prev,
    });
  };

  transLateVal = () => {
    return -(this.state.current * 33.333333);
  };

  sliderStyle = () => {
    if (this.state.needTransition) {
      return {
        transform: `translateX(${this.transLateVal()}%)`,
        transition: "transform 0.3s ease-in-out",
      };
    }

    return {
      transform: `translateX(${this.transLateVal()}%)`,
    };
  };

  render() {
    return (
      <div className="slider-home">
        <ul
          style={this.sliderStyle()}
          onTransitionEnd={this.handleSliderTranslateEnd}
        >
          {this.state.nums.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div>
          <button onClick={this.handlePrev}>prev</button>
          <button onClick={this.handleNext}> next</button>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
