import LogPage from "./Pages/LogPage";
import MyPage from "./Pages/MyPage";

export const allRoutes = {
    privateRoutes: [
        {path: '/login', element: <LogPage/>, exact:true},
        {path: '/my/:login', element: <MyPage/>, exact:true},
      
    ],
    publicRoutes: [
      {path: '/login', element: <LogPage/>, exact:true},
      
    ],
  };