import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";
import SampleList from "./SampleList";
import SampleDetails from "./SampleDetails";
import SongForm from "./SongForm";
import HipHopSongList from "./HipHopSongList";
import SampledSongList from "./SampledSongList";
import SampleForm from "./SampleForm";
import SongEdit from "./SongEdit";
import HipHopSongDetails from "./HipHopSongDetails";
//import SampleList from "./SampleList";

export default function ApplicationViews({ isLoggedIn }) {
  return (
    <main>
      <Routes>
        <Route path="/">
          {/* <Route path="tags">
            <Route index element={<TagList/>}/>
          </Route> */}
          <Route path="samples">
            <Route index element={<SampleList/>} />
            <Route path=":id" element={<SampleDetails/>} />
            
            {/* <Route path=":id/edit" element={<SongEdit />} /> */}
            <Route path="addsample" element={<SampleForm />} />
          </Route>
          <Route path="hiphopsongs">
             <Route index element={<HipHopSongList/>}/>
             <Route path=":id" element={<HipHopSongDetails/>} />
             <Route path=":id/edit" element={<SongEdit />} />
             <Route path="add" element={<SongForm/>} />
            </Route> 
          <Route path="sampledsongs"> 
          <Route index element={<SampledSongList/>} />
          <Route path="add" element={<SongForm/>} />
          <Route path=":id/edit" element={<SongEdit />} />
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