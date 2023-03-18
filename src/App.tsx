import Navigation from "./components/Navigation";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Artists } from "./pages/Artists";
import { ArtistDetails } from "./pages/ArtistDetails";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Favorites } from "./pages/Favorites";
import * as route from './services/routes'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Navigation />
          <main style={{ padding: "30px" }}>
            <Routes>
              <Route path={route.artists} element={<Artists />} />
              <Route path={`${route.artristDetail}/:id`} element={<ArtistDetails />} />
              <Route path={route.favorites} element={<Favorites />} />
              <Route
                path="*"
                element={<Navigate to={route.artists} replace />}
              />
            </Routes>
          </main>
        </>
      </BrowserRouter>
    </Provider>

  )
}

