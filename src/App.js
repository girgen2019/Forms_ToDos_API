/** @format */
import { Layout, Image } from 'antd';

import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './Components/Registration';
import { Todo } from './Components/ToDo';

const { Header, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
          <Image
            width={80}
            src={logo}
            className='App-logo'
            preview={false}
          />
      </Header>
        <Content>
      <div className="App">
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
      </div>
        </Content>
    </Layout>
  );
}

export default App;
