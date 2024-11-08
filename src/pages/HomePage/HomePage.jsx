import Box from "@mui/material/Box";
import React from "react";
import Profile from "../Profile/Profile";
import Sidebar from "../../Component/Sidebar/Sidebar";
import MiddlePart from "../../Component/MiddlePart/MiddlePart";
import Reels from "../../Component/Reels/Reels";
import CreateReelsForm from "../../Component/Reels/CreateReelsForm";
import { useLocation, Routes, Route } from "react-router-dom";
import HomeRight from "../../Component/HomeRight/HomeRight";

const HomePage = () => {
  const location = useLocation();
  console.log("Current Path:", location.pathname);

  return (
    <Box display="flex" flexDirection="row" width="100vw" height="100vh">
      {/* Sidebar on the left */}
      <Box
        sx={{ width: { xs: "100%", lg: "25%" }, border: "1px solid red" }}
        className="sticky top-0"
      >
        <Sidebar />
      </Box>

      {/* Middle Part */}
      <Box
        sx={{
          width: { xs: "100%", lg: location.pathname === "/" ? "50%" : "75%" },
          border: "1px solid green",
          px: 2,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Routes>
          <Route path="/" element={<MiddlePart />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/create-reels" element={<CreateReelsForm />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Box>

      {/* HomeRight on the right side */}

      <Box
        sx={{
          width: { lg: "25%" },
          border: "1px solid blue",
          display: { xs: "none", lg: "block" },
        }}
        className="sticky top-0"
      >
        <HomeRight />
      </Box>

      {/* <Box
        sx={{
          width: { lg: "25%" },
          border: "1px solid blue",
          display: { xs: "none", lg: "block" },
        }}
      >
        {/^\/(home|profile|reels)?$/i.test(location.pathname) && <HomeRight />}
      </Box> */}
    </Box>
  );
};

export default HomePage;
