import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { BlogPage } from "./pages/Blog";
import { PostPage } from "./pages/PostPage";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<BlogPage />} />
                <Route path="/post/:id" element={<PostPage />} />
            </Route>
        </Routes>
    )
}