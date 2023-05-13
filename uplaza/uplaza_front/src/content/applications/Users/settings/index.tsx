import {useState, ChangeEvent, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Tabs, Tab, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import { styled } from '@mui/material/styles';

import ActivityTab from './ActivityTab';
import EditProfileTab from './EditProfileTab';
import NotificationsTab from './NotificationsTab';
import SecurityTab from './SecurityTab';
import axios from "axios";
import {ApiUrl} from "../../../../config";
import {toast} from "react-toastify";

const TabsWrapper = styled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function ManagementUserSettings() {
  const [currentTab, setCurrentTab] = useState<string>('edit_profile');
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

  const tabs = [
    // { value: 'activity', label: 'Activity' },
    { value: 'edit_profile', label: 'ویرایش پروفایل' },
    // { value: 'notifications', label: 'اعلانات' },
    { value: 'security', label: 'رمزعبور/امنیت' }
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Helmet>
        <title>تنظیمات حساب کاربری</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {/*{currentTab === 'activity' && <ActivityTab />}*/}
            {currentTab === 'edit_profile' && <EditProfileTab />}
            {currentTab === 'notifications' && <NotificationsTab />}
            {currentTab === 'security' && <SecurityTab />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserSettings;
