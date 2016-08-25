import React from 'react';
import {connect} from 'react-redux';
import Editable from './Editable.jsx';
import Note from './Note.jsx';
import {move} from '../actions/lanes';

class Notes extends React.Component {
  render() {
    const {notes, move, onValueClick, onEdit, onDelete} = this.props;

    return (<ul className="notes">{notes.map((note) =>
      <Note className="note" id={note.id} key={note.id}
        editing={note.editing} onMove={move}>
        <Editable
          editing={note.editing}
          value={note.task}
          onValueClick={onValueClick.bind(null, note.id)}
          onEdit={onEdit.bind(null, note.id)}
          onDelete={onDelete.bind(null, note.id)}
        />
        <div className="badges">
          <img alt="likes" className="thumb-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4AgZBgsKwF2ukQAAAbBJREFUSMfF1zuLFEEQwPHfnasIPg98HCd6Ckb6ES67wFQEXyAaiLlfwE8gaGRgYCAciHAghhopJgaKgahgoHcKgkYix3qcj12THimaGRn3dnsLiqmu6e5/VTH9GAaTs3iL57iJeUwqIL/RD9rDK2wcNXgtA1f6ZNTgCvQGc1gJvhMlwC9S+3zw3R4VdH+APKwJ5mmbSQb5EueCvVTzflubSTrpeRRbG/qs4mVonwr2o5r+P9pmcLzhC416GdM4lvkrmQm+x9iHA5lOh0TB1RbgOj0X5rjUov8alnFYHgHup1JNpE3hTEOVFnAntLe3qOwmzOIZZnLwRXwN7dMpiI9YxHfcSu0o19HFkX8svwuYwk5cyUs9lQ3oJf+DISzDHSnwPt61XU6TQ9p0etVKKXKiJNmAzcl+XxLcSXBYLgneG+yi4EPB/lASPDuujCN4aVzgbknwwXDa9ceRcbc0eM+4wCK48x/bHWwZEHYy2CvodWruS7/SUfgz+OezG8d6ZLEu49cZYGLIZV7AtWrj7oYXTRe+z/i0jkBWcRc3Yka7cA+7GwZ9S38HX4bwA/BX/gDkFYtoSl6vrgAAAABJRU5ErkJggg=="/>
          3
        </div>
      </Note>
    )}</ul>);
  }
}

export default connect(() => ({}), {
  move
})(Notes);
