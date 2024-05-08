import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { PageLayout } from "./Layouts/PageLayout/PageLayout";

export function AppRouters(){
    return(
        <BrowserRouter>
            <PageLayout>
                <Routes>
                    <Route>
                        <Route path="/" element={<HomePage />}></Route>
                        <Route path="/auth" element={<AuthPage />}></Route>
                    </Route>
                </Routes>
            </PageLayout>
        </BrowserRouter>
    )
}
