import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/UseTypedSelector";
import * as route from '../services/routes'

export default function PrimarySearchAppBar() {
  const location = useLocation()
  const likedSongs = useTypedSelector((s) => s.artist.likedSongs)
  const navigate = useNavigate()
  return (
    <Box>
      <AppBar position="static" component="nav">
        <Toolbar>
          {location?.pathname !== route.artists &&
            <IconButton
              onClick={() => navigate(-1)}
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <ArrowBackIcon />
            </IconButton>}

          <Typography
            variant="h6"
            flexGrow={1}
            align="left"
            noWrap
            component="strong"
          >
            {location?.pathname === route.artists ? "Artists" : "Artist"}
          </Typography>

          <Box>
            <Link to={route.favorites}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={likedSongs.length} color="error">
                  {likedSongs.length ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Badge>
              </IconButton>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
