import React from 'react';
import { RootState } from '../../../redux/store';
import { useAppSelector } from '../../../redux/hooks';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import { createProps, getIcon, hideDefaultPropsFromSnippet, removeEmptyLines } from '../../../shared/utilities';
import { PropsType } from '../../../__types__';
import PreviewComponentWithCode from '../../../shared/PreviewComponentWithCode';

export const PreviewComponent = (): JSX.Element => {
    const infoListItemJson = useAppSelector((state: RootState) => state.componentsPropsState.infoListItemComponent);

    const infoListItemProps = createProps(infoListItemJson.props as PropsType[]);

    const toggleDefaultProp = (propName: string, currentValue: any, groupType?: string): string =>
        hideDefaultPropsFromSnippet(infoListItemJson, propName, currentValue, groupType);

    const generateCodeSnippet = (): string => {
        const jsx = `<InfoListItem
    ${toggleDefaultProp('avatar', infoListItemProps.avatar)}
    ${toggleDefaultProp('backgroundColor', infoListItemProps.backgroundColor)}
    ${toggleDefaultProp('chevron', infoListItemProps.chevron)}
    ${toggleDefaultProp('chevronColor', infoListItemProps.chevronColor)}
    ${toggleDefaultProp('dense', infoListItemProps.dense)}
    ${toggleDefaultProp('divider', infoListItemProps.divider)}
    ${toggleDefaultProp('fontColor', infoListItemProps.fontColor)}
    ${toggleDefaultProp('hidePadding', infoListItemProps.hidePadding)}
    ${toggleDefaultProp('icon', infoListItemProps.icon)}
    ${toggleDefaultProp('iconAlign', infoListItemProps.iconAlign)}
    ${toggleDefaultProp('iconColor', infoListItemProps.iconColor)}
    ${toggleDefaultProp('info', infoListItemProps.info)}
    ${toggleDefaultProp('ripple', infoListItemProps.ripple)}
    ${toggleDefaultProp('statusColor', infoListItemProps.statusColor)}
    ${toggleDefaultProp('subtitle', infoListItemProps.subtitle)}
    ${toggleDefaultProp('title', infoListItemProps.title)}
    ${toggleDefaultProp('wrapInfo', infoListItemProps.wrapInfo)}
    ${toggleDefaultProp('wrapSubtitle', infoListItemProps.wrapSubtitle)}
    ${toggleDefaultProp('wrapTitle', infoListItemProps.wrapTitle)}
    ${toggleDefaultProp('disabled', infoListItemProps.disabled)}
    onClick={(): void => {
        console.log("clicked");
    }}
/>`;
        return removeEmptyLines(jsx);
    };

    return (
        <PreviewComponentWithCode
            previewContent={
                <InfoListItem
                    sx={{ maxWidth: '700px' }}
                    avatar={infoListItemProps.avatar}
                    backgroundColor={infoListItemProps.backgroundColor}
                    chevron={infoListItemProps.chevron}
                    chevronColor={infoListItemProps.chevronColor}
                    dense={infoListItemProps.dense}
                    divider={infoListItemProps.divider === 'none' ? undefined : infoListItemProps.divider}
                    fontColor={infoListItemProps.fontColor}
                    hidePadding={infoListItemProps.hidePadding}
                    icon={getIcon(infoListItemProps.icon)}
                    iconAlign={infoListItemProps.iconAlign}
                    iconColor={infoListItemProps.iconColor}
                    info={infoListItemProps.info}
                    ripple={infoListItemProps.ripple}
                    statusColor={infoListItemProps.statusColor}
                    subtitle={infoListItemProps.subtitle}
                    title={infoListItemProps.title}
                    wrapInfo={infoListItemProps.wrapInfo}
                    wrapSubtitle={infoListItemProps.wrapSubtitle}
                    wrapTitle={infoListItemProps.wrapTitle}
                    disabled={infoListItemProps.disabled}
                    onClick={(): void => {}}
                />
            }
            code={generateCodeSnippet()}
        />
    );
};
