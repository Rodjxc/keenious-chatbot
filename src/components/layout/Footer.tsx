import { Box, Container, Grid, Link, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: "#6030FF",
				color: "white",
				paddingY: "40px",
				borderTop: "1px solid rgba(255, 255, 255, 0.2)",
			}}
		>
			<Container maxWidth="lg">
				<Grid container spacing={4} justifyContent="space-between">
					<Grid item xs={12} sm={6} md={2}>
						<Typography variant="h6" gutterBottom>
							Be Keenious
						</Typography>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1, fontSize: "0.875rem" }}
						>
							Microsoft Word extension
						</Link>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ display: "block", fontSize: "0.875rem" }}
						>
							Google Docs extension
						</Link>
					</Grid>

					<Grid item xs={12} sm={6} md={2}>
						<Typography variant="h6" gutterBottom>
							Company
						</Typography>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1, fontSize: "0.875rem" }}
						>
							About
						</Link>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1, fontSize: "0.875rem" }}
						>
							Careers
						</Link>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ fontSize: "0.875rem" }}
						>
							Contact
						</Link>
					</Grid>

					<Grid item xs={12} sm={6} md={2}>
						<Typography variant="h6" gutterBottom>
							Keenious for
						</Typography>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1, fontSize: "0.875rem" }}
						>
							Students
						</Link>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1, fontSize: "0.875rem" }}
						>
							Researchers
						</Link>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ fontSize: "0.875rem" }}
						>
							Librarians
						</Link>
					</Grid>

					<Grid item xs={12} sm={6} md={2}>
						<Typography variant="h6" gutterBottom>
							Universities
						</Typography>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1, fontSize: "0.875rem" }}
						>
							Overview
						</Link>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ fontSize: "0.875rem" }}
						>
							Contact Sales
						</Link>
					</Grid>

					<Grid item xs={12} sm={6} md={2}>
						<Typography variant="h6" gutterBottom>
							Resources
						</Typography>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1, fontSize: "0.875rem" }}
						>
							Research
						</Link>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ display: "block", mb: 1, fontSize: "0.875rem" }}
						>
							Blog
						</Link>
						<Link
							href="#"
							color="inherit"
							underline="hover"
							sx={{ fontSize: "0.875rem" }}
						>
							Help Center
						</Link>
					</Grid>
				</Grid>

				<Box mt={5} textAlign="center">
					<InstagramIcon sx={{ fontSize: 30, mx: 1, cursor: "pointer" }} />
					<FacebookIcon sx={{ fontSize: 30, mx: 1, cursor: "pointer" }} />
					<TwitterIcon sx={{ fontSize: 30, mx: 1, cursor: "pointer" }} />
					<YouTubeIcon sx={{ fontSize: 30, mx: 1, cursor: "pointer" }} />
					<LinkedInIcon sx={{ fontSize: 30, mx: 1, cursor: "pointer" }} />
				</Box>

				<Box mt={3} textAlign="center">
					<Link
						href="#"
						color="inherit"
						underline="hover"
						sx={{ mx: 1, fontSize: "0.875rem" }}
					>
						Accessibility
					</Link>
					<Link
						href="#"
						color="inherit"
						underline="hover"
						sx={{ mx: 1, fontSize: "0.875rem" }}
					>
						Terms of Use
					</Link>
					<Link
						href="#"
						color="inherit"
						underline="hover"
						sx={{ mx: 1, fontSize: "0.875rem" }}
					>
						Privacy Policy
					</Link>
					<Link
						href="#"
						color="inherit"
						underline="hover"
						sx={{ mx: 1, fontSize: "0.875rem" }}
					>
						Cookie Policy
					</Link>
				</Box>
			</Container>
		</Box>
	);
};
