import React, { useState } from "react";
import SendIcon from "../../assets/icons/send.svg";

import "./textArea.css";

class TextArea extends React.Component {
  state = {
    message: "",
    isRecording: false
  };

  handleChange = e => {
    this.setState({ message: e.target.value });
  };

  toggleAudioRecorder() {}

  renderButton() {
    const { message } = this.state;

    return message.length > 0 ? (
      <button className="btn-send">
        <img src={SendIcon} alt="" width="24" />
      </button>
    ) : (
      <button
        className="btn-send mic"
        onClick={() => this.setState({ isRecording: true })}
      >
        <i className="btn fas fa-microphone fa-2x" />
      </button>
    );
  }

  renderRecorder() {
    return (
      <div>
        <button className="stop" onClick={() => this.setState({ isRecording: false })}>
          <i className="btn far fa-times-circle fa-2x" />
        </button>
        {"0:00"}
        <button className="send-audio">
          <i className="btn far fa-check-circle fa-2x" />
        </button>
      </div>
    );
  }

  render() {
    const { isRecording } = this.state;
    return (
      <form className="box-textarea">
        <input
          type="text"
          className="form-control-area"
          placeholder="Digite uma mensagem"
          onChange={this.handleChange}
        />
        {isRecording ? this.renderRecorder() : this.renderButton()}
      </form>
    );
  }
}

export default TextArea;
