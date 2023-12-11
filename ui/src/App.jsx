import { lazy, Suspense } from "react";
import Home from "./components/Home";
// import Login from "./components/Login";
import { createBrowserRouter,RouterProvider } from "react-router-dom";


const Login= lazy(()=>import ("./components/Login"))


const router= createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/signup",
    element:
    <Suspense fallback={<div>Loading signup page.......</div>}>
    <Login/>
    </Suspense>,
   
  }
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
