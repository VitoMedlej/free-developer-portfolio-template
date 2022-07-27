import { ListItem, ListItemButton, ListItemIcon} from "@mui/material";
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";
import { IDrawerItem } from "../../Types/Types";
import gsap from 'gsap'


const DrawerItem = ({text,Icon,url,toggleDrawer,onClick} :IDrawerItem) => {
    const router = useRouter()
    
  return (
    <ListItem  
    onClick={()=>{toggleDrawer(false);
       
        router.push(`${url || '/'}`)
       onClick && gsap.to(window, {
            duration: 2,
            scrollTo: `#ProjectSection`
        })
    
    }}

    disablePadding sx={{mb:'1em'}}>
    <ListItemButton>
        <ListItemIcon>
            <Icon/>
        </ListItemIcon>
        <Typography variant='h1' fontSize='.95em' fontWeight='400'>
            {text}
        </Typography>
    </ListItemButton>
</ListItem>
  )
}

export default DrawerItem