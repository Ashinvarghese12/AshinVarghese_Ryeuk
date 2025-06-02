import { Routes, Route } from 'react-router-dom';
import ProjectAlpha from './Pages/Projects/ProjectAlpha';
import ProjectBeta from './Pages/Projects/ProjectBeta';
import Sidebar from './components/SideBar';
import Topbar from './components/TopBar';
import { useState } from 'react';

function App() {
  const [activeChat, setActiveChat] = useState('Chat 1');
  const chats = ['Chat 1', 'Chat 2', 'Chat 3'];

  return (
    <div className="flex h-screen  text-white bg-[#191C21]">
      <Sidebar chats={chats} activeChat={activeChat} setActiveChat={setActiveChat} />
      <div className="flex-1 flex flex-col">
        <Topbar activeChat={activeChat} />
        
        {/* Main content area */}
        <main className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <Routes>
              <Route path="/" element={<ProjectAlpha />} />
              <Route path="/projectbeta" element={<ProjectBeta />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
