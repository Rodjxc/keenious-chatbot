import { AppBar, Box, Toolbar, Link } from "@mui/material";
import { Container } from "@mui/system";
import { NavbarButton } from "../buttons/NavbarButton";
import { Logo } from "../Logo";

export const Navbar = () => {
	return (
		<AppBar position="static" color="transparent" elevation={0}>
			<Container maxWidth="lg">
				<Toolbar sx={{ justifyContent: "space-between", marginTop: "1rem" }}>
					<Logo />
					<Box display="flex" alignItems="center" gap={6}>
						<Link href="#" underline="none" color="inherit">
							Sign In
						</Link>
						<NavbarButton text={"Get Keenious!"} />
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
