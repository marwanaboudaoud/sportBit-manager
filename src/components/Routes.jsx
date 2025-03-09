import {  Routes, Route } from "react-router-dom";
import {ManagementPage} from "../pages/Management";
import {AdministrationPage} from "../pages/Administration";
import { ShopPage } from "../pages/Shop";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ManagementPage />} />
            <Route path="/management" element={<ManagementPage />} />
            <Route path="/administration" element={<AdministrationPage />} />
            <Route path="/shop/*" element={<ShopPage />} />
        </Routes>
    );
};
