import { Typography } from '@mui/material';

function PageHeader() {
  const user1 = {
    name: 'احمد',
    avatar: '/static/images/avatars/1.jpg'
  };
    const user = JSON.parse(localStorage.getItem("user"))
  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        تنظیمات حساب کاربری
      </Typography>
      <Typography variant="subtitle2">
        {user.name}, این پنل تنظیمات کاربر شما میباشد.
      </Typography>
    </>
  );
}

export default PageHeader;
