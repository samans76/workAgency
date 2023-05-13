import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import avatar2 from '../../../assets/images/avatar2.png'

function PageHeader() {
  const user1 = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  const user = JSON.parse(localStorage.getItem("user"))
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name}
          src={avatar2}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          خوش آمدید, {user.name}!
        </Typography>
        <Typography variant="subtitle2">

        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
