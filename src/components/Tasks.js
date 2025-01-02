import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@material/web/button/filled-button.js";
import "@material/web/textfield/outlined-text-field.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Correct import
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Correct import for the arrow icon

const Tasks = () => {
  const navigate = useNavigate();

  // State for holding tasks and new task input value
  const [tasks, setTasks] = useState([
    { id: 1, text: "Task 1", isCompleted: false },
    { id: 2, text: "Task 2", isCompleted: false },
    { id: 3, text: "Task 3", isCompleted: false },
    { id: 4, text: "Task 4", isCompleted: false },
    { id: 5, text: "Task 5", isCompleted: false },
    { id: 6, text: "Task 6", isCompleted: true },
    { id: 7, text: "Task 7", isCompleted: true },
    { id: 8, text: "Task 8", isCompleted: true },
    { id: 9, text: "Task 9", isCompleted: true },
    { id: 10, text: "Task 10", isCompleted: true },
  ]);
  const [newTask, setNewTask] = useState("");

  // Handle task completion
  const handleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: tasks.length + 1,
        text: newTask,
        isCompleted: false,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ fontSize: "24px", marginRight: "10px", cursor: "pointer" }}
          onClick={() => navigate(-1)}
        />
        <h1>Tasks</h1>
      </div>
      <md-divider></md-divider>

      {/* Task Input Section */}
      <div
        style={{
          marginBottom: "20px",
          width: '40%',
          minWidth: '200px',
          display: "flex",
          flexDirection: "column",
        }}
      >
        <md-outlined-text-field
          label="New Task"
          value={newTask}
          onInput={(e) => setNewTask(e.target.value)}
          style={{ marginBottom: "5px" }}
        ></md-outlined-text-field>
        <md-filled-button onClick={handleAddTask} style={{ maxWidth: '100%'}}>
          Add Task
        </md-filled-button>
      </div>

      {/* Task List */}
      <div>
        {tasks.length === 0 ? (
          <p>No tasks to display</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {tasks.map((task) => (
              <li
                key={task.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  textDecoration: task.isCompleted ? "line-through" : "none",
                }}
              >
                <span>{task.text}</span>
                <md-filled-button onClick={() => handleTaskCompletion(task.id)}>
                  {task.isCompleted ? "Undo" : "Complete"}
                </md-filled-button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Tasks;
