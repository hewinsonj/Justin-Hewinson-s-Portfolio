import { useNavigate, useParams } from 'react-router-dom'
import {  Button, Segment, Grid, Label, Icon, Image, Modal, Header, List, GridRow, Container } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import LoadingScreen from '../shared/LoadingPage'


const AboutMe  = () => {

      const [open, setOpen] = React.useState(false)
 
    return(
    <>
    <Segment textAlign='center'>
        <h1>About me</h1> 
    </Segment>
        <Grid columns={2} padded>
            <Grid.Column width={5} textAlign='center'>
               <img src="https://i.imgur.com/SBPQdjl.jpg" title="source: imgur.com" id='picOme'/>
            </Grid.Column>
            <Grid.Column width={11} verticalAlign='middle'>
                <Segment padded='very'>
                    <h1>Hello world!</h1> 
                    <h2>
                    My name is Justin Hewinson and I am a self-driven Fullstack Software Engineer and Game Developer focused on problem-solving with creative solutions and creating unique user experiences that are both intuitive and effective. My 10+ years of experience as an audio engineer give me the ability to adapt to new/consistently changing software, and my 10+ years of experience in the service industry have given me communication skills and self-motivated drive that are a crucial asset for any industry. 
                    </h2>
                </Segment>
            </Grid.Column>
        </Grid>
        <Grid columns={2} padded>
            <Grid.Column width={11}>
                <Segment padded='very' >
                    <h1>A little history</h1> 
                    <h2>
                    Since high school music production has been one of my biggest passions. I started playing drums when I was 13 and I've been making crazy amounts of noise ever since. Being a musician has pushed me to learn how to use more types of equipment and technologies than I can ever hope to quantify. What started out as a nessiesity to teach myself these varrious tools has turned into a hunger to explore and understand the way things work around me. While owning and opperating a recording studio I've been bartending as my main source of income. The skills of being able to communicate clearly and effectively and work on multiple tasks at once (which I've gained through my experiences in the service industry) have become invaluble to me in many asspects of my life and I'm excited to put these skills to use as I further my software engineering career.
                    </h2>
                </Segment>
            </Grid.Column>
            <Grid.Column width={5} textAlign='center'>
            <Grid columns={2}>
                <Grid.Column>
                    <img src="https://i.imgur.com/2SsnHLh.jpg" title="source: imgur.com" id='picObar'/>
                </Grid.Column>
                <Grid.Column></Grid.Column>
            </Grid>
            </Grid.Column>
        </Grid>
        <Grid columns={2} padded>
            
            <Grid.Column width={5} textAlign='center'>
            <Grid columns={2}>
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column>
                <img src="https://i.imgur.com/nfqobdk.jpg" title="source: imgur.com" id='picOstuff'/>
                </Grid.Column>
            </Grid>
            <Grid columns={2}>
                
                <Grid.Column>
                <img src="https://i.imgur.com/t21n4O5.jpg" title="source: imgur.com" id='picOstuff'/>
                </Grid.Column>
                <Grid.Column width={3}></Grid.Column>
            </Grid>
            
            </Grid.Column>
            <Grid.Column width={11}>
                <Segment padded='very' >
                    <h1>Future Goals</h1> 
                    <h2>
                        The challenges and lessons I've been faced with in the software engineering field have been very rewarding and I have truly enjoyed my experiences in this field. I hope to one day take the skills I have aquired to the Game Development industry so I can finaly marry my creativity with my technical abilities. Other than working in game development I plan on developing various applications to fill the needs I've found in the world around me.
                    </h2>
                </Segment>
            </Grid.Column>
        </Grid>
    </>	
    )
}

export default AboutMe