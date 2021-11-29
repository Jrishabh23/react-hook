import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UseEffect } from "../components/UseEffect/UseEffect";
import { UseMemo } from "../components/UseMemo/UseMemo";
import { UseRef } from "../components/UseRef/UseRef";

export const Routing = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<UseEffect />} />
                    <Route path="/UseRef" element={<UseRef />} />
                    <Route path="/UseMemo" element={<UseMemo />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
