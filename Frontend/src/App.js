import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Guides from "./Pages/Guides"
import ExplainTips from './Pages/ExplainTips'
import Guides2 from './Pages/Guides2'
import ExplainTips2 from './Pages/ExplainTips2'
import ExplainTips3 from './Pages/ExplainTips3'
import ExplainTips4 from './Pages/ExplainTips4'
import ExplainTips5 from './Pages/ExplainTips5'
import ExplainTips6 from './Pages/ExplainTips6'
import ExplainTips7 from './Pages/ExplainTips7'
import ExplainTips8 from './Pages/ExplainTips8'
import ExplainTips9 from './Pages/ExplainTips9'
import ExplainTips10 from './Pages/ExplainTips10'
import ExplainTips11 from './Pages/ExplainTips11'
import ExplainTips12 from './Pages/ExplainTips12'
import ExplainTips13 from './Pages/ExplainTips13'
import ExplainTips14 from './Pages/ExplainTips14'
import ExplainTips15 from './Pages/ExplainTips15'
import ExplainTips16 from './Pages/ExplainTips16'
import ExplainTips17 from './Pages/ExplainTips17'
import ExplainTips18 from './Pages/ExplainTips18'
import GuidesPage from './Pages/GuidesPage'
import Galeri from './Pages/Galeri'
import Homepage from './Pages/Homepage'
import Ourcampaign from './Pages/Ourcampaign'
import Profile from './Pages/Profile'
import ChangePassword from './Pages/ChangePassword'
import ChangePasswordForm from './Components/ChangePasswordForm'
import Schedule from './Pages/Schedule'
import MyPlants from './Pages/MyPlants'
import Addtanaman from './Pages/Addtanaman'



function App() {
  return (
 <Router>
  <Routes>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/" element={<Register/>} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Guides" element={<Guides />} />
      <Route path="/Guides2" element={<Guides2 />} />
      <Route path="/ulatDaun" element={<ExplainTips />} />
      <Route path="/lalatPenggorok" element={<ExplainTips2 />} />
      <Route path="/penyakitBusuk" element={<ExplainTips3 />} />
      <Route path="/antraknosa" element={<ExplainTips4 />} />
      <Route path="/kutuPutih" element={<ExplainTips5 />} />
      <Route path="/kutuKabul" element={<ExplainTips6 />} />
      <Route path="/lalatBuah" element={<ExplainTips7 />} />
      <Route path="/walangSangit" element={<ExplainTips8 />} />
      <Route path="siputBekicot" element={<ExplainTips9 />} />
      <Route path="/bayam" element={<ExplainTips10 />} />
      <Route path="/labuSiam" element={<ExplainTips11 />} />
      <Route path="/jamurTiram" element={<ExplainTips12 />} />
      <Route path="/selada" element={<ExplainTips13 />} />
      <Route path="/terongUngu" element={<ExplainTips14 />} />
      <Route path="/bawangMerah" element={<ExplainTips15 />} />
      <Route path="/Tomat" element={<ExplainTips16 />} />
      <Route path="/kacangPanjang" element={<ExplainTips17 />} />
      <Route path="/jahe" element={<ExplainTips18 />} />
      <Route path="/GuidesPage" element={<GuidesPage />} />
      <Route path="/Galeri" element={<Galeri />} />
      <Route path="/Ourcampaign" element={<Ourcampaign />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
      <Route path="/ChangePasswordForm" element={<ChangePasswordForm />} />
      <Route path="/Schedule" element={<Schedule />} />
      <Route path="/MyPlants" element={<MyPlants />} />
      <Route path="/Addtanaman" element={<Addtanaman />} />
    
  </Routes>
 </Router>
  )
}

export default App
