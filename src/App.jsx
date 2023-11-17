import { useState } from 'react';
import './App.css';
import {
    CustomEliceButton,
    CustomEliceCard,
} from '@dev.leekiseok/elice-storybook/dist';
import Test from '../src/assets/test.jpg';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className='App'>
            <header className='App-header'>
                <h1>Elice UI Components</h1>
                <p>yarn add @dev.leekiseok/elice-storybook</p>
            </header>

            <section>
                <h2>CustomEliceButton</h2>
                <CustomEliceButton type='primary'>
                    Primary Button
                </CustomEliceButton>
                <CustomEliceButton type='elice-violet'>
                    Elice Violet Button
                </CustomEliceButton>
            </section>

            <section>
                <h2>CustomEliceCard</h2>
                <CustomEliceCard
                    cards={[
                        {
                            size: 'medium',
                            tags: ['LCK', 'T1', 'LPL'],
                            date: '2023. 11. 16',
                            title: '지속적으로 건강하게 코딩하는 법',
                            src: Test,
                            postId: 1,
                        },
                        {
                            size: 'medium',
                            tags: ['LCK', 'T1', 'LPL'],
                            date: '2023. 11. 16',
                            title: '지속적으로 건강하게 코딩하는 법',
                            src: Test,
                            postId: 1,
                        },
                    ]}
                />
            </section>
        </div>
    );
}

export default App;
