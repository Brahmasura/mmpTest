import { Route, Routes } from "react-router-dom";
import MyBrands from "../MyBrands/MyBrands";
import NewBrand from "../NewBrand/NewBrand";
import BrandOption from "../BrandOption/BrandOption";


const BrandsHome = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MyBrands/>}/>
            <Route path="/brandOption/:brandName" element={<BrandOption/>}/>
            <Route path="newBrand" element={<NewBrand/>}/>
           

              {/* the two more pages need to be added the "BrandOption" and "BrandDetail" */}
        </Routes>
    </>
  )
};

export default BrandsHome;
