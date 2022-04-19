import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined';

const Footer = () => {
    return (
        <Box sx={{background:'#ffbf00',
            position:'absolut', zIndex:4}}>
            <CardContent sx={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <Box sx={{textAlign:"center"}}>
                    <Typography variant="subtitle1" color="white" fontWeight="bold"> 
                    <LocalMoviesOutlinedIcon sx={{fontSize:35, mr:1}} color="white"/>
                    Movie App 
                    </Typography>
                    <Typography  variant="subtitle1" color="white"> 
                        Hecho con ♡ por Lucía
                    </Typography>
                </Box>
                <Box>
                    <Link href="https://github.com/LuciaSaederup" underline="none" sx={{p:2}}>
                        <GitHubIcon sx={{fontSize:35, color:"white"}}/>
                    </Link>

                    <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqkHJtlJJHksNwdsKfbvtkGlQSclRFHFwMncFQfZDCrHFBgTlNdvGzTKqPQxTmxhKfrQX" underline="none" sx={{p:2}}>
                        <MailIcon sx={{fontSize:35, color:"white"}}/>
                    </Link>

                    <Link href="https://ar.linkedin.com/in/lucia-saederup-244392139/" underline="none" sx={{p:2}}>
                        <LinkedInIcon sx={{fontSize:35, color:"white"}}/>
                    </Link>
                </Box>

            </CardContent>
        </Box>
    )
}

export default Footer;