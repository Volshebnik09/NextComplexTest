import * as React from 'react';

type Props = {
    children?: React.ReactNode
};
export const Container = (props: Props) => {
    const maxWidth = 1442
    // Для мобильных устройств
    const paddingX = 14

    return (
        <div
            style={{
                maxWidth: maxWidth,
                paddingLeft: paddingX,
                paddingRight: paddingX,
                margin: 'auto'
            }}
        >
            {props.children}
        </div>
    );
};

