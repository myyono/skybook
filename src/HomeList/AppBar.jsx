import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import human from '../gambar/human/people/1.jpg'
import skydu from '../gambar/ic/icons/skydu.jpg'
import './AppBar.css'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}))

const ButtonAppBar = () => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						SkyBook
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						<img src={skydu} className="notify" alt="notifycation" />
					</Typography>
					<div className="humant"></div>
					<img src={human} alt="humanis" />
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default ButtonAppBar
