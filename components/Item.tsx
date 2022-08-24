/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRightIcon } from '@100mslive/react-icons';
import { Flex, Text } from '@100mslive/react-ui';
import React from 'react';

interface Props {
    logo?: React.SVGProps<SVGSVGElement>;
    endLogo?: React.SVGProps<SVGSVGElement> | null;
    css?: {};
    textCSS?: {};
    text: string;
    textVariant?: any;
}

const Item: React.FC<Props> = ({
    logo,
    text,
    textVariant = 'body2',
    textCSS,
    endLogo = <ChevronRightIcon style={{ height: '14px' }} />,
    css
}) => (
    <Flex
        className="hoverParent"
        css={{
            ':hover .hoverChild': {
                right: '-$11'
            },
            marginRight: '$8',
            ...css
        }}
        align="center">
        <Text
            variant={textVariant}
            css={{
                display: 'flex',
                gap: '$4',
                fontWeight: '$semiBold',
                position: 'relative',
                color: '$textMedEmp',
                alignItems: 'center',
                ...textCSS
            }}>
            {logo}
            {text}
            <Flex
                className="hoverChild"
                css={{
                    transition: '0',
                    position: 'absolute',
                    right: '-25px'
                }}>
                {endLogo}
            </Flex>
        </Text>
    </Flex>
);

export default Item;