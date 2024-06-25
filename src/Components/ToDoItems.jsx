/** @format */

import { useState } from 'react';
import { Button, Input, Checkbox } from 'antd';

export const ToDoItems = ({ todos, handleDelete, statusIsCompleted }) => {
  const [editMode, setEditMode] = useState(null);
  const [editInput, setEditInput] = useState();

  const handleEditToDo = (id, title) => {
    setEditMode(id);
    setEditInput(title);
  };

  const saveHandle = (id) => {
    const copyArray = [...todos].map((item) => {
      if (item.id === id) {
        return (item.title = editInput);
      }
    });
    setEditInput(copyArray);
    setEditMode(null);
  };

  return (
    <>
      {todos.map((todo) => (
        <ul key={todo.id} style={{ padding: '0' }}>
          {todo.status ? (
            <li key={todo.id} className="status-done">
              <Checkbox onChange={() => statusIsCompleted(todo.id)}></Checkbox>
              {editMode === todo.id ? (
                <Input
                  onChange={(e) => setEditInput(e.target.value, todo.title)}
                  value={editInput}
                />
              ) : (
                <Input value={todo.title} />
              )}

              {editMode === todo.id ? (
                <div>
                  <Button
                    onClick={() => saveHandle(todo.id)}
                    style={{ width: '2.5rem', textDecorationLine: 'none' }}
                  >
                    Save
                  </Button>
                </div>
              ) : (
                <div>
                  {todo.status ? (
                    <Button style={{ width: '2.5rem' }}>Done</Button>
                  ) : (
                    <Button
                      onClick={() => handleEditToDo(todo.id, todo.title)}
                      style={{ width: '2.5rem' }}
                    >
                      Edit
                    </Button>
                  )}
                </div>
              )}
              <div>
                <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
              </div>
            </li>
          ) : (
            <li key={todo.id} className="status-in-progress">
              <Checkbox onChange={() => statusIsCompleted(todo.id)}></Checkbox>
              {editMode === todo.id ? (
                <Input
                  onChange={(e) => setEditInput(e.target.value, todo.title)}
                  value={editInput}
                />
              ) : (
                <Input value={todo.title} />
              )}

              {editMode === todo.id ? (
                <Button
                  onClick={() => saveHandle(todo.id)}
                  style={{ width: '2.5rem' }}
                >
                  Save
                </Button>
              ) : (
                <Button
                  onClick={() => handleEditToDo(todo.id, todo.title)}
                  style={{ width: '2.5rem' }}
                >
                  Edit
                </Button>
              )}

              <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
            </li>
          )}
        </ul>
      ))}
    </>
  );
};
