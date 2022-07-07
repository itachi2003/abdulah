import React from 'react'
import './style.css'
import styled from 'styled-components'
import Linkdn from '../Nav/icon/Linkdn'
import {AiFillTwitterCircle} from "react-icons/ai";
// import Twitter from '../Nav/icon/Twitter'
const Section = styled.div`
color: pirple;
@media screen and (min-width:768px) {
    section{
        padding: 1em 7em;
    }
}
@media screen and (min-width:992px) {
    section{
        padding: 1em;
    }
}
`

const MTeam = () => {
  return (
    <Section>
        <div className='row'>
            <h1 className='coco text-7xl' >Our Team</h1>
        </div>
        <div className='row'>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                        <div className='team first' ></div>
                    </div>
                    <h3>ELENE</h3>
                    <p>Head of Human Resources</p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='https://www.linkedin.com/in/elene-oghadze-bb90641a2/' >
                        <Linkdn />
                        </a>
                        <a href="https://twitter.com/Eleniko08019686">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                    <div className='team second' ></div>
                    </div>
                    <h3>ZURA</h3>
                    <p>Head Of Art</p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='https://www.linkedin.com/in/zurab-supatashvili-5b0a25188/' >
                        <Linkdn />
                        </a>
                        <a href="https://twitter.com/helldemos">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                    <div className='team third' ></div>
                    </div>
                    <h3>PADRE</h3>
                    <p>Head Of Marketing</p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='/' >
                        <Linkdn />
                        </a>
                        <a href="/">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                    <div className='team fourth' ></div>
                    </div>
                    <h3>LUKA</h3>
                    <p>Head Of Community</p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='https://www.linkedin.com/in/luka-darchia-61225b199/' >
                        <Linkdn />
                        </a>
                        <a href="/">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                    <div className='team five' ></div>
                    </div>
                    <h3>LAZO</h3>
                    <p>Head Of Development</p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='https://www.linkedin.com/in/lazare-lomsadze-b43102228/' >
                        <Linkdn />
                        </a>
                        <a href="https://twitter.com/Blockchain_001">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='column'>
                <div className='card'>
                    <div className='img-container'>
                    <div className='team sixth' ></div>
                    </div>
                    <h3>Horse`Around</h3>
                    <p>Owner of the Unicorn</p>
                    <div className='icon flex flex-wrap items-center'>
                        <a href='/' >
                        <Linkdn />
                        </a>
                        <a href="/">
                        <AiFillTwitterCircle className='w-[27px] h-[27px] ml-2 fill-black'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default MTeam