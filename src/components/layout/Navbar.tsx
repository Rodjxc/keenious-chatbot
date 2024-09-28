import { AppBar, Box, Button, Toolbar, Typography, Link } from "@mui/material";
import { Container } from "@mui/system";

export const Navbar = () => {
	return (
		<AppBar position="static" color="transparent" elevation={0}>
			<Container maxWidth="lg">
				<Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
					<Box display="flex" alignItems="center">
						<img
							src="/your-image.png" // Change to your image path in the public folder
							alt="Keenious Logo"
							style={{ height: "40px", marginRight: "10px" }}
						/>
						<Typography variant="h6" color="black">
							Keenious
						</Typography>
					</Box>

					<Box display="flex" alignItems="center" gap={3}>
						<Link href="#" underline="none" color="inherit">
							Sign Up
						</Link>
						<Button
							variant="contained"
							color="secondary"
							sx={{
								backgroundColor: "purple",
								color: "white",
								"&:hover": {
									backgroundColor: "darkviolet",
								},
							}}
						>
							Get Keenious
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
