import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Grid, Container } from '@mui/material';

import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';
import Feed from './Feed';
import PopularTags from './PopularTags';
import MyCards from './MyCards';
import Addresses from './Addresses';
import axios from "axios";
import {ApiUrl} from "../../../../config";
import {toast} from "react-toastify";
import {useEffect} from "react";

function ManagementUserProfile() {
  const user1 = {
    savedCards: 7,
    name: 'Catherine Pike',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage",
    jobtitle: 'Web Developer',
    location: 'Barcelona, Spain',
    followers: '465'
  };
    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))
    const getUser = async ()=>{

        if (!user || user===undefined || !token)return location.replace("/signin")
        // try {
        //     const res = await axios.get(ApiUrl+"/users/"+user.id,{headers:{"Authorization":`Bearer ${token}`}})
        //     localStorage.setItem("user",JSON.stringify(res.data.user))
        // }catch (e) {
        //     toast.error(e.response.data.message)
        // }
    }
    getUser()
    useEffect(()=>{
    },[])
  return (
    <>
      <Helmet>
        <title>اطلاعات کاربری</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          {/*<Grid item xs={12} md={4}>*/}
          {/*  <RecentActivity />*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} md={8}>*/}
          {/*  <Feed />*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} md={4}>*/}
          {/*  <PopularTags />*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} md={7}>*/}
          {/*  <MyCards />*/}
          {/*</Grid>*/}
          {/*<Grid item xs={12} md={5}>*/}
          {/*  <Addresses />*/}
          {/*</Grid>*/}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
