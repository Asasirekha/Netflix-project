import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Dsc ddmnefkrjbhfekdnm scnwjkfhebwkj jshdkaj sckb dekqjekre cekjfbwkejew dck3efbk,d ssjkbdwkjenfkwdkw</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt=""></img>Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt=""></img>More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movie"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Topics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
