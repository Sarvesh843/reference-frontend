// import Stack from '@mui/material/Stack';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

// import { _appFeatured } from 'src/_mock';

import { LazyLoadComponent } from 'react-lazy-load-image-component';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';

import CarouselAnimation from 'src/sections/_examples/extra/carousel-view/carousel-animation';
// import { Box } from '@mui/system';

// ----------------------------------------------------------------------

const _carouselsExample = [
  {
    id: 0,
    title: 'Electicity Problem',
    // title: 'National Election News',
    coverUrl:
      'https://attplgrouppublic.s3.ap-south-1.amazonaws.com/claim-images/1714716205425-Electricity Problem-min.png',
    // coverUrl: 'https://thefederal.com/h-upload/2024/04/17/441019-phase-1.webp',
    description: 'Phase 1 summary',
    // path:"https://www.pspcl.in/",
  },
  {
    id: 1,
    title: 'Water Problem',
    // title: 'National Election  News',
    coverUrl:
      'https://attplgrouppublic.s3.ap-south-1.amazonaws.com/claim-images/1714717076132-Water Problems-min.png',
    // coverUrl: 'https://bl-i.thgim.com/public/incoming/58sf19/article68082685.ece/alternates/LANDSCAPE_1200/PTI04_19_2024_000100B.jpg',
    description: 'Phase 1 summary',
  },
  {
    id: 2,
    title: 'Education Problem',
    // title: 'National Election News',
    coverUrl:
      'https://attplgrouppublic.s3.ap-south-1.amazonaws.com/claim-images/1714716961689-School and Colleges Problems-min.png',
    // coverUrl: 'https://cdn.zeebiz.com/sites/default/files/2024/04/17/288620-lok-sabha-polls-phase-1.jpg',
    description: 'Phase 1 summary',
  },
  {
    id: 3,
    title: 'Road Problem',
    // title: 'National Election News',
    coverUrl:
      'https://attplgrouppublic.s3.ap-south-1.amazonaws.com/claim-images/1714716902058-Road Issue-min.png',
    // coverUrl: 'https://thefederal.com/h-upload/2024/04/17/441019-phase-1.webp',
    description: 'Phase 1 summary',
  },
  {
    id: 4,
    title: 'Food Problem',
    // title: 'National Election  News',
    coverUrl:
      'https://attplgrouppublic.s3.ap-south-1.amazonaws.com/claim-images/1714716698218-Food Problem-min.png',
    // coverUrl: 'https://bl-i.thgim.com/public/incoming/58sf19/article68082685.ece/alternates/LANDSCAPE_1200/PTI04_19_2024_000100B.jpg',
    description: 'Phase 1 summary',
  },
  {
    id: 5,
    title: 'Seawage Problem',
    // title: 'National Election News',
    coverUrl:
      'https://attplgrouppublic.s3.ap-south-1.amazonaws.com/claim-images/1714717009125-Seawage Problem-min.png',
    // coverUrl: 'https://cdn.zeebiz.com/sites/default/files/2024/04/17/288620-lok-sabha-polls-phase-1.jpg',
    description: 'Phase 1 summary',
  },
  {
    id: 6,
    title: 'Pipeline Problem',
    // title: 'National Election  News',
    coverUrl:
      'https://attplgrouppublic.s3.ap-south-1.amazonaws.com/claim-images/1714716867191-Pipeline issue-min.png',
    // coverUrl: 'https://bl-i.thgim.com/public/incoming/58sf19/article68082685.ece/alternates/LANDSCAPE_1200/PTI04_19_2024_000100B.jpg',
    description: 'Phase 1 summary',
  },
  {
    id: 7,
    title: 'Health Problem',
    // title: 'National Election News',
    coverUrl:
      'https://attplgrouppublic.s3.ap-south-1.amazonaws.com/claim-images/1714716755969-Health and Hospital Issue-min.png',
    // coverUrl: 'https://cdn.zeebiz.com/sites/default/files/2024/04/17/288620-lok-sabha-polls-phase-1.jpg',
    description: 'Phase 1 summary',
  },
];

const _carouselsExample2 = [
  {
    id: 0,
    title: 'BJP',
    coverUrl: 'https://indianexpress.com/wp-content/uploads/2023/10/Modi-23.jpg',
    description: 'Narendra Modi',
    path: paths.dashboard.voterview.info(0),
    // id: 0,
    // title: 'Local Election  News',
    // coverUrl: 'https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/10/30/Pictures/bjp-delegation-at-election-commission_ee17f65e-7efd-11e5-8319-3d66022f9dc4.jpg',
    // description: 'Voters Complaint',
  },
  {
    id: 1,
    title: 'Congress',
    coverUrl:
      'https://www.livemint.com/lm-img/img/2023/06/04/1600x900/Rahul-Gandhi_1685847112071_1685847112303.jpg',
    description: 'Rahul Gandhi',
    path: paths.dashboard.voterview.info(1),
    // id: 1,
    // title: 'Local Election  News',
    // coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYI3Nof2ziSJBvg13y4K5whK_2JF9_475fpQ&s',
    // description: 'Voters Complaint',
  },
  {
    id: 2,
    title: 'AAP',
    coverUrl:
      'https://w7.pngwing.com/pngs/514/579/png-transparent-arvind-kejriwal-chief-minister-delhi-aam-aadmi-party-punjab-rahul-gandhi-hat-moustache-2011-indian-anticorruption-movement.png',
    description: 'Arvind Kejriwal',
    path: paths.dashboard.voterview.info(2),
    // id: 2,
    // title: 'Local Election  News',
    // coverUrl: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/2/2022_2$largeimg_1634405205.JPG',
    // description: 'Voters Complaint',
  },
];

const _carouselsExample3 = [
  {
    id: 0,
    title: 'TV9 Telugu News',
    coverUrl: 'https://images.tv9telugu.com/wp-content/uploads/2024/05/website.png?w=1280',
    // description: 'TV9 Telugu News',
    path: 'https://youtu.be/HIF4zm3fohs?si=TLF4geO7Cyz8UpL9',
    embedCode:'https://youtu.be/HIF4zm3fohs?si=TLF4geO7Cyz8UpL9'
  },
  {
    id: 1,
    title: 'news18 News',
    coverUrl:
      'https://images.news18.com/ibnkhabar/uploads/2024/05/amit-shah-interview1-2024-05-5a5debfcdd54a4dd026bdc7645534b6a.jpg?impolicy=website&width=540&height=360',
    // description: 'news18 News',
    path: 'https://www.youtube.com/live/UOBE_Sw5328?si=5QFi4yDAuLTjfeL6',
    embedCode:'https://www.youtube.com/live/UOBE_Sw5328?si=5QFi4yDAuLTjfeL6'
  },
  {
    id: 2,
    title: 'IBC24 News',
    coverUrl: 'https://media.ibc24.in/wp-content/uploads/2024/05/modi-1.jpg',
    // description: 'IBC24 News',
    path: 'https://www.youtube.com/live/FXhfmiGh4KA?si=IuZQItebhbAjA2K7',
    embedCode:'https://www.youtube.com/live/FXhfmiGh4KA?si=IuZQItebhbAjA2K7'
  },
  {
    id: 3,
    title: 'GSTV News',
    coverUrl:
      'https://www.gstv.in/backend/public/media/supremecourtofindiajpg_mXhhcr0I1714660391_medium.jpg',
    // description: 'GSTV News',
    path: 'https://www.youtube.com/live/MSrDbH0mgNo?si=SUN04TzSy8sUIWAx',
    embedCode:'https://www.youtube.com/live/MSrDbH0mgNo?si=SUN04TzSy8sUIWAx'
  },
  {
    id: 4,
    title: 'News18 Haryana',
    coverUrl: 'https://news24online.com/wp-content/uploads/2023/12/MIZORAM.jpg?w=1024',
    // description: 'News18 Haryana News',
    path: 'https://www.youtube.com/live/cEvMSiwgjl4?si=pJ3NYqyL1HNgQHS5',
    embedCode:'https://www.youtube.com/live/cEvMSiwgjl4?si=pJ3NYqyL1HNgQHS5'
  },
  {
    id: 5,
    title: 'Suvarna News',
    coverUrl:
      'https://static-ai.asianetnews.com/images/01hwwsvnrm4a0yxejkhfkkpkx5/renukacharya.jpg',
    // description: 'Suvarna News',
    path: 'https://www.youtube.com/live/pN8Bo4CnAxI?si=BoDpJhSIvuS_Cyw4',
    embedCode:'https://www.youtube.com/live/pN8Bo4CnAxI?si=BoDpJhSIvuS_Cyw4'
  },
  {
    id: 6,
    title: 'Asianet News',
    coverUrl:
      'https://static-ai.asianetnews.com/images/01hvxkw66bndb5s3vd4ksmmspb/priyanka-gandhi--1-_700x350xt.jpg',
    // description: 'Asianet News',
    path: 'https://www.youtube.com/live/Ko18SgceYX8?si=3sscotiCJ5eE5Pps',
    embedCode:'https://www.youtube.com/live/Ko18SgceYX8?si=3sscotiCJ5eE5Pps'
  },
  {
    id: 7,
    title: 'Puthiya Thalaimurai News',
    coverUrl:
      'https://media.assettype.com/puthiyathalaimurai%2F2024-05%2F529eabab-1d07-4f72-a852-c8012ec4436f%2Fhqdefault.jpg?rect=0%2C0%2C480%2C270&w=1200&auto=format%2Ccompress&fit=max',
    // description: 'Puthiya Thalaimurai News',
    path: 'https://www.youtube.com/live/teBA3V1wcoo?si=pnvUoF8Ex3zq3mpM',
    embedCode:'https://www.youtube.com/live/teBA3V1wcoo?si=pnvUoF8Ex3zq3mpM'
  },
  {
    id: 8,
    title: 'News18 Uttarakhand',
    coverUrl:
      'https://static.v6velugu.com/uploads/2024/05/current-cut-turns-at-uppal-stadium-in-hyderabad_Wn1uGbiRhY.jpg',
    // description: 'News18 Uttar Pradesh News',
    path: 'https://www.youtube.com/live/NBfT_ksUmK4?si=xGO2GKAZLa4MeKOt',
    embedCode:'https://www.youtube.com/live/NBfT_ksUmK4?si=xGO2GKAZLa4MeKOt'
  },
  {
    id: 9,
    title: 'Times Of India',
    coverUrl:
      'https://static.toiimg.com/thumb/msid-109783079,imgsize-74544,width-400,resizemode-4/109783079.jpg',
    // description: 'timesOfIndia News',
    path: 'https://www.youtube.com/live/t5mIbbJt3VA?si=GAVHl2hu_7DtXge0',
    embedCode:'https://www.youtube.com/live/t5mIbbJt3VA?si=GAVHl2hu_7DtXge0'
  },
  {
    id: 10,
    title: 'ABP Ananda News',
    coverUrl:
      'https://www.livemint.com/lm-img/img/2024/05/02/600x338/20240422-KOL-HT-Photo-MN-Mamata-Banerjee-001-0_1713873787728_1714627385990.jpg',
    // description: 'ABP Ananda News',
    path: 'https://www.youtube.com/live/L72BvnyVy2w?si=HCvmUzp9-SPeBOOw',
    embedCode:'https://www.youtube.com/live/L72BvnyVy2w?si=HCvmUzp9-SPeBOOw'
  },
];

const _carouselsExample4 = [
  {
    id: 0,
    title: 'Aaj Tak',
    coverUrl:
      'https://akm-img-a-in.tosshub.com/aajtak/images/story/201903/aajtak1_1552056536_749x421.jpeg?size=948:533',
    description: '',
    path: 'https://www.youtube.com/live/dM51au6bBis?si=goEcOZ7gema-zcdK',
    embedCode:'https://www.youtube.com/live/dM51au6bBis?si=goEcOZ7gema-zcdK'
  },
  {
    id: 1,
    title: 'NDTV',
    coverUrl:
      'https://c.ndtvimg.com/2023-09/tp922vsg_ndtv-24x7_624x370_02_September_23.jpg',
    description: '',
    path: 'https://www.youtube.com/watch?v=FqdFwgW_zu8',
    embedCode:'https://www.youtube.com/watch?v=FqdFwgW_zu8'
  },
  {
    id: 2,
    title: 'Republic India',
    coverUrl: 'https://www.medianews4u.com/wp-content/uploads/2017/10/repulic-with-R-logo-2.jpg',
    description: '',
    path: 'https://www.youtube.com/live/v2uhs8-zKCs?si=qCJZNuq2peU3i91-',
    embedCode:'https://www.youtube.com/live/v2uhs8-zKCs?si=qCJZNuq2peU3i91-'
  },
];

export default function OverviewAppNews() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'} sx={{ marginTop: '40px', mb: 10 }}>
      {/* <Typography variant="h4" sx={{ marginBottom: '40px' }}>
        Trending On ATTPL News Today
      </Typography> */}
      <Grid container gap={4} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Grid xs={12} md={5.3} >
          <Typography variant="h4" sx={{mb: 1.5}}>Common Problem in Your Area</Typography>
          <CarouselAnimation data={_carouselsExample} btn="false" />
        </Grid>

        <Grid xs={12} md={5.3}>
          <Typography variant="h4" sx={{mb: 1.5}}>Candidates in the Election</Typography>
          <CarouselAnimation data={_carouselsExample2} btn="true" />
        </Grid>

        <Grid xs={12} md={5.3}>
          <Typography variant="h4" sx={{mb: 1.5}}>Local News</Typography>
          <LazyLoadComponent height={200} offset={100} once>
          <CarouselAnimation data={_carouselsExample3} btn="true" />
          </LazyLoadComponent>
        </Grid>

        <Grid xs={12} md={5.3} >
          <Typography variant="h4" sx={{mb: 1.5}}>National News</Typography>
          <LazyLoadComponent height={200} offset={100} once>
          <CarouselAnimation data={_carouselsExample4} btn="true" />
          </LazyLoadComponent>
        </Grid>
      </Grid>
    </Container>
  );
}
