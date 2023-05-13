import React from 'react';
import Box from "@mui/material/Box";
import {Button, Card, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Delete, Title} from "@mui/icons-material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import TextField from "@mui/material/TextField";
import Text from "../../../components/Text";
import {Helmet} from "react-helmet-async";

function Index(props) {
    return (
<>
    <Helmet>
        <title>
            افزودن سرویس دهنده
        </title>
    </Helmet>
    <Card sx={{padding: "15px"}}>

        <h3 style={{margin:"20px 0"}}>
            افزودن سرویس دهنده
        </h3>
        <Box sx={{borderRadius: "5px"}}>
            {/*<TableContainer>*/}
            {/*    <Table>*/}
            {/*        <TableHead>*/}
            {/*            <TableRow>*/}
            {/*                <TableCell align={"center"}>نام</TableCell>*/}
            {/*                <TableCell align={"center"}>ایمیل</TableCell>*/}
            {/*                <TableCell align={"center"}>شهر</TableCell>*/}
            {/*                <TableCell align={"center"}>آدرس</TableCell>*/}
            {/*                <TableCell align={"center"}>توضیحات</TableCell>*/}
            {/*                <TableCell align={"center"}>شغل</TableCell>*/}
            {/*                <TableCell align={"center"}>عملیات</TableCell>*/}
            {/*            </TableRow>*/}
            {/*        </TableHead>*/}
            {/*        <TableBody>*/}
            {/*            <TableRow>*/}
            {/*                <TableCell align={"center"}>*/}
            {/*                    <TextField*/}
            {/*                        required*/}
            {/*                        id="standard-required"*/}
            {/*                        // defaultValue={person.city}*/}
            {/*                        variant="standard"*/}
            {/*                        type={"text"}*/}
            {/*                        // disabled={editOpen}*/}
            {/*                        // onChange={e=>setPerson(prev=>({...prev,city:e.target.value}))}*/}
            {/*                    />*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align={"center"}>*/}
            {/*                    <TextField*/}
            {/*                        required*/}
            {/*                        id="standard-required"*/}
            {/*                        // defaultValue={person.city}*/}
            {/*                        variant="standard"*/}
            {/*                        type={"text"}*/}
            {/*                        // disabled={editOpen}*/}
            {/*                        // onChange={e=>setPerson(prev=>({...prev,city:e.target.value}))}*/}
            {/*                    />*/}
            {/*                </TableCell>*/}
            {/*                <TableCell align={"center"}></TableCell>*/}
            {/*                <TableCell align={"center"}></TableCell>*/}
            {/*                <TableCell align={"center"}></TableCell>*/}
            {/*                <TableCell align={"center"}></TableCell>*/}
            {/*                <TableCell align={"center"}>*/}
            {/*                    <Delete sx={{fill: "red", cursor: "pointer"}}/>*/}
            {/*                    <EditTwoToneIcon sx={{fill: "blue", cursor: "pointer"}}/>*/}
            {/*                </TableCell>*/}
            {/*            </TableRow>*/}
            {/*        </TableBody>*/}
            {/*    </Table>*/}
            {/*</TableContainer>*/}
            <Grid container alignItems={"center"} textAlign={"right"}>
                <Grid item sm={12} md={4} xl={4} pb={5}>
                    <TextField
                        required
                        id="standard-required"
                        label="نام"
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={12} md={4} xl={4} pb={5}>
                    <TextField
                        required
                        id="standard-required"
                        label="ایمیل"
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={12} md={4} xl={4} pb={5}>
                    <TextField
                        required
                        id="standard-required"
                        label="تلفن همراه"
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={12} md={4} xl={4} pb={5}>
                    <TextField
                        required
                        id="standard-required"
                        label="شهر"
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={12} md={4} xl={4} pb={5}>
                    <TextField
                        required
                        id="standard-required"
                        label="شغل"
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={12} md={4} xl={4} pb={5}>
                    <TextField

                        id="standard-required"
                        label="توضیحات"
                        variant="standard"
                    />
                </Grid>
                <Grid item sm={12} md={12} xl={12} pb={5}>
                    <TextField
                        required
                        id="standard-required"
                        label="آدرس"
                        variant="standard"
                        sx={{width:"70%"}}

                    />
                </Grid>
                <Grid item sm={12} md={1} xl={1} pb={5}>
                    <Button color={"success"} variant="contained">
                        ثبت
                    </Button>
                </Grid>
                <Grid item sm={12} md={1} xl={1} pb={5}>
                    <Button color={"error"} variant="contained">
                        انصراف
                    </Button>
                </Grid>

            </Grid>
        </Box>
    </Card>
</>

    );
}

export default Index;