import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'antd';
import "./TaskDetail.css";

const TaskDetail = () => {
  const { taskId } = useParams();
  const task = useSelector(state => state.tasks.tasks.find(task => task.id === taskId));

  if (!task) {
    return <p>Task not found.</p>;
  }

  return (
    <Card className='details_card' title={task.title}>
      <p className='criteria'><strong>Description:</strong> {task.description}</p>
      <p><strong>Category:</strong> {task.category}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <Button type="primary">
        <Link to="/">Back to Task List</Link>
      </Button>
    </Card>
  );
};

export default TaskDetail;
