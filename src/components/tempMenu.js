
//  Project Demo Layout


 <Segment id="actListItems" raised>
   <Container fluid>
     <Grid columns={4} textAlign="center">
       <Grid.Row>
         <Grid.Column width={11} padded textAlign="center">
           <Segment></Segment>
           <h2>click the image to view more</h2>
           <Grid.Row>
             <Grid.Column>
               <Segment>
                 <Grid columns={2}>
                   <Grid.Column>
                     <List.Item>
                       <h2>Start Date:</h2> <h3>09 12 12</h3>
                     </List.Item>
                   </Grid.Column>
                   <Grid.Column>
                     <h2>Finish Date:</h2> <h3>02 02 02</h3>
                   </Grid.Column>
                 </Grid>
               </Segment>
             </Grid.Column>

             {/* <Grid.Column>
                        <List.Item ><h4>Technologies:</h4> {project.client}</List.Item>
                    </Grid.Column> */}
             {/* <Grid.Column>
                        <List.Item ><h4>Role:</h4> {project.role}</List.Item>
                    </Grid.Column> */}
           </Grid.Row>
         </Grid.Column>
         <Grid.Column width={5}>
           {user ? (
             <Link to={0}>
               <h1 class="porjName">MyTiki</h1>
             </Link>
           ) : (
             <h1 class="porjName">MyTiki</h1>
           )}
           <List.Item>
             <h3>
               "MyTiki" is an app that provides 10 classic tiki cocktail recipes
               that are available to be viewed by any logged in user. The user
               is also able to customize any of the provided recipies and add
               them to their own "original cocktails" folder, or create their
               own from scratch! The user also has the ability to filter the
               shown cocktails by keywords, and add any cocktails they wish to
               their "favorites" folder.
             </h3>
           </List.Item>
           <Segment>
             <List.Item>
               <h2>Technologies:</h2>{" "}
               <h3>
                 Java OK KF DFKSDFKDFSDF SDF SDF SDF SD FSDF SDF SF SFD SFD FD
               </h3>
             </List.Item>
           </Segment>
           <Grid.Row fluid>
             <h2>
               {" "}
               <Icon name="caret right" />
               <a href={0} target="_blank">
                 Front End
               </a>
             </h2>
             <h2>
               {" "}
               <Icon name="caret right" />
               <a href={`0`} target="_blank">
                 Back-end
               </a>
             </h2>

             <h2>
               {" "}
               <Icon name="caret right" />
               <a href={0} target="_blank">
                 Deployed
               </a>
             </h2>
           </Grid.Row>
         </Grid.Column>
       </Grid.Row>
     </Grid>
   </Container>
 </Segment>;