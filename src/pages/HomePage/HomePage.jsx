import { Grid } from "@mui/material";
import React from "react";
import Profile from "../Profile/Profile";
import Sidebar from "../../Component/Sidebar";
import MiddlePart from "../../Component/MiddlePart/MiddlePart";
import Reels from "../../Component/Reels/Reels";
import CreateReelsForm from "../../Component/Reels/CreateReelsForm";
import { useLocation, Routes, Route } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className="px-20">
      <Grid container spacing={0}>
        <Grid item xs={0} lg={3}>
          <div className="sticky top-0">
            <Sidebar />
          </div>
        </Grid>

        <Grid
          lg={location.pathName === "/" ? 6 : 9}
          item
          className="px-5 flex justify-center"
          xs={12}
        >
          <Routes>
            <Route path="/" element={<MiddlePart />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/create-reels" element={<CreateReelsForm />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
