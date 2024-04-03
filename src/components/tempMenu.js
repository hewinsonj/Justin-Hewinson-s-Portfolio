

         {
           /* <Segment textAlign="center">
          <h1 class="oswald projName">About me</h1>
        </Segment> */
         }


{
  /*  <Grid.Column width={4} textAlign="center">
            <img
              src="https://i.imgur.com/fFEjwMs.jpg"
              title="source: imgur.com"
              id="picOme"
            />
          </Grid.Column>
          <Grid.Column width={11} verticalAlign="middle">
            <Segment padded="very">
              <h1 class="oswald">Hello world!</h1>
              <h2 class="oswald">
                My name is Justin Hewinson and I am a self-driven Fullstack
                Software Engineer and Game Developer focused on problem-solving
                with creative solutions and creating unique user experiences
                that are both intuitive and effective. My 20+ years of combined
                experience as an audio engineer and a service industry
                professional give me the ability to adapt to new/consistently
                changing software and technologies, strong communication skills
                and self-motivated drive that are a crucial asset for any
                industry.
              </h2>
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid columns={2} padded>
          <Grid.Column width={10}>
            <Segment padded="very">
              <h1 class="oswald">Parts of me</h1>
              <h2 class="oswald">
                <List bulleted>
                  <List.Item>
                    Software Developer - Learning to code has given me the
                    ability to combine and utilize my skills gained through
                    previous life experiences and create applications that fill
                    the needs I see unmet in the world around me
                  </List.Item>
                  <List.Item>
                    Musician/Audio Engineer - Had to learn to utilize various
                    types of equipment and technologies and instilled the
                    importance of mastering the fundamentals of a craft within
                    me at a young age
                  </List.Item>
                  <List.Item>
                    Gamer - Games have taught me crucial ways of problem solving
                    and have been a big motivation for learning to code and
                    create unique user experiences
                  </List.Item>
                  <List.Item>
                    Bartender - The service industry fostered strong work ethic
                    and the ability to communicate clearly and work cohesively
                    with a large team
                  </List.Item>
                  <List.Item>
                    Handy Man - Completing minor/major renovations on my house
                    over the years has given me a profound respect for trusting
                    the process and measuring twice to cut once
                  </List.Item>
                  <List.Item>
                    Favorite Artists Right Now - Snarky Puppy, Patrick Watson,
                    Mastodon, Sungazer, Thundercat, Flume, FKJ,
                    ミラクルミュージカル
                  </List.Item>
                  <List.Item>
                    Favorite Games - Zelda: Ocarina of Time, Super Smash Bros,
                    Fortnite, Batman: Arkham (Franchise)
                                </List.Item>
                                

                </List>
              </h2>
            </Segment>
                </Grid.Column> */
}
{
  /* ------------------------------------------------------------------------                                 */
}
{
  /* <List.Item>
                            Most Used Apps - Youtube, Youtube Music, Instagram, Amazon, Home Depot
                        </List.Item> */
}
{
  /* 
                    <h2>    
                    Since high school music production has been one of my biggest passions. I started playing drums when I was 13 and I've been making crazy amounts of noise ever since. Being a musician has pushed me to learn how to use more types of equipment and technologies than I can ever hope to quantify. What started out as a nessiesity to teach myself these varrious tools has turned into a hunger to explore and understand the way things work around me. While owning and opperating a recording studio I've been bartending as my main source of income. The skills of being able to communicate clearly and effectively and work on multiple tasks at once (which I've gained through my experiences in the service industry) have become invaluble to me in many asspects of my life and I'm excited to put these skills to use as I further my software engineering career.
                    </h2> */
}
{
  /* <Grid.Column width={6} textAlign="center">
            <Grid>
              <Grid.Column textAlign="center">
                <img
                  src="https://i.imgur.com/2SsnHLh.jpg"
                  title="source: imgur.com"
                  id="picObar"
                />
                <h2 id="centered">
                  Bartending at 'The SOS Tiki Bar' in Decatur, Ga
                </h2>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
        <Grid columns={2} padded>
            
            <Grid.Column textAlign='center' >
                <Grid centered>

                    <Grid.Column textAlign='center' verticalAlign='middle'>

                    
                    <Button
                    content={visible ? 'Hide' : 'Show'}
                    onClick={handleToggleVisibility}
                    name='jeff'
                    />
                    
                    <Transition visible={visible} animation='scale' duration={500}>
                    <img src="https://i.imgur.com/nfqobdk.jpg" title="source: imgur.com" id='picOstuff'
                    />
                    </Transition>


                    </Grid.Column>
                </Grid>

            </Grid.Column> 


            
             <Grid.Column textAlign='center'>
                <img src="https://i.imgur.com/CIfphyK.jpg" title="source: imgur.com" id='picOstuff'/>
                <h2 id='centered'>The bathroom my girlfriend and I renovated</h2>
            </Grid.Column> 
            <Grid.Column width={11}>
                <Segment padded='very' >
                    <h1>Future Goals</h1> 
                    <h2>
                        The challenges and lessons I've been faced with in the software engineering field have been very rewarding and I have truly enjoyed my experiences in this field. I hope to one day take the skills I have aquired to the Game Development industry so I can finaly marry my creativity with my technical abilities. Other than working in game development I plan on developing various applications to fill the needs I've found in the world around me.
                    </h2>
                </Segment>
            </Grid.Column> */
}





          <Transition visible={card11Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container onClick={handleToggleVisibilityCard11A}>
                <Segment inverted>
                  <Grid columns={2} centered fluid>
                    <Grid.Column width={7} centered>
                      <Image
                        size="huge"
                        src="https://i.imgur.com/yeyQ0aa.jpg"
                      />
                    </Grid.Column>
                    <Grid.Column width={9}>
                      <Message>
                        <Message.Header padded>
                          <h1>Gamer</h1>
                        </Message.Header>
                        <Divider />
                        <Message.Content>
                          <h2>
                            Games have taught me crucial ways of problem solving
                    and have been a big motivation for learning to code and
                    create unique user experiences
                          </h2>
                        </Message.Content>
                      </Message>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>
          <Transition visible={card12Viz} animation="scale" duration={1000}>
            <Grid.Row centered>
              <Container fluid onClick={handleToggleVisibilityCard11A}>
                <Segment
                  inverted
                  style={{
                    border: "solid",
                    bordercolor: "light grey",
                  }}
                >
                  <Grid centered>
                    <Grid.Row>
                      <Image
                        size="medium"
                        src="https://i.imgur.com/yeyQ0aa.jpg"
                      />
                    </Grid.Row>
                    <Grid.Row>
                      <Message>
                        <Message.Header padded>
                          <h1>Gamer</h1>
                        </Message.Header>
                        <Message.Content>
                          <h4>
                            Games have taught me crucial ways of problem solving
                    and have been a big motivation for learning to code and
                    create unique user experiences
                          </h4>
                        </Message.Content>
                      </Message>
                    </Grid.Row>
                  </Grid>
                </Segment>
              </Container>
            </Grid.Row>
          </Transition>





