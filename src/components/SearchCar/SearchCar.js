import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {useSelector} from 'react-redux'
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import './SearchCar.style.css';
export const SearchCar = () => {
    const theme = useSelector((state) => state.theme.value)

    const inputsSearchCar = [{ value: "Model", label: "Model" }
        , { value: "Brand", label: "Brand" },
    { value: "Year", label: "Year" }, { value: "Model", label: "Model" }
    , { value: "Brand", label: "Brand" },
{ value: "Year", label: "Year" },]

    return (


        <Container className='search'  >
            <Box className="search__box" sx={{ display: 'flex', justifyContent: 'center', background: 'white', boxShadow: 4, borderRadius: '3px' }}>
                <Grid className="search__grid" container spacing={{ xs: 2, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {inputsSearchCar.map((input) => (
                        <Grid xs={2} sm={4} md={4}>
                            <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
                                <InputLabel id="demo-simple-select-standard-label">{input.label}</InputLabel>
                                <Select
                                    key={input}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    placeholder={input.label}
                                    value={input.value}
                                    label={input.label}
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    ))}

                </Grid>
                <Button  style={{background: theme}} className='search__btn' variant="contained">SEARCH </Button>
            </Box>
        </Container>


    )
}
