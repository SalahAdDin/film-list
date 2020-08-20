import React from "react"
import PropTypes from "prop-types"
import {
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  fade,
  makeStyles,
} from "@material-ui/core"
import { Search } from "@material-ui/icons"
import { useFormik } from "formik"

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
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
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
  const formik = useFormik({
    initialValues: { term: "" },
    validate,
    onSubmit: ({ term }) => {
      onSubmit(term)
    },
  })

  return (
    <div className={classes.grow}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" noWrap>
            IMDb hele!
          </Typography>
          <form onSubmit={formik.handleSubmit} className={classes.search}>
            <div className={classes.searchIcon}>
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
              value={formik.values.amount}
            />
          </form>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = { onSubmit: PropTypes.func.isRequired }

export default Header
