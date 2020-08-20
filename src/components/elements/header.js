import React from "react"
import PropTypes from "prop-types"
import { Link, useHistory } from "react-router-dom"
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  fade,
  makeStyles,
} from "@material-ui/core"
import { Clear, Search } from "@material-ui/icons"
import { useFormik } from "formik"

import "./header.scss"

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))

const validate = (values) => {
  const errors = {}
  if (!values.term) errors.term = "This fields must be filled!"
  return errors
}

const Header = ({ onSubmit }) => {
  const classes = useStyles()
  let history = useHistory()
  const formik = useFormik({
    initialValues: { term: "" },
    validate,
    onSubmit: ({ term }) => {
      history.push("/")
      onSubmit(term)
    },
  })

  return (
    <AppBar position="sticky">
      <Toolbar className="header">
        <Link to="/">
          <Typography variant="h6" noWrap className="title">
            IMDb hele!
          </Typography>
        </Link>
        <form onSubmit={formik.handleSubmit} className={classes.search + " search"}>
          <div
            className="icon"
            style={{
              pointerEvents: "none",
            }}
          >
            <Search />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            name="term"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.term}
          />
          <div className="icon">
            <Clear onClick={formik.resetForm} />
          </div>
        </form>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = { onSubmit: PropTypes.func.isRequired }

export default Header
