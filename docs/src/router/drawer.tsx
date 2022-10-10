import React, { useState, useEffect, useCallback } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import {
    pageDefinitions,
    SimpleNavItem,
    SimpleGroupNavGroupItem,
} from '../__configuration__/navigationMenu/navigation';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { DRAWER_WIDTH } from '../shared';
import AvatarSvg from '../assets/react_logo.svg';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { closeDrawer, toggleDrawer } from '../redux/appState';

const backgroundImage = require('../assets/cubes_tile.png');
const linearGradientOverlayImage = `linear-gradient(to right, rgba(0, 123, 193, 1) 22.4%, rgba(0, 123, 193, 0.2) 100%), url(${backgroundImage})`;
const tabs = ['examples', 'api-docs', 'playground'];
export const NavigationDrawer: React.FC = () => {
    const drawerOpen = useAppSelector((state: RootState) => state.appState.drawerOpen);
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [activeRoute, setActiveRoute] = useState(location.pathname);
    const theme = useTheme();
    const lgDown = useMediaQuery(theme.breakpoints.down('lg'));
    const [tabPath, setTabPath] = useState(tabs);

    const createNavItems = useCallback(
        (navData: SimpleNavItem[], parentUrl: string, depth: number): NavItem[] => {
            const convertedItems: NavItem[] = [];
            for (let i = 0; i < navData.length; i++) {
                const item = navData[i];
                const fullURL = `${parentUrl}${item.url || ''}`;
                convertedItems.push({
                    title: item.title,
                    icon: depth === 0 ? item.icon : undefined,
                    itemID: fullURL,
                    hidePadding: depth > 0 ? false : true,
                    onClick: item.component
                        ? (): void => {
                              navigate(fullURL);
                              dispatch(toggleDrawer());
                          }
                        : undefined,
                    items: item.pages
                        ? createNavItems(item.pages, `${parentUrl}${item.url || ''}`, depth + 1)
                        : undefined,
                });
            }
            return convertedItems;
        },
        [navigate]
    );

    const createNavGroupItems = useCallback(
        (navData: SimpleGroupNavGroupItem[]) => {
            const convertedGroupItems = [];
            for (let i = 0; i < navData.length; i++) {
                const item = navData[i];
                convertedGroupItems.push({
                    groupTitle: item.groupTitle,
                    items: createNavItems(item.items, '', 0),
                });
            }
            return convertedGroupItems;
        },
        [createNavItems]
    );

    useEffect(() => {
        setTabPath(tabs);
        const pathname = tabPath.includes(location.pathname.split('/')[4])
            ? location.pathname.split('/')[4]
            : location.pathname.split('/')[3];
        setActiveRoute(location.pathname.replace(`/${tabPath[tabPath.indexOf(pathname)]}`, ''));
    }, [tabPath, location.pathname]);

    const [navGroupItems] = useState(createNavGroupItems(pageDefinitions));
    return (
        <Drawer
            open={drawerOpen}
            variant={lgDown ? 'temporary' : 'permanent'}
            activeItem={activeRoute}
            width={DRAWER_WIDTH}
            hidePadding
            activeItemBackgroundShape={'round'}
            ModalProps={{
                onClose: (): void => {
                    dispatch(closeDrawer());
                },
            }}
        >
            <DrawerHeader
                backgroundImage={backgroundImage}
                sx={{
                    '& .BluiDrawerHeader-background': {
                        backgroundImage: `${linearGradientOverlayImage}`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'right',
                    },
                }}
                titleContent={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            zIndex: 1,
                            padding: '0 16px',
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <div>
                            <Typography variant="subtitle1">Brightlayer UI</Typography>
                            <Box sx={{ marginTop: '-8px', display: 'flex' }}>
                                <Typography variant="body2" sx={{ p: '8px 8px 8px 0px' }}>
                                    Developer Docs
                                </Typography>
                                <Chip
                                    sx={{
                                        color: colors.blue[500],
                                        '& .MuiChip-avatar': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    avatar={<Avatar alt="React" src={AvatarSvg} />}
                                    label="REACT"
                                    variant="filled"
                                    color="success"
                                />
                            </Box>
                        </div>
                    </div>
                }
            />
            <DrawerBody>
                {navGroupItems.map((navGroupItem, index: number) => (
                    <DrawerNavGroup
                        key={index}
                        hidePadding
                        sx={{
                            '.BluiDrawerNavGroup-title': {
                                color: colors.blue[500],
                            },
                        }}
                        title={navGroupItem.groupTitle}
                        items={navGroupItem.items}
                    />
                ))}
            </DrawerBody>
        </Drawer>
    );
};
