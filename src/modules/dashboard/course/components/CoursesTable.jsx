import React from 'react';

import { getCourses } from '../repository/CourseRepository';

import DataTable from "../../../../components/Table";


const columns = [
    { id: 'name', label: 'Nome', minWidth: 170 },
    { id: 'category', label: 'Categoria', minWidth: 100 },
    { id: 'description', label: 'Descrição', minWidth: 100 },
    // {
    //     id: 'population',
    //     label: 'Population',
    //     minWidth: 170,
    //     align: 'right',
    //     format: value => value.toLocaleString(),
    // },
    // {
    //     id: 'size',
    //     label: 'Size\u00a0(km\u00b2)',
    //     minWidth: 170,
    //     align: 'right',
    //     format: value => value.toLocaleString(),
    // },
    // {
    //     id: 'density',
    //     label: 'Density',
    //     minWidth: 170,
    //     align: 'right',
    //     format: value => value.toFixed(2),
    // },
];

function handleClick(item) {
    window.location.href = 'courses/'+item.id;
}

const HTTPERRORS = {
    "401": function () {
        window.location.href = '/login';
    },
}

function handleHttpStatus(code) {
    HTTPERRORS[code]();
}

export default function CoursesTable() {
    const [rows, setRows] = React.useState([]);

    getCourses().then((res) => {
        if (res.status === 200) {
            setRows(res.data['content']);
        } else {
            handleHttpStatus(res.status);
        }

    }).catch((e) => {
        console.log(e);
    });

    return (<div>
        <DataTable columns={columns} rows={rows} onClick={handleClick} />
    </div>);
}
