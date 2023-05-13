import React, {useEffect, useState} from 'react';
import {Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import axios from "axios";
import {ApiUrl} from "../../../config";
import {toast} from "react-toastify";
import {Delete} from "@mui/icons-material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import Box from "@mui/material/Box";
import {Helmet} from "react-helmet-async";

function Index(props) {
    const token = localStorage.getItem("token")
    const columns = []
    const [rows,setRows]=useState<any[]>([])
    const data = async ()=>{
        try {
            const res = await axios.get(ApiUrl+"/users",{headers:{"Authorization":`Bearer ${token}`}})
            setRows(res.data.results)
        }catch (e) {
            toast.error(e.response.data.message)
        }
    }
    useEffect(()=>{
        data()
    },[])

    return (
        <>
            <Helmet>
                <title>
                    مشاهده سرویس دهنده
                </title>
            </Helmet>
            <Card sx={{padding:"15px"}}>
                <Box sx={{borderRadius:"5px"}}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align={"center"}>نام</TableCell>
                                    <TableCell align={"center"}>ایمیل</TableCell>
                                    <TableCell align={"center"}>شهر</TableCell>
                                    <TableCell align={"center"}>آدرس</TableCell>
                                    <TableCell align={"center"} >توضیحات</TableCell>
                                    <TableCell align={"center"}>شغل</TableCell>
                                    <TableCell align={"center"}>عملیات</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    rows.map(row=>{
                                        return(
                                            <TableRow key={row.id}>
                                                <TableCell align={"center"}>{row.name}</TableCell>
                                                <TableCell align={"center"}>{row.email}</TableCell>
                                                <TableCell align={"center"}>{row.city}</TableCell>
                                                <TableCell align={"center"}>{row.address}</TableCell>
                                                <TableCell align={"center"}>{row.description}</TableCell>
                                                <TableCell align={"center"}>{row.service}</TableCell>
                                                <TableCell align={"center"}>
                                                    <Delete sx={{fill:"red",cursor:"pointer"}}/>
                                                    <EditTwoToneIcon sx={{fill:"blue",cursor:"pointer"}}/>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Card>
        </>

    );
}

export default Index;