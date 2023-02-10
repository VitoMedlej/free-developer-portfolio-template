import {ListItem, ListItemButton, ListItemIcon} from "@mui/material";
import Typography from '@mui/material/Typography';
import {useRouter} from "next/router";
import {IDrawerItem} from "../../Types/Types";
import gsap from 'gsap'
import {useContext} from "react";
import {ColorModeContext} from "../../../pages/_app";

const DrawerItem = ({text, Icon, url, toggleDrawer, isToggleTheme} : IDrawerItem) => {
    const router = useRouter()
    let isScrollTo = text === 'Projects';
    const colorMode = useContext(ColorModeContext)

    return (
        <ListItem
            onClick={() => {
            if (isToggleTheme) {
                toggleDrawer(false);
                isToggleTheme && colorMode.toggleColorMode()
                return;
            }
            toggleDrawer(false);
            router.push(`${url || '/'}`);
            isScrollTo  && gsap.to(window, {
                duration: 2,
                scrollTo: `#ProjectSection`
            });
            // isToggleTheme && colorMode.toggleColorMode()
        }}
            disablePadding
            sx={{
            my: '.5em',
         

        }}>
            <ListItemButton sx={{   py:'.75em'}}>
                <ListItemIcon>
                    <Icon/>
                </ListItemIcon>
                <Typography variant='h1' fontSize='.95em' fontWeight='500'>
                    {text}
                </Typography>
            </ListItemButton>
        </ListItem>
    )
}

export default DrawerItem