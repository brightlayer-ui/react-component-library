import React from 'react';
import { Box } from '@mui/material';
import { Spacer } from '@brightlayer-ui/react-components';

export const SpacerWithPixelExample = (): JSX.Element => (
    <Box>
        <Box sx={{ width: '300px', height: '56px', display: 'flex' }}>
            <Spacer maxWidth={25} style={{ background: '#4da3d4' }}>
                25
            </Spacer>
            <Spacer maxWidth={75} style={{ background: '#f5db6d' }}>
                75
            </Spacer>
            <Spacer maxWidth={200} style={{ background: '#da7777' }}>
                200
            </Spacer>
        </Box>

        <Box sx={{ mt: 4, width: '300px' }}>
            <Spacer height={25} style={{ background: '#4da3d4' }}>
                25
            </Spacer>
            <Spacer height={50} style={{ background: '#f5db6d' }}>
                50
            </Spacer>
            <Spacer height={75} style={{ background: '#da7777' }}>
                75
            </Spacer>
        </Box>
    </Box>
);
