import { Button } from "@mui/material";

export const NavbarButton = ({ text }: { text: string }) => {
	return (
		<>
			<Button
				variant="contained"
				sx={{
					backgroundColor: "#6030FF",
					padding: "15px 25px",
					borderRadius: "30px",
					textTransform: "none",
					color: "white",
					transition: "transform 0.3s ease-in-out",
					"&:hover": {
						transform: "scale(1.1)",
					},
				}}
			>
				{text}
			</Button>
		</>
	);
};
