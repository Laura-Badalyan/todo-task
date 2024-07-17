import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskDetail from './components/TaskDetail';
import { Layout } from 'antd';
import "./App.css";

const { Header, Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className='header_layout'>
        <Header>To Do List </Header>
        <Content>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/task/:taskId" element={<TaskDetail />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
