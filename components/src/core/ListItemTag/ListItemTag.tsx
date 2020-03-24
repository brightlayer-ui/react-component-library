import { Typography, TypographyProps } from '@material-ui/core';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import React from 'react';
import clsx from 'clsx';

export type ListItemTagProps = {
    /* Color of the label background. Default is theme.palette.primary.main */
    backgroundColor?: string;

    /* Color of the label. Default is theme.palette.primary.contrastText. */
    fontColor?: string;

    /* The string label of the tag. */
    label: string;
} & TypographyProps;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main,
            fontWeight: 'bold',
            letterSpacing: 1,
            borderRadius: theme.spacing(0.25),
            padding: 0,
            paddingLeft: theme.spacing(0.5),
            paddingRight: theme.spacing(0.5),
            lineHeight: 'inherit',
            color: theme.palette.primary.contrastText,
            overflow: 'hidden',
        },
    })
);

export const ListItemTag: React.FC<ListItemTagProps> = (props: ListItemTagProps): JSX.Element => {
    const {
        backgroundColor,
        classes: userClasses = {},
        display = 'inline',
        fontColor,
        label,
        noWrap = true,
        style,
        variant = 'overline',
        ...other
    } = props;
    const theme = useTheme();
    const defaultClasses = useStyles(theme);
    const { root: rootUserClass, ...otherUserClasses } = userClasses;
    return (
        <Typography
            classes={{ root: clsx(defaultClasses.root, rootUserClass), ...otherUserClasses }}
            style={Object.assign(
                {
                    color: fontColor,
                    backgroundColor: backgroundColor,
                    cursor: props.onClick ? 'pointer' : 'default',
                },
                style
            )}
            data-test={'list-item-tag'}
            noWrap={noWrap}
            variant={variant}
            display={display}
            {...other}
        >
            {label}
        </Typography>
    );
};

ListItemTag.displayName = 'ListItemTag';
