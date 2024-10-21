import React from 'react';
import './Note.module.css';

class Note extends React.Component {
  render() {
    return (
      <div className="Note" id={this.props.id}>
        <p>{this.props.text}</p>
        <button
          type="button"
          className="Note__control-delete"
          onClick={this.props.onDeleteClick}
        >
          &times;
        </button>


        {/* <a
          href="javascript:void(0)"
          className="Note__control-delete"
          onClick={this.props.onDeleteClick.bind(this)}
        >&times;
        </a> */}
      </div>
    );
  }
}

export default Note;