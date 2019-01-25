import React from 'react';
import Card from './Card';
import ErrorBoundary from './ErrorBoundary';
// import { robots } from '../robots';

const CardList = ({ robots }) => {
    // throw error to check ErrorBoundary.js
    // if (true) {
    //     throw new Error ('NO');
    // }
    return (
        <div>
            {
                robots.map((use, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}


export default CardList;