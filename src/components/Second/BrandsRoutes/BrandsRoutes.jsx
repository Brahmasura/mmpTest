import { Route, Routes } from "react-router-dom";
import MyBrands from "../MyBrands/MyBrands";

import BrandOption from "../BrandOption/BrandOption";
import NewBrand from "../NewBrandRoutes/NewBrandRoutes";
import ManageBrand from "../ManageBrand/ManageBrand";

const BrandsHome = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyBrands />} />
        <Route path="/brandOption/:brandName" element={<BrandOption />} />
        <Route path="/manageBrand" element={<ManageBrand />} />
        <Route path="newBrand/*" element={<NewBrand />} />

        {/* the two more pages need to be added the "BrandOption" and "BrandDetail" */}
      </Routes>
    </>
  );
};

export default BrandsHome;
