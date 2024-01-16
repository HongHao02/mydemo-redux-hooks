import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './counterSlice';
import styles from './Counter.module.css';

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.row}>
                    <div className={styles.countvalue}>
                        <span>Store count value:</span>
                        <strong>{count}</strong>
                    </div>
                    <input
                        className={styles.textbox}
                        aria-label="Set increment amount"
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(e.target.value)}
                    />
                    <div className={styles.action}>
                        <button
                            className={styles.button}
                            onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                        >
                            Add Amount
                        </button>
                        <button
                            className={styles.button}
                            onClick={() => dispatch(increment())}
                        >
                            Add
                        </button>
                        <button
                            className={styles.asyncButton}
                            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                        >
                            Add Async
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
