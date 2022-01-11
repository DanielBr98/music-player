import React, { Component } from 'react';
import './App.css';
import icon from './images/icon.png'
import background from './images/background.jpg'
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

import music01 from './musics/Cartoon - On _ On (feat. Daniel Levi) _NCS Release_.mp3'
import music02 from './musics/Cartoon - Why We Lose (feat. Coleman Trapp) _NCS Release_.mp3'
import music03 from './musics/DEAF KEV - Invincible _NCS Release_.mp3'
import music04 from './musics/Different Heaven _ EH DE - My Heart _NCS Release_.mp3'
import music05 from './musics/Disfigure - Blank _NCS Release_.mp3'
import music06 from './musics/Electro-Light - Symbolism _NCS Release_.mp3'
import music07 from './musics/Elektronomia - Sky High [NCS Release].mp3'
import music08 from './musics/Janji - Heroes Tonight (feat. Johnning) _NCS Release_.mp3'
import music09 from './musics/Warriyo - Mortals (feat. Laura Brehm) [NCS Release].mp3'
import music10 from './musics/Tobu - Hope [NCS Release].mp3'

class App extends Component {

  render() {
    const background_style = {
      backgroundImage: `url(${background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }

    const audioList = [
      {
        cover: icon,
        musicSrc: music01,
        name: 'On _ On (feat. Daniel Levi)',
        singer: 'Cartoon'
      },
      {
        cover: icon,
        musicSrc: music02,
        name: 'Why We Lose (feat. Coleman Trapp)',
        singer: 'Cartoon'
      },
      {
        cover: icon,
        musicSrc: music03,
        name: 'Invincible',
        singer: 'DEAF KEV'
      },
      {
        cover: icon,
        musicSrc: music04,
        name: 'My Heart',
        singer: 'Different Heaven _ EH DE'
      },
      {
        cover: icon,
        musicSrc: music05,
        name: 'Blank',
        singer: 'Disfigure'
      },
      {
        cover: icon,
        musicSrc: music06,
        name: 'Symbolism',
        singer: 'Electro-Light'
      },
      {
        cover: icon,
        musicSrc: music07,
        name: 'Sky High',
        singer: 'Elektronomia'
      },
      {
        cover: icon,
        musicSrc: music08,
        name: 'Heroes Tonight (feat. Johnning)',
        singer: 'Janji'
      },
      {
        cover: icon,
        musicSrc: music09,
        name: 'Mortals (feat. Laura Brehm)',
        singer: 'Warriyo'
      },
      {
        cover: icon,
        musicSrc: music10,
        name: 'Hope',
        singer: 'Tobu'
      },
    ]

    return (
      <div style={background_style}>
        <ReactJkMusicPlayer audioLists={audioList} autoPlay={false} toggleMode={false} mode="full" />
      </div>
    )
  }
}

export default App;
