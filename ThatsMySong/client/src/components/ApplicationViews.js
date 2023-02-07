import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import SongList from "./SongList";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          {/* <Route path="tags">
            <Route index element={<TagList/>}/>
          </Route> */}
          <Route index element={<SongList/>} />
          <Route path="songs">
            <Route index element={<SongList/>} />
            <Route path=":id" element={<SongDetails/>} />
            <Route path="add" element={<SongForm/>} />
          </Route>
          <Route
            index
            element={isLoggedIn ? <Hello /> : <Navigate to="/login" />}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
        </Route>
      </Routes>
    </main>
  );
};  