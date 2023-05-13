import {
    Button,
    Card,
    Box,
    Grid,
    Typography,
    useTheme,
    styled,
    Avatar,
    Divider,
    alpha,
    ListItem,
    ListItemText,
    List,
    ListItemAvatar
} from '@mui/material';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Text from 'src/components/Text';
import Chart from 'react-apexcharts';
import type {ApexOptions} from 'apexcharts';
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from 'swiper'
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import './style.scss'
import axios from "axios";
import {ApiUrl} from "../../../config";
import {toast} from "react-toastify";


const AvatarSuccess = styled(Avatar)(
    ({theme}) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const ListItemAvatarWrapper = styled(ListItemAvatar)(
    ({theme}) => `
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${theme.spacing(1)};
  padding: ${theme.spacing(0.5)};
  border-radius: 60px;
  background: ${
        theme.palette.mode === 'dark'
            ? theme.colors.alpha.trueWhite[30]
            : alpha(theme.colors.alpha.black[100], 0.07)
    };

  img {
    background: ${theme.colors.alpha.trueWhite[100]};
    padding: ${theme.spacing(0.5)};
    display: block;
    border-radius: inherit;
    height: ${theme.spacing(4.5)};
    width: ${theme.spacing(4.5)};
  }
`
);

function AccountBalance() {
    const theme = useTheme();

    const chartOptions: ApexOptions = {
        chart: {
            background: 'transparent',
            stacked: false,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '60%'
                }
            }
        },
        colors: ['#ff9900', '#1c81c2', '#333', '#5c6ac0'],
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + '%';
            },
            style: {
                colors: [theme.colors.alpha.trueWhite[100]]
            },
            background: {
                enabled: true,
                foreColor: theme.colors.alpha.trueWhite[100],
                padding: 8,
                borderRadius: 4,
                borderWidth: 0,
                opacity: 0.3,
                dropShadow: {
                    enabled: true,
                    top: 1,
                    left: 1,
                    blur: 1,
                    color: theme.colors.alpha.black[70],
                    opacity: 0.5
                }
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                color: theme.colors.alpha.black[50],
                opacity: 0.5
            }
        },
        fill: {
            opacity: 1
        },
        labels: ['Bitcoin', 'Ripple', 'Cardano', 'Ethereum'],
        legend: {
            labels: {
                colors: theme.colors.alpha.trueWhite[100]
            },
            show: false
        },
        stroke: {
            width: 0
        },
        theme: {
            mode: theme.palette.mode
        }
    };

    const chartSeries = [10, 20, 25, 45];
    const [service, setService] = useState<string>("")

    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"))
    const serviceChange = async (value) => {
        try {
            const res = await axios.patch(ApiUrl + "/users/" + user.id, {service:value},{headers: {"Authorization": `Bearer ${token}`}})
            localStorage.setItem("user",JSON.stringify(res.data))
            toast.success("سرویس تغییر یافت")
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
    // @ts-ignore
    return (
        <Card>
            <Grid spacing={0} container>
                <Grid item xs={12} md={12}>
                    <Box p={4}>
                        <Typography
                            sx={{
                                pb: 3
                            }}
                            variant="h4"
                        >
                            دسته بندی سرویس ها
                        </Typography>
                        <Box>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={4}
                                style={{textAlign: "center", height: "100%"}}
                                pagination={{clickable: true}}
                            >
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}>خدمات آرایشی و بهداشتی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}>پزشکی – درمانی و حوزه سالمت</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> خدمات حقوقی و مهاجرتی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> خدمات منزل</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}>گرافیک و طراحی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> هتل و خدمات اسکان</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}>آموزش و خدمات آموزشی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> تشریفات و مراسم</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}>خدمات ساختمانی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> خدمات موبایل و تلفن</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> غذا و رستوران و کافی شاپ</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> مشاور امالک و مسکن</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> ورزشی و تفریحی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}>اتوموبیل</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> تبلیغات و چاپ</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}>خدمات مالی و بیمه</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> خدمات وام و مورگیج</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> دکوراسیون و مبلمان منزل</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> کامپیوتر و الکترونیک</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> مواد غذایی </SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> اینترنت و طراحی وب</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> حمل و نقل</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> خدمات مسافرتی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> صرافی و خدمات ارزی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> کیف و کفش و لباس</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> نقره و صنایع دستی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> جواهرات و طال فروشی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> طراحی داخلی و معماری</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}>خدمات IT و برنامه نویسی</SwiperSlide>
                                <SwiperSlide  onClick={e=>serviceChange(e.currentTarget.innerText)}  className={"slider-item-service"}> مصالح و خدمات تزیینات
                                    ساختمانی</SwiperSlide>
                            </Swiper>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}

export default AccountBalance;
