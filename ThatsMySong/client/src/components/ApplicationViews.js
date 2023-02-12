import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import SampleList from "./SampleList";
import SongDetails from "./SampleDetails";
import SongForm from "./SongForm";
import HipHopSongList from "./HipHopSongList";
import SampledSongList from "./SampledSongList"
import SampleForm from "./SampleForm"
//import SampleList from "./SampleList";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          {/* <Route path="tags">
            <Route index element={<TagList/>}/>
          </Route> */}
          <Route path="songs">
            <Route index element={<SampleList/>} />
            <Route path=":id" element={<SongDetails/>} />
            <Route path="add" element={<SongForm/>} />
            <Route path="addsample" element={<SampleForm />} />
          </Route>
          <Route path="hiphopsongs" element={<HipHopSongList/>}/>
          <Route path="sampledsongs" element={<SampledSongList/>} />
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