import { Route, Routes } from "react-router-dom";
import MyBrands from "../MyBrands/MyBrands";
import NewBrand from "../NewBrand/NewBrand";


const BrandsHome = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MyBrands/>}/>
            <Route path="newBrand" element={<NewBrand/>}/>
        </Routes>
    </>
  )
};

export default BrandsHome;
