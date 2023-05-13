import React from 'react';
import {Helmet} from "react-helmet-async";
import {Button, Card, Grid} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import UploadTwoToneIcon from "@mui/icons-material/UploadTwoTone";
import {styled} from "@mui/material/styles";
const Input = styled('input')({
    display: 'none'
});
function Index(props) {
    return (
        <>
            <Helmet>
                <title>
                    افزودن سرویس
                </title>
            </Helmet>
            <Card sx={{padding: "15px"}}>

                <h3 style={{margin:"20px 0"}}>
                    افزودن سرویس
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
                                id="outlined-required"
                                label="نام سرویس"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item sm={12} md={4} xl={4} pb={5}>
                            <TextField
                                required
                                id="outlined-required"
                                label="توضیحات"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item sm={12} md={4} xl={4} pb={5}>
                            <Input accept="image/*" id="change-cover" type="file" name={"service"} />
                            <label htmlFor="change-cover">
                                <Button
                                    startIcon={<UploadTwoToneIcon />}
                                    variant="contained"
                                    component="span"
                                >
                                    انتخاب عکس
                                </Button>
                            </label>
                        </Grid>

                        <Grid item sm={12} md={1} xl={1} pb={5}>
                            <Button color={"success"} variant="contained">
                                ایجاد
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