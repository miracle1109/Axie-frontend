/** @jsx jsx */
import { jsx } from "theme-ui"
import { Grid, Text, Box, Image, Button } from "theme-ui"
import { useRouter } from "next/router"

import image1 from "assets/user-avatars/avatar_1.webp"
import image2 from "assets/user-avatars/avatar_2.webp"
import image3 from "assets/user-avatars/avatar_3.webp"
import image4 from "assets/user-avatars/avatar_4.webp"
import image5 from "assets/user-avatars/avatar_5.webp"
import image6 from "assets/user-avatars/avatar_6.webp"
import image7 from "assets/user-avatars/avatar_7.webp"
import image8 from "assets/user-avatars/avatar_8.webp"
import { m } from "framer-motion"

const data_1 = [
  {
    image: image1,
    textTitle: '',
    textContent: ''
  },
  {
    image1: null, 
    textTitle: '#1 PLAY TO EARN',
    textContent: 'Play the ABP team we give to earn SLP and compete with other players.\
      Get permanent scholarship and origin META of your choice if you are champion'
  },
  {
    image: image2,
    textTitle: '',
    textContent: ''
  },
  {
    image: null,
    textTitle: '#2 INVITE TO EARN',
    textContent: 'Invite friends (or strangers) to our discord server to earn 3SLP per invite.\
      Our automatic bot tracks every invite.'
  },
  {
    image: image3,
    textTitle: '',
    textContent: ''
  },
  {
    image: null,
    textTitle: '#3 RAFFLE TO EARN',
    textContent: 'Play our monthly raffle to win 3000 SLP at the end of the month. \
      One ticket is only 10 SLP.'
  },
  {
    image: image4,
    textTitle: '',
    textContent: ''
  },
  {
    image: null,
    textTitle: '#4 GUESS THE CHAMP',
    textContent: 'Bet on each season champion to get permanent scholarship. \
      You have 2 days window at the beginning of the season to guess the champion.'
  },
  {
    image: image5,
    textTitle: '',
    textContent: ''
  },
  {
    image: null,
    textTitle: '#5 PLAY WITH OWN',
    textContent: 'Play with your own account  (if you have one) with the potential of winning 1000 SLP. \
      Accounts up to 40 energy  is allowed.'
  },
  {
    image: image6,
    textTitle: '',
    textContent: ''
  },
  {
    image: null,
    textTitle: '#6 TAKE OUT A LOAN',
    textContent: 'If you have been with us for 3 seasons you can take out a loan settled \
      against your play for the future. (experimantal feature)'
  },
  {
    image: image7,
    textTitle: '',
    textContent: ''
  },
  {
    image: null,
    textTitle: '#7 JOB BOARD',
    textContent: 'Post any job you can do (selling groceries or tutoring) \
      or check out the potential employments. Get paid in SLP'
  },
  {
    image: image8,
    textTitle: '',
    textContent: ''
  },
  {
    image: null,
    textTitle: '#8 GET TRAINING',
    textContent: 'If you are a noob or a seasoned player we provide online coach to improve your game play.'
  },
]

export default function CryptoTrading() {
  return (
    <section sx={styles.section} id="crypto-trading">
      <Box sx={{mb: '50px'}}>
        <Text sx={styles.title}>Axie Champion</Text>
        <Text sx={styles.subTitle}>Everything you need in one discord &nbsp;&nbsp;&nbsp;&nbsp; server</Text>
      </Box>
      <Grid sx={styles.grid.first}>
        {data_1.map((item, i) => (
          <Box>
            {
              item.image ? 
                <Box key={i}> <Image sx={styles.imageStyle} src={item.image} alt="" /></Box>
              : 
                <Box key={i} sx={styles.textBox}>
                  <Text sx={styles.textTitle}>{item.textTitle}</Text>
                  <Text sx={styles.textContent}>{item.textContent}</Text>
                </Box>                
            }
          </Box>
        ))}
      </Grid>
      <Box sx={styles.joinBox}>
        <Button sx={styles.joinBtn}>JOIN OUR DISCORD SERVER</Button>
      </Box>
    </section>
  )
}

const styles = {
  section: {
    variant: "section.keyFeature",
    backgroundImage: "radial-gradient(circle at 79.97233072916666% 100%, #8079FF 0%, 17.5%, rgba(128,121,255,0) 35%), radial-gradient(circle at 92.50813802083333% 97.30143229166667%, #8079FF 0%, 17.5%, rgba(128,121,255,0) 35%), radial-gradient(circle at 37.203776041666664% 11.217447916666666%, #272443 0%, 17.5%, rgba(39,36,67,0) 35%), radial-gradient(circle at 98.10546875% 23.216145833333332%, #272443 0%, 20%, rgba(39,36,67,0) 40%), radial-gradient(circle at 30.870768229166668% 96.28580729166667%, rgba(128,121,255,0.99) 0%, 25%, rgba(128,121,255,0) 50%), radial-gradient(circle at 6.165364583333333% 12.617187499999998%, #272443 0%, 42%, rgba(39,36,67,0) 70%), radial-gradient(circle at 61.71223958333333% 37.56510416666667%, #272443 0%, 42%, rgba(39,36,67,0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #F6F4F0 0%, 100%, rgba(246,244,240,0) 100%)",
    backgroundColor: 'transparent',
    fontFamily: 'suez-one-serif'
  },
  joinBtn: {
    width: '55%',
    py: ['30px', '30px', '30px', '30px', '30px', '30px', '30px'],
    fontFamily: 'Arial',
    fontSize: '20px',
    color: 'white',
    bg: 'rgb(218,57,43)',
    mt: ['30px', '30px', '30px', '30px', '55px', '55px', '55px'],
    borderRadius: '10px',
    cursor: 'pointer',
    '&:hover' : {
      bg: 'white',
      border: '1px solid black',
      color: 'black' 
    },
    '@media screen and (max-width: 736px)' : {
      fontSize: '16px',
      width: '90%'
    }
  },
  joinBox: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    fontSize: ['40px', '40px', '60px', '60px', '60px', '80px', '80px'],
    textAlign: 'center',
    color: 'white',
    lineHeight: '2.8rem'
  },
  subTitle: {
    fontSize: ['12px', '12px', '18px', '18px', '22px', '24px', '24px'],
    ml: ['13px', '16px', '22px', '170px', '256px', '207px', '372px'],
    color: 'white',
    mb: '50px',
    letterSpacing: 'normal',
    fontFamily: 'Arial'
  },
  imageStyle: {
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
  },
  textBox: {
    border: '10px solid rgb(140,138,219)',
    width: '100%',
    height: '95%',
    p: '10px'
  },
  textTitle: {
    fontSize: '23px',
    color: 'white',
    fontWeight: 'bold'
  },
  textContent: {
    color: 'rgb(254, 255, 185)',
    fontSize: '23px',
    lineHeight: '30px',
    letterSpacing: 'normal'
  },
  grid: {
    mb: -1,
    pt: 0,
    first: {
      gridGap: [
        "35px 0",
        null,
        "45px 28px",
        null,
        "50px 28px",
        null,
        null,
        "50px 28px",
      ],
      gridTemplateColumns: [
        null,
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
        "repeat(4, 1fr)",
      ],
    },
  },
}
