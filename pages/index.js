import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import axios from 'axios'
import Flicking from "@egjs/react-flicking";
import useOnScreen from '../components/particles/useOnScreen'
import {MainLayout} from '../components/templates/layouts'
import Head from 'next/head'
import {Navigation} from '../components/molecules'
import {View, Text, Image, Button, Input, Lottie} from '../components/atoms'

import Lottiefiles from 'react-lottie'

import * as Loading from '../assets/lottiefiles/loading-circle.json'
import * as Success from '../assets/lottiefiles/success.json'
import * as Gallery from '../assets/lottiefiles/gallery.json'

import knobData from "./index.knobs.json";
const {menus} = knobData.data;

import { NextSeo } from 'next-seo';

const App = () => {

  const [open,setOpen] = useState(false)
  const [overlay, setOverlay] = useState(false)
  const [greeting, setGreeting] = useState('Good Morning')
  const [date, setDate] = useState('01 Jan 2020')
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [gallery, setGallery] = useState(false)

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [budget, setBudget] = useState('')
  const [timeline, setTimeline] = useState('')
  const [message, setMessage] = useState('')

  const refMenu = useRef()
  const refGallery = useRef()

  const isVisible = useOnScreen(refMenu);
  const isGallery = useOnScreen(refGallery)

  const inquiry = () => {
      let payload = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        budget: budget,
        timeline: timeline,
        message: message
      }

      
      if(firstname.length > 3 && lastname.length > 3 && email.length > 8 && message.length > 20){
        setVisible(true)
        setLoading(true)
        axios.post(process.env.API+'/api/inquiry/create', JSON.stringify(payload)).then(res => {
          setTimeout(() => {
            setLoading(false)
          }, 2000)
          setFirstname('')
          setLastname('')
          setEmail('')
          setPhone('')
          setMessage('')
        }).catch(err => {
          console.log(err)
        })
        return
      }else{
        return
      }
    }

  useEffect(() => {
    console.log(`The component is ${isVisible ? "visible - Menu" : "not visible - Menu"}.`)
    console.log(`The component is ${isGallery ? "visible - Gallery" : "not visible - Gallery"}.`)

    isGallery ? setGallery(true) : setGallery(false)

    let date = new Date();
    let time = date.getHours();
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    setDate(`${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`)

    if (time < 12 && time > 5) {
        setGreeting('Good Morning')
    }else if (time > 12 && time < 17) {
        setGreeting('Good Afternoon')
    }else{
        setGreeting('Good Evening')
    }


  },[isVisible, isGallery])

  const toInquiry = () => {
    document.getElementById('inquiry').scrollIntoView({
      behavior: 'smooth'
    });
  }

  const done = () => {
    setLoading(false)
    setVisible(false)
  }

  const openMenu = () => {
      setOpen(true)
      setOverlay(true)
      document.body.style.overflow = 'hidden';
  }

  const closeMenu = () => {
    setOpen(false)
    setOverlay(false)
    document.body.style.overflow = 'unset';
  }

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: Gallery.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <>
    <NextSeo
      title= 'Krisna Ahroid | Design & Code'
      description= 'Krisna Ahroid. An UX Engineer & Frontend Developer based in Jakarta, Indonesia'
      openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.ahroidlife.co/',
          site_name: 'ahroidlife',
          title: 'Krisna Ahroid | Design & Code',
          description: 'Krisna Ahroid. An UX Engineer & Frontend Developer based in Jakarta, Indonesia',
          image: 'https://ahroidlife.com/static/illustrations/hero-image.png',
          
      }}
    />
    <MainLayout>
    <div ref={refMenu}></div>
      <View className={`overlay ${visible ? 'isVisibility' : ''}`} justify="center" align="center" direction="column">
        { loading ? <Lottie width={200} height={200} autoplay={true} loop={true} path={Loading.default}/> : <Lottie width={250} height={250} autoplay={true} loop={true} path={Success.default}/>}
        <Text margin="15px 0 0 0" family="quicksand" size="32">{loading ? 'Just take a moment' : 'Thank You!'}</Text>
        { loading ? undefined : <Button className="btn-done" onClick={done}>Done</Button>}
      </View>
      <View className="main-header" >
        <View className="main-header-content" direction="column">
          <View className="main-header-nav">
            <View className="navigation-bar">
              <Navigation
                items={menus}
                family="quicksand"
                size="16"
                weight="400"
                variant="grey"
                padding="0"/>
            </View>
            <View className="nav-menu-mobile" onClick={openMenu} >
              <Image src="/static/illustrations/menu.svg" alt="menu"/>
            </View>
            <View
              className={`nav-menu-wrapper-mobile ${isVisible ? 'isActiveEl' : ''} ${open
              ? 'nav-menu-isActive'
              : ''}`}>
              <View className="nav-menu-header-mobile" direction="column">
                <Text variant="white" family="quicksand" size="18" margin="0 0 2px 0">{greeting}</Text>
                <Text variant="white" family="quicksand" weight="light" size="14">{date}</Text>
                <View className="nav-menu-button-close" onClick={closeMenu}>
                  <Image src="/static/illustrations/close.svg"/>
                </View>
                <View className="nav-menu-dots">
                  <Image src="/static/illustrations/dot-header-mobile.svg" alt="dot-header-mobile"/>
                </View>
              </View>
              <View className="nav-menu-content-mobile" direction="column">
                <View className="nav-menu-items" direction="column" flexValue="1">
                  <Link href="/products">
                    <a>
                      <View className="nav-menu-item" >

                        <Image src="/static/illustrations/products.svg" alt="products"/>
                        <Text size="18" margin="0 0 0 20px">My Products</Text>

                      </View>
                    </a>
                  </Link>
                  <Link href="shots">
                    <a>
                      <View className="nav-menu-item">
                        <Image src="/static/illustrations/projects.svg" alt="projects"/>
                        <Text size="18" margin="0 0 0 20px">Shots</Text>
                      </View>
                    </a>
                  </Link>
                  <Link href="issues">
                    <a>
                      <View className="nav-menu-item">
                        <Image src="/static/illustrations/issues.svg" alt="issues"/>
                        <Text size="18" margin="0 0 0 20px">Issues</Text>
                      </View>
                    </a>
                  </Link>
                  <Link href="stories">
                    <a>
                      <View className="nav-menu-item">
                        <Image src="/static/illustrations/stories.svg" alt="stories"/>
                        <Text size="18" margin="0 0 0 20px">Stories</Text>
                      </View>
                    </a>
                  </Link>
                </View>
                <View className="nav-menu-item-footer">
                  <View
                    className="nav-menu-item"
                    onClick={() => navigator.clipboard.writeText(window.location.href)}>
                    <Image src="/static/illustrations/copy.svg" alt="copy"/>
                    <Text size="18" margin="0 0 0 20px">“Copy Link to Clipboard”</Text>
                  </View>
                </View>
              </View>

            </View>

            <View className={`overlay-background  ${overlay ? 'is-overlay-background' : ''}`}></View>
            <View className="social-media">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/ahroidlife/" rel="noreferrer" target="_blank">IN</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/krisnaahroid" rel="noreferrer" target="_blank">FB</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/ahroidlife.co/" rel="noreferrer" target="_blank">IG</a>
                </li>
              </ul>
            </View>
          </View>
          <View flexValue="1" className="main-header-body">
            <View direction="column" className="main-header-left">
              <Text variant="blue" family="quicksand" margin="0  0 50px 0 " className="sayHi">Hi, there</Text>
              <View direction="column" margin="0  0 30px 0 ">
                <Text variant="blue" family="quicksand" weight="medium" className="fullname">I’m Krisna Ahroid</Text>
                <Text family="quicksand" variant="grey" weight="medium" className="subtitle">An UX Engineer  & Frontend Developer</Text>
              </View>
              <View width="80%" className="main-header-text-content">
                <Text
                  family="quicksand"
                  variant="grey"
                  weight="regular"
                  className="text-overview">
                  I design & code that turn the idea to 
                  <span style={{
                    color: '#2525F0'
                  }}> product digital and website that people love it.</span>
                </Text>
              </View>
              <View align="center">
                <Button className="btn-hire" onClick={toInquiry}>
                  HIRE ME
                </Button>
                <a href="https://calendly.com/ahroidlife/15min" rel="noreferrer" target="_blank">
                  <Text family="quicksand" variant="blue" weight="regular" className="consult">
                    Free - 15min consult
                  </Text>
                </a>
              </View>
            </View>
            <View className="main-header-right">
              <Image
                src="/static/illustrations/hero-image.png"
                className="main-header-hero"
                alt="main-header-hero"
                draggable="false"/>
              <Image src="/static/illustrations/bubbble.svg" alt="bubbble" className="main-header-bubble"/>
            </View>
          </View>
        </View>
        <View className="overlay-header"></View>
      </View>
      <View className="tools-wrapper" direction="column">
        <Text className="tools-title">Work with</Text>
        
          <Flicking gap={50}  infiniteThreshold={100}  bound={true} moveType="freeScroll" style={{height: 50+'vh'}}>
          <View className="tools-items">
                  <View className="tool-item">
                    <Image src="/static/tools/l_xd.svg" alt="adobe xd"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/figma-1.svg" alt="figma"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/protopie.svg" alt="protopie"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/affinity.png" alt="affinity"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/ae.svg" alt="after effects"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/l_Zeplin.svg" alt="zeplin"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/react.svg" alt="react"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/l_redux.svg" alt="redux"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/next-js.svg" alt="nextjs"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/vue-js.svg" alt="vuejs"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/nuxt-square.svg" alt="nuxtjs"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/wix.svg" alt="wix"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/webflow.svg" alt="webflow"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/github-1.svg" alt="github"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/nginx.svg" alt="nginx"/>
                  </View>
                  <View className="tool-item">
                    <Image src="/static/tools/lottiefiles.svg" alt="lottiefiles"/>
                  </View>
                  </View>
          </Flicking>
        
      </View>
      <View className="specializing-wrapper" direction="column">
          <View direction="column" align="center" className="specializing-header">
                  <Text family="quicksand" size="32" weight="500" className="specializing-header-title">Specializing in</Text>
                  <Text family="quicksand" size="18" weight="400" className="specializing-header-subtitle">I'm An UX Engineer  & Frontend  Developer, and I love what I do.</Text>
          </View>
          <View className="specializing-content">
          <Image className="specializing-square-dots" src="/static/illustrations/dots.svg" alt="dots"/>
            <Flicking gap={50} infinite={true} infiniteThreshold={100}  bound={true} moveType="freeScroll" style={{width:100+'%', height: 80+'vh'}}>
                <View className="specializing-cards">
                      {/* <Image class="square-dots" src="~assets/images/square-dots.svg" alt="dots" /> */}
                      <View className="card">
                        <View className="line line1"></View>
                        <View className="title" direction="column">
                          <Text variant="dark" family="quicksand" className="main-title-card"><span>UI</span> <span className="light">Design &</span></Text>
                          <Text variant="dark" family="quicksand" className="sub-title-card">Protoyping</Text>
                        </View>
                        <View className="content">
                          <Text variant="dark" family="quicksand">
                          The beauty can be subjective depending on the viewer. I enjoy the challenge to create visual and prototyping and also leverage micro-interactions.
                          </Text>
                        </View>
                      </View>
                      <View className="card">
                        <View className="line line2"></View>
                        <View className="title" direction="column">
                          <Text variant="dark" family="quicksand" className="main-title-card"><span>UX</span> <span className="light">Design &</span></Text>
                          <Text variant="dark" family="quicksand" className="sub-title-card"><span>Interaction</span> <span className="light">Design</span></Text>
                        </View>
                        <View className="content">
                          <Text variant="dark" family="quicksand">
                          I design experience for user to achieve their objective(s) in the best way possible and how it looks and works.
                          </Text>
                        </View>
                      </View>
                      <View className="card">
                        <View className="line line3"></View>
                        <View className="title" direction="column">
                          <Text variant="dark" family="quicksand" className="main-title-card"><span>Frontend</span></Text>
                          <Text variant="dark" family="quicksand" className="sub-title-card"><span className="light">Development</span></Text>
                        </View>
                        <View className="content">
                          <Text variant="dark" family="quicksand">
                          I turn the Design into Code, Build something great website that people love it. In practice of producing websites with a popular library / framework.
                          </Text>
                        </View>
                      </View>
                    </View>
            </Flicking>
          </View>
      </View>
      <View className="about-wrapper">
      
            <View className="about-content-left">
            <Image draggable="false" src="/static/illustrations/square-dots.svg" alt="square-dots" className="square-art"/>
              <View className="about-content" direction="column">
                <View className="about-content-header">
                  <Text variant="dark" family="quicksand" size="32" >
                  Krisna Ahroid. <br/>
                  An UX Engineer & <br/>
  Frontend  Developer  based in  <br/>
  Jakarta, Indonesia
                  </Text>
                </View>
                <View className="about-content-body" direction="column">
                  <Text family="quicksand" variant="dark" className="hi">Hi There,</Text>
                  <Text family="quicksand" variant="dark" className="about-me">I’m An UX Engineer & Javascript Enthusiast, You can find my recent projects on <a href="https://dribbble.com/ahroidlife" rel="noreferrer" target="_blank">Dribbble</a> and <a href="https://www.instagram.com/ahroidlife.co/" rel="noreferrer" target="_blank">Instagram</a> or if you’re interested in my design and if you are want to development an application, let me know.
                  </Text>
                  <Text family="quicksand" variant="dark" className="available-me">
                  I’m currently available for <br/>
freelance work.
                  </Text>
                  <Text family="quicksand" variant="dark" className="letmeknow">
                  If you have a project that you want to get started, <br/>let me know.
                  </Text>
                </View>
              </View>
            </View>
            <View className="about-content-right">
              <View className="gallery-wrapper">
              <div ref={refGallery}></div>
              {/* <Image className="gallery" draggable="false" alt="gallery" src="/static/illustrations/gallery.png"/> */}
                <Lottiefiles options={defaultOptions} isPaused={!gallery} isStopped={!gallery}/>
              </View>
            </View>
      </View>
      <View className="testimonial-wrapper" direction="column">
           <View className="testimonial-header" direction="column" align="center">
                  <Text family="quicksand">TESTIMONIALS</Text>
                  <Text family="quicksand" size="32" className="testimonial-title">Customers's quotes</Text>
                  <Text className="testimonial-subtitle">Don’t take our word for it. Take theirs…</Text>
           </View>
           <View className="testimonial-content">
                  <View className="testimonial-content-left">
                    <Image className="square-dots-down" alt="square-dots-down" src="/static/illustrations/square-dots-down.svg"/>
                    <Image className="quote-icon" alt="quote-icon" src="/static/illustrations/quote.svg"/>
                    <View className="testimonial-content-left-text">
                      <Text family="quicksand" size="32">
                      What other people <br/> are saying
                      </Text>
                    </View>
                  </View>
                  <View className="testimonial-content-right">
                  <Image className="testimonial-square-dots" alt="testimonial-square-dots" src="/static/illustrations/dots.svg"/>
                  <Flicking gap={50} infinite={true} infiniteThreshold={100}  bound={true} moveType="freeScroll" style={{width:100+'%', height: 50+'vh'}}>
                    <View className="testimonial-card" direction="column">
                        <View className="testimonial-card-header">
                          <View>
                            <Image src="/static/clients/hannari.png" alt="hannari"/>
                          </View>
                          <View className="testimonial-card-header-title" direction="column">
                            <Text family="quicksand" className="testimonial-card-header-title-name">Eduardo Hannari</Text>
                            <Text family="quicksand">São Paulo, Brazil </Text>
                          </View>
                        </View>
                        <View className="testimonial-card-content">
                          <Text family="quicksand">
                          “You made it so simple and minimalist design.”
                          </Text>
                        </View>
                        <View family="quicksand" className="testimonial-card-role">
                          <Text>Marketing Manager at Digital Mind</Text>
                        </View>
                    </View>
                    <View className="testimonial-card" direction="column">
                        <View className="testimonial-card-header">
                          <View>
                            <Image src="/static/clients/boby.png" alt="boby"/>
                          </View>
                          <View className="testimonial-card-header-title" direction="column">
                            <Text family="quicksand" className="testimonial-card-header-title-name">Boby Indra</Text>
                            <Text family="quicksand">Jakarta, Indonesia </Text>
                          </View>
                        </View>
                        <View className="testimonial-card-content">
                          <Text family="quicksand">
                          “Working together has been a pleasure. Exectional experience.”
                          </Text>
                        </View>
                        <View family="quicksand" className="testimonial-card-role">
                          <Text>Founder at Konseline</Text>
                        </View>
                    </View>
                  </Flicking>
                  </View>
           </View>
      </View>
      <View id="inquiry" className="contact-wrapper" direction="column">
        <View className="contact-header" direction="column">
            <Text family="quicksand" className="contact-header-title">Get in Touch</Text>
            <Text family="quicksand" className="contact-header-subtitle">Let’s start build something great together.</Text>
        </View>
        <View className="contact-content" direction="column">
          <Text className="contact-item-title" family="quicksand">Let me know about you.</Text>
          <View className="contact-content-item">
            <View className="contac-content-item-first-name">
              <Input placeholder="First name"  value={firstname} onChange={(e) => setFirstname(e.target.value)} className="contact-input"/>
            </View>
            <View>
              <Input placeholder="Last name" value={lastname} onChange={(e) => setLastname(e.target.value)} className="contact-input"/>
            </View>
          </View>
          <View className="contact-content-item">
            <Input placeholder="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)} width="100%" className="contact-input"/>
          </View>
          <View className="contact-content-item">
            <Input placeholder="Phone number (optional)" value={phone} onChange={(e) => setPhone(e.target.value)} width="100%" className="contact-input"/>
          </View>
          <Text className="contact-item-title" family="quicksand">What budget range are you in? </Text>  
          <View className="contact-content-item">
            <View className="inputGroup input-group-first-item" onClick={() => setBudget('$500 - $1,000')}>
              <input id="radio1" name="radio" type="radio"/>
              <label htmlFor="radio1">$500 - $1,000</label>
            </View>
            <View className="inputGroup">
              <input id="radio2" name="radio" type="radio" onClick={() => setBudget('$1,000 - $5,000')}/>
              <label htmlFor="radio2">$1,000 - $5,000</label>
            </View>
          </View>
          <View className="contact-content-item">
            <View className="inputGroup input-group-first-item">
              <input id="radio3" name="radio" type="radio" onClick={() => setBudget('$5,000 - $10,000')}/>
              <label htmlFor="radio3">$5,000 - $10,000</label>
            </View>
            <View className="inputGroup">
              <input id="radio4" name="radio" type="radio" onClick={() => setBudget('$10,000 - $50,000+')}/>
              <label htmlFor="radio4">$10,000 - $50,000+</label>
            </View>
          </View>
          <Text className="contact-item-title" family="quicksand">Tell me more about the project. </Text>
          <View className="contact-content-item">
            <View className="contact-dropdown animated zoomIn">
                <label>
                    <input type="checkbox" name="placeholder" />
                    <Image src="/static/illustrations/ios-arrow-down.svg" alt="arrow-down" className="icon-arrow-dropdown"/>
                    <span className="placeholder">Choose your Timeline</span>
                    <label className="option" onClick={() => setTimeline('ASAP')}>
                        <input type="radio" name="option" />
                        <span className="title animated fadeIn"><i className="icon icon-speedometer"></i>ASAP</span>
                    </label>
                    <label className="option" onClick={() => setTimeline('1 Month')}>
                        <input type="radio" name="option" />
                        <span className="title animated fadeIn"><i className="icon icon-fire"></i>1 Month</span>
                    </label>
                    <label className="option" onClick={() => setTimeline('3 Months')}>
                        <input type="radio" name="option" />
                        <span className="title animated fadeIn"><i className="icon icon-fire"></i>3 Months</span>
                    </label>
                    <label className="option" onClick={() => setTimeline('6 Months')}>
                        <input type="radio" name="option" />
                        <span className="title animated fadeIn"><i className="icon icon-fire"></i>6 Months</span>
                    </label>
                    <label className="option" onClick={() => setTimeline('1 Year')}>
                        <input type="radio" name="option" />
                        <span className="title animated fadeIn"><i className="icon icon-fire"></i>1 Year</span>
                    </label>
                    <label className="option" onClick={() => setTimeline('Ongoing')}>
                        <input type="radio" name="option" />
                        <span className="title animated fadeIn"><i className="icon icon-fire"></i>Ongoing</span>
                    </label>
                </label>
            </View>
          </View>
          <View className="contact-content-item">
            <textarea className="input-textarea" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write us a few word about your project and we’ll prepare a proposal for you within 24 hours.">
            </textarea>
          </View>
          <View className="contact-content-item">
            <Text family="quicksand" variant="dark" size="16">I promise to keep your personal information and never give it to anyone, for any reason.</Text>
          </View>
          <View className="contact-content-submit">
            <Button width="150px" height="40px" onClick={inquiry}>SUBMIT</Button>
          </View>
        </View>
      </View>
      <View className="footer-wrapper">
            <View className="footer-social-media">
                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/in/ahroidlife/" rel="noreferrer" target="_blank">
                        <Image src="/static/illustrations/linkedin.svg" alt="linkedin"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/ahroidlife.co/" rel="noreferrer" target="_blank">
                        <Image src="/static/illustrations/instagram.svg" alt="instagram"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/krisnaahroid" rel="noreferrer" target="_blank">
                        <Image src="/static/illustrations/facebook.svg" alt="facebook"/>
                      </a>
                    </li>
                  </ul>
            </View>
            <View className="footer-content">
              <Text family="quicksand" variant="dark">Copyright 2020. Designed and build by Krisna Ahroid with XD, ReactJs, and Golang.</Text>
            </View>
            <View className="footer-languages">
              <View className="languages-select" direction="column">
                 <View className="select-item">
                  <Text>ENGLISH</Text>
                  <Image src="/static/illustrations/ios-arrow-down.svg" alt="arrow-down" className="icon-arrow-dropdown"/>
                 </View>
                 <View className="select-item hidden">
                  <Text>INDONESIA</Text>
                 </View>
              </View>
            </View>
      </View>
    </MainLayout>
    </>
  )
}

export default App