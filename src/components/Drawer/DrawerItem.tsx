import { ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import Typography from '@mui/material/Typography';


interface IDrawerItem {
    text : string;
    Icon  : OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
}
const DrawerItem = ({text,Icon} :IDrawerItem) => {
  return (
    <ListItem  disablePadding sx={{my:'.5em'}}>
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