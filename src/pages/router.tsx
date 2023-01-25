import { Link, Route, Routes } from "react-router-dom";
import { App } from "../App/App";
import { PageFromPreview } from "./FormPreview/FormPreview";
import { PageHome } from "./Home/Home";

export const RootRouter = () => {
  return (
    <App>
      {/* <Link to="/">Home</Link>
      <Link to="/hello">Hello</Link> */}
      <Routes>
        <Route path="/hello" element={<PageFromPreview />} />
        <Route index element={<PageHome />} />
      </Routes>
    </App>
  );
};
