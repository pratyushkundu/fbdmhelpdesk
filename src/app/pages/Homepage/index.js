import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chatpage from '../../components/Chatpage';
import Connectfb from '../../components/Connectfb';
import ReplyConnectorDisconnect from '../../components/Reply';
import Login from '../../components/Login';
import SignUp from '../../components/SignUp';

const HomePage = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path="/connectfb" element={<Connectfb />} />
        <Route path="/replydisconnect" element={<ReplyConnectorDisconnect />} />
        <Route path="/chatpage" element={<Chatpage />} />
      </Routes>

    </BrowserRouter>
  )
}

export default HomePage