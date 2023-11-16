import { CustomEliceButton } from '@dev.leekiseok/elice-storybook/dist';
// import { CustomEliceButton } from '@dev.leekiseok/elice-storybook';

export const CustomEliceButton2 = ({ type, size, children }) => {
    return (
        <CustomEliceButton type={type} size={size}>
            {children}
        </CustomEliceButton>
    );
};
