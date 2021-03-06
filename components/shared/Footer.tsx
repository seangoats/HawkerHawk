//mui
import { Box, Typography, Link } from '@mui/material';

/**
 * Renders the footer component
 *
 * @returns {JSX.Element} - The footer component
 */
const Footer = (): JSX.Element => {
	return (
		<Box sx={{ bgcolor: 'background.paper', p: 6, display: 'flex' }} component='footer'>
			<Typography variant='subtitle1' align='center' color='text.secondary' gutterBottom>
				Built by
				<Link underline='hover' href='https://github.com/seangoats'>
					@seangoats&nbsp;
				</Link>
			</Typography>
			<Typography variant='subtitle1' align='center' color='text.secondary' gutterBottom>
				| {'Copyright © 2022 '}{' '}
				<Link underline='hover' color='inherit' href='https://github.com/seangoats/HawkerHawk'>
					Hawker Hawk
				</Link>{' '}
			</Typography>
		</Box>
	);
};

export default Footer;
