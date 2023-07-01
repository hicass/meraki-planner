import { useState, useEffect } from 'react';
import StatusColumn from '../../components/StatusColumn/StatusColumn';

export default function Todos({ todosStatus }) {
    return (
        <>
            <h1>Todos</h1>
            {todosStatus.map((statusColumn, idx) => (
                <StatusColumn statusColumn={statusColumn} key={idx} />
            ))}
        </>
    )
}