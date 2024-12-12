import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import './SearchCar.style.css';

export const SearchCar = () => {
    const theme = useSelector((state) => state.theme.value);

    // Dados reais para modelos, marcas e anos no Brasil
    const models = [
        'Fiat Uno', 'Fiat Palio', 'Volkswagen Gol', 'Volkswagen Polo', 'Chevrolet Onix',
        'Chevrolet Tracker', 'Honda Civic', 'Honda HR-V', 'Toyota Corolla', 'Ford Ka',
        'Ford Fiesta', 'Renault Kwid', 'Renault Duster', 'Nissan Kicks'
    ];
    const brands = [
        'Fiat', 'Volkswagen', 'Chevrolet', 'Honda', 'Toyota', 'Ford', 'Renault', 'Nissan'
    ];
    const years = ['2020', '2021', '2022', '2023'];

    const inputsSearchCar = [
        { value: "Model", label: "Modelo", options: models },
        { value: "Brand", label: "Marca", options: brands },
        { value: "Year", label: "Ano", options: years }
    ];

    return (
        <Container className="search">
            <Box
                className="search__box"
                sx={{ display: 'flex', justifyContent: 'center', background: 'white', boxShadow: 4, borderRadius: '3px' }}
            >
                <Grid className="search__grid" container spacing={{ xs: 2, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {inputsSearchCar.map((input, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
                                <InputLabel id={`select-label-${input.value}`}>{input.label}</InputLabel>
                                <Select
                                    labelId={`select-label-${input.value}`}
                                    id={`select-${input.value}`}
                                    placeholder={input.label}
                                    value=""
                                    label={input.label}
                                >
                                    {input.options.map((option, idx) => (
                                        <MenuItem key={idx} value={option}>{option}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    ))}
                </Grid>
                <Button style={{ background: theme }} className="search__btn" variant="contained">
                    PROCURAR
                </Button>
            </Box>
        </Container>
    );
};
