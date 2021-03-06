import Navbar from './components/Navbar';
import { GlobalStyle, AppStyle } from './styles/global';
import ContentContainer from './components/ContentContainer'
import Footer from './components/Footer'
import { useEffect, useState } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, getProductsRequest, RootState } from "./redux";
import { DataState } from "./redux/reducers/product";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

export interface DataStateItem {
  id: number;
  name: string;
}


function App() {

  const dispatch = useAppDispatch()
  const dataState: DataState = useAppSelector(state => state.data)
  const [data, setData] = useState([] as any)


  const handleData = () => {
   dispatch(getProductsRequest())
  } 
  
  useEffect(()=>{
    handleData()
  },[])

  useEffect(() => {
    const products = dataState?.data?.products; 
    setData(products)
    console.log(data)   
    console.log(dataState)   
  }, [dataState])
  let newData:object
  return (
    <>
      <GlobalStyle />
      <AppStyle className="App">
      <Navbar/>
      <ContentContainer/>
      <Footer/>
      </AppStyle>
    </>
  );
}

export default App;
