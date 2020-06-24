import React from "react";
import "./CommentBox.css";

class CommentBox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleAdd = () => {
    const { onAdd } = this.props;

    const value = this.inputRef.current.value;
    if (value) {
      onAdd(value);
      this.clearInput();
    }
  };

  clearInput = () => {
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <div className="comment-box">
        <input
          ref={this.inputRef}
          type="text"
          placeholder="Add a comment"
        ></input>
        <button className="comment-box__save-btn" onClick={this.handleAdd}>
          Post
        </button>
      </div>
    );
  }
}

export default CommentBox;
