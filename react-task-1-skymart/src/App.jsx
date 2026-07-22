
import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/AppRoutes';


const App = () => {

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white hide-scrollbar">

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
        rtl={false}
        pauseOnFocusLoss
        progressStyle={{
          background: "#84cc16", 
          height: "4px",
        }}
        
        toastStyle={{
          background: "#09090B",
          color: "#F4F4F5",
          fontSize: "14px",
          border: "1px solid #27272A",
          borderRadius: "16px",
          minHeight: "72px",
          padding: "14px 40px 14px 14px",
        }}
      />

      <AppRoutes />
      
    </div>
  )
}

export default App




