import { CustomEliceButton2 } from './EliceButton';

export default {
    title: 'components/CustomEliceButton',
    component: CustomEliceButton2,
    tags: ['autodocs'],
};

export const AllButtons = {
    name: 'all buttons',
    render: () => (
        <>
            <CustomEliceButton2 type='primary' size='large'>
                primary
            </CustomEliceButton2>
            <CustomEliceButton2 type='elice-violet' size='large'>
                elice-violet
            </CustomEliceButton2>
            <br />
            <CustomEliceButton2 type='primary' size='medium'>
                primary
            </CustomEliceButton2>
            <CustomEliceButton2 type='elice-violet' size='medium'>
                elice-violet
            </CustomEliceButton2>
            <br />
            <CustomEliceButton2 type='primary' size='small'>
                primary
            </CustomEliceButton2>
            <CustomEliceButton2 type='elice-violet' size='small'>
                elice-violet
            </CustomEliceButton2>
            <br />
        </>
    ),
};

// export const Primary = {
//     args: {
//         type: 'primary',
//         size: 'small',
//     },
// };

// export const Simple = {
//     args: {
//         user: {
//             name: 'Dominic Nyugen',
//             avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
//         },
//     },
// };
