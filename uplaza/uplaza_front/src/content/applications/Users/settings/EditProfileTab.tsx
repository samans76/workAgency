import {
    Grid,
    Typography,
    CardContent,
    Card,
    Box,
    Divider,
    Button, TextareaAutosize
} from '@mui/material';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import Text from 'src/components/Text';
import Label from 'src/components/Label';
import TextField from "@mui/material/TextField";
import {useEffect, useState} from "react";
import axios from "axios";
import {ApiUrl} from "../../../../config";
import {toast} from "react-toastify";


function EditProfileTab() {
    const user = JSON.parse(localStorage.getItem("user"))
    const token = localStorage.getItem("token")

    const [editOpen, setEditOpen] = useState<boolean>(true)
    const [person, setPerson] = useState<any>({
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
        city: user?.city,
        service: user?.service,
        address: user?.address,
        description: user?.description
    })

    const edit = () => {
        setEditOpen(!editOpen)
    }
    const editPost = async ()=>{
        try {
            const res = await axios.patch(ApiUrl+"/users/"+user.id,{
                name: person.name,
                email: person.email,
                phone: person.phone,
                city: person.city,
                service: person.service,
                address: person.address,
                description: person.description
            },{headers:{"Authorization":`Bearer ${token}`}})
            localStorage.setItem("user",JSON.stringify(res.data))
            setEditOpen(true)
            toast.success("تغییرات با موفقیت ثبت شد")

        }catch (e) {
            setEditOpen(true)
            toast.error(e.response.data.message)

        }
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card>
                    <Box
                        p={3}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Box>
                            <Typography variant="h4" gutterBottom>
                                اطلاعات شخصی
                            </Typography>
                            <Typography variant="subtitle2">
                                اطلاعات مربوط به اطلاعات شخصی خود را مدیریت کنید
                            </Typography>
                        </Box>
                        {editOpen ?
                            <Button variant="text" endIcon={<EditTwoToneIcon/>} onClick={edit}/>
                            :
                            <Button endIcon={<DoneTwoToneIcon sx={{fill: "green"}}/>} onClick={editPost}/>
                        }
                    </Box>
                    <Divider/>
                    <CardContent sx={{p: 4}}>
                        <Typography variant="subtitle2">
                            <Grid container spacing={0} sx={{alignItems: "center", justifyContent: "center"}}>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        نام:
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8} md={9}>
                                    <TextField
                                        required
                                        id="standard-required"
                                        defaultValue={person.name}
                                        variant="standard"
                                        disabled={editOpen}
                                        onChange={e=>setPerson(prev=>({...prev,name:e.target.value}))}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        شماره تلفن:
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8} md={9}>
                                    <TextField
                                        required
                                        id="standard-required"
                                        defaultValue={person.phone}
                                        variant="standard"
                                        type={"number"}
                                        disabled={editOpen}
                                        onChange={e=>setPerson(prev=>({...prev,phone:e.target.value}))}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        شهر:
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8} md={9}>
                                    <TextField
                                        required
                                        id="standard-required"
                                        defaultValue={person.city}
                                        variant="standard"
                                        type={"text"}
                                        disabled={editOpen}
                                        onChange={e=>setPerson(prev=>({...prev,city:e.target.value}))}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        سرویس:
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8} md={9}>
                                    <TextField
                                        required
                                        id="standard-required"
                                        defaultValue={person.service}
                                        variant="standard"
                                        type={"text"}
                                        disabled={true}

                                        onChange={e=>setPerson(prev=>({...prev,service:e.target.value}))}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        آدرس:
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8} md={9}>
                                    <Box sx={{maxWidth: {xs: 'auto', sm: 300}}}>
                                        <TextField
                                            required
                                            id="standard-required"
                                            defaultValue={person.address}
                                            variant="standard"
                                            disabled={editOpen}
                                            sx={{width:"100%"}}
                                            onChange={e=>setPerson(prev=>({...prev,address:e.target.value}))}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Box
                        p={3}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Box>
                            <Typography variant="h4" gutterBottom>
                                تنظیمات
                            </Typography>
                            <Typography variant="subtitle2">
                                جزئیات مربوط به حساب خود را مدیریت کنید
                            </Typography>
                        </Box>
                        {editOpen ?
                            <Button variant="text" endIcon={<EditTwoToneIcon/>} onClick={edit}/>
                            :
                            <Button endIcon={<DoneTwoToneIcon sx={{fill: "green"}}/>} onClick={editPost}/>
                        }
                    </Box>
                    <Divider/>
                    <CardContent sx={{p: 4}}>
                        <Typography variant="subtitle2">
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        زبان:
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8} md={9}>
                                    <Text color="black">
                                        <b>فارسی</b>
                                    </Text>
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        منطقه زمانی:
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8} md={9}>
                                    <Text color="black">
                                        <b>GMT +3:30</b>
                                    </Text>
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        وضعیت حساب:
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8} md={9}>
                                    <Label color="success">
                                        <DoneTwoToneIcon fontSize="small"/>
                                        <b>فعال</b>
                                    </Label>
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        توضیحات من:
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        <TextareaAutosize
                                            style={{borderRadius:"5px",padding:"10px"}}
                                        id="standard-required"
                                        defaultValue={person.description}
                                        disabled={editOpen}
                                        minRows={2}
                                        onChange={e=>setPerson(prev=>({...prev,description:e.target.value}))}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <Box
                        p={3}
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <Box>
                            <Typography variant="h4" gutterBottom>
                                ایمیل
                            </Typography>
                            <Typography variant="subtitle2">
                                جزئیات مربوط به آدرس های ایمیل مرتبط خود را مدیریت کنید
                            </Typography>
                        </Box>
                        {editOpen ?
                            <Button variant="text" endIcon={<EditTwoToneIcon/>} onClick={edit}/>
                            :
                            <Button endIcon={<DoneTwoToneIcon sx={{fill: "green"}}/>} onClick={editPost}/>
                        }
                    </Box>
                    <Divider/>
                    <CardContent sx={{p: 4}}>
                        <Typography variant="subtitle2">
                            <Grid container spacing={0}>
                                <Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>
                                    <Box pr={3} pb={2}>
                                        ایمیل:
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8} md={9}>
                                    <TextField
                                        required
                                        id="standard-required"
                                        defaultValue={person.email}
                                        variant="standard"
                                        disabled={editOpen}
                                        sx={{width:"100%"}}
                                        onChange={e=>setPerson(prev=>({...prev,email:e.target.value}))}
                                    />
                                    <Box pl={1} component="span">
                                        <Label color="success">Primary</Label>
                                    </Box>
                                </Grid>
                                {/*<Grid item xs={12} sm={4} md={3} textAlign={{sm: 'right'}}>*/}
                                {/*    <Box pr={3} pb={2}>*/}
                                {/*        ایمیل:*/}
                                {/*    </Box>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={12} sm={8} md={9}>*/}
                                {/*    <Text color="black">*/}
                                {/*        <b>demo@example.com</b>*/}
                                {/*    </Text>*/}
                                {/*</Grid>*/}
                            </Grid>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default EditProfileTab;
