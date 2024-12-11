import Header from './components/header'
import Layout from './components/layout'
import avatar from './assets/avatar.png'
import LinkList from './components/linkList'
import SocialButtons from './components/socialButtons'

import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

import './App.css'

const linkList = [
  {
    text: "Portfólio",
    url: "https://www.google.com"
  },
  {
    text: "Linkedin",
    url: "https://www.google.com"
  },
  {
    text: "Github",
    url: "https://www.google.com"
  },
  {
    text: "Youtube",
    url: "https://www.google.com"
  },
]

const socialButtons = [
  {
    icon: <FaInstagram />,
    url: "https://www.google.com"
  },
  {
    icon: <FaFacebook />,
    url: "https://www.google.com"
  },
  {
    icon: <FaTwitter />,
    url: "https://www.google.com"
  },
]

function App() {

  return (
    <Layout>
      <Header
        image={avatar}
        name="Igor Sousa"
        description="Desenvolvedor frontend"
      />

      <LinkList list={linkList} />

      <SocialButtons list={socialButtons} />
    </Layout>
  )
}

export default App
