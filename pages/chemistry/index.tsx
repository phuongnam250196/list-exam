import React, { useEffect, useState } from "react";
import Layout from "../../lib/components/Layout/Layout";
import {
    Grid, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Typography, Button, IconButton
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ChemistryStyle from "../../styles/Chemistry.module.scss";
import { useRouter } from 'next/router';
import { Bar } from 'react-chartjs-2';
const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: '# of Red Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(255, 99, 132)',
            stack: 'Stack 0',
        },
        {
            label: '# of Green Votes',
            data: [3, 10, 13, 15, 22, 30],
            backgroundColor: 'rgb(75, 192, 192)',
            stack: 'Stack 1',
        },
        {
            label: '# of Green Votes 2',
            data: [4, 12, 13, 2, 22, 20],
            backgroundColor: 'rgb(75, 192, 33)',
            stack: 'Stack 2',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];



const Chemistry = () => {
    const router = useRouter();
    const goTo = (url: any) => {
        router.push(url);
    }
    return (
        <Layout>
            <Grid>
                <Grid className={ChemistryStyle.ChemistryTitle}>
                    <Typography variant="h4" component="h4">Hóa chất đã sử dụng</Typography>
                    <Button 
                        onClick={()=>goTo('chemistry/create')} 
                        variant="contained" 
                        endIcon={<AddIcon />}
                        // size="small"
                    >Thêm mới</Button>
                </Grid>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Hóa chất</TableCell>
                                <TableCell align="right">Số lần</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row,index) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell>{index+1}</TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">
                                        <IconButton color="primary" aria-label="edit chemistry">
                                            <ModeEditIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            {/* <Grid>
                <Bar data={data} options={options} />
            </Grid> */}
        </Layout>
    )
}
export default Chemistry;