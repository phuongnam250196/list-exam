import React, { useEffect, useState } from "react";
import Layout from "../../lib/components/Layout/Layout";
import {
  Grid, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Typography
} from "@mui/material";
import { Bar } from 'react-chartjs-2';
import { AxisOptions, Chart } from "react-charts";
import useDemoConfig from "./_config/useDemoConfig";
import ResizableBox from "../../lib/components/Chart/ResizableBox";

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

const Admin = () => {

  const data = [
    {
      "label": "Series 1",
      "data": [
        {
          "primary": "tesst 0",
          "secondary": 27
        },
        {
          "primary": "Ordinal Group 1",
          "secondary": 39
        },
        {
          "primary": "Ordinal Group 2",
          "secondary": 66
        },
        {
          "primary": "Ordinal Group 3",
          "secondary": 97
        },
        {
          "primary": "Ordinal Group 4",
          "secondary": 41
        },
        {
          "primary": "Ordinal Group 5",
          "secondary": 49
        },
        {
          "primary": "Ordinal Group 6",
          "secondary": 97
        },
        {
          "primary": "Ordinal Group 7",
          "secondary": 99
        },
        {
          "primary": "Ordinal Group 8",
          "secondary": 68
        },
        {
          "primary": "Ordinal Group 9",
          "secondary": 87
        }
      ]
    },
    {
      "label": "Series 2",
      "data": [
        {
          "primary": "tesst 0",
          "secondary": 81
        },
        {
          "primary": "Ordinal Group 1",
          "secondary": 13
        },
        {
          "primary": "Ordinal Group 2",
          "secondary": 20
        },
        {
          "primary": "Ordinal Group 3",
          "secondary": 86
        },
        {
          "primary": "Ordinal Group 4",
          "secondary": 43
        },
        {
          "primary": "Ordinal Group 5",
          "secondary": 30
        },
        {
          "primary": "Ordinal Group 6",
          "secondary": 80
        },
        {
          "primary": "Ordinal Group 7",
          "secondary": 61
        },
        {
          "primary": "Ordinal Group 8",
          "secondary": 6
        },
        {
          "primary": "Ordinal Group 9",
          "secondary": 19
        }
      ]
    },
    {
      "label": "Series 3",
      "data": [
        {
          "primary": "tesst 0",
          "secondary": 77
        },
        {
          "primary": "Ordinal Group 1",
          "secondary": 92
        },
        {
          "primary": "Ordinal Group 2",
          "secondary": 100
        },
        {
          "primary": "Ordinal Group 3",
          "secondary": 68
        },
        {
          "primary": "Ordinal Group 4",
          "secondary": 73
        },
        {
          "primary": "Ordinal Group 5",
          "secondary": 3
        },
        {
          "primary": "Ordinal Group 6",
          "secondary": 72
        },
        {
          "primary": "Ordinal Group 7",
          "secondary": 20
        },
        {
          "primary": "Ordinal Group 8",
          "secondary": 61
        },
        {
          "primary": "Ordinal Group 9",
          "secondary": 22
        }
      ]
    },
    {
      "label": "Series 4",
      "data": [
        {
          "primary": "tesst 0",
          "secondary": 77
        },
        {
          "primary": "Ordinal Group 1",
          "secondary": 92
        },
        {
          "primary": "Ordinal Group 2",
          "secondary": 100
        },
        {
          "primary": "Ordinal Group 3",
          "secondary": 68
        },
        {
          "primary": "Ordinal Group 4",
          "secondary": 73
        },
        {
          "primary": "Ordinal Group 5",
          "secondary": 3
        },
        {
          "primary": "Ordinal Group 6",
          "secondary": 72
        },
        {
          "primary": "Ordinal Group 7",
          "secondary": 20
        },
        {
          "primary": "Ordinal Group 8",
          "secondary": 61
        },
        {
          "primary": "Ordinal Group 9",
          "secondary": 22
        }
      ]
    }
  ];

  const primaryAxis = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.primary as unknown as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<typeof data[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
        // stacked: true,
        elementType: "bar",
      },
    ],
    []
  );
  return (
    <Layout>
      <Grid>
        <Typography variant="h3" component="h4">Hóa chất đã sử dụng</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid>
        <ResizableBox>
          <Chart
            options={{
              data,
              primaryAxis,
              secondaryAxes
            }}
          />
        </ResizableBox>
      </Grid>
    </Layout>
  )
}
export default Admin;