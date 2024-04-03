import React, { Component } from "react";
import {
  Menu,
  Icon,
  Sticky,
  Modal,
  Button,
  Checkbox,
  Grid,
  Image,
  Segment,
  Sidebar,
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
  MenuMenu,
  Dropdown,
  MenuItem,
} from "semantic-ui-react";
import CreateActivity from "../activities/CreateActivity";
import CreateProject from "../projects/CreateProject";
import UserPublicPage from "../user/UserPublicPage";
import { Link } from "react-router-dom";
// import ComponentDidMount from "//Users/justinhewinson/sei_monstermash/projects/hewinson portfolio/j-hewinson-portfolio/src/App"

export default class Header extends Component {
  state = {
    activeItem: "home",
    setOpen: false,
    newActivity: false,
    bigMenu: true,
    width: 0,
    height: 0,
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleClose = () => {
    this.setState({ setOpen: false });
  };


	
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("load", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("load", this.updateDimensions);
  }

  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });

    // console.log(window.innerWidth);

    if (window.innerWidth > 1536) {
      this.handleWindowBig();
    } else {
      this.handleWindowSmall();
    }
  };

  handleWindowBig = () => {
    this.setState({ bigMenu: true });
    // console.log("handleBig happened", this.bigMenu);
  };
  handleWindowSmall = () => {
    this.setState({ bigMenu: false });
    // console.log("handleSmall happened", this.bigMenu);
  };
	

  render() {
    const { activeItem } = this.state;
	  
    // window.addEventListener("resize", updateDimensions());
	
    return (
      <>
        <Sticky id="stickyHeader">
          {this.state.bigMenu ? (
            <Menu
              inverted
              secondary
              pointing
              class="linkSize"
              id="header"
              widths={6}
            >
              <Menu.Item
                name="Landing"
                active={activeItem === "Landing"}
                onClick={this.handleItemClick}
              >
                <Link to={`/`} class="linkSize">
                  <Icon name="globe"></Icon>
                </Link>
              </Menu.Item>
              <Menu.Item
                name="about me"
                active={activeItem === "about me"}
                onClick={this.handleItemClick}
              >
                <Link to={`/about-me`} class="linkSize">
                  About me
                </Link>
              </Menu.Item>
              <Menu.Item
                name="search"
                active={activeItem === "search"}
                onClick={this.handleItemClick}
              >
                <Link to={`/projects`} class="linkSize">
                  Projects
                </Link>
              </Menu.Item>
              <Menu.Item
                name="skills"
                active={activeItem === "skills"}
                onClick={this.handleItemClick}
              >
                <Link to={`skills `} class="linkSize">
                  Skills
                </Link>
              </Menu.Item>
              {/* <Menu.Item
					name='my public profile'
					active={activeItem === 'my public profile'}
					onClick={this.handleItemClick}
				>
					<Link 
						to={``} 
					>
						Goals
					</Link>
				</Menu.Item> */}

              <Menu.Item
                name="resume"
                active={activeItem === "resume"}
                onClick={this.handleItemClick}
              >
                <Link
                  to={`//drive.google.com/file/d/1Wu11jcnVA7FKj9V0A8x17vlcG6i3r8Bi/view`}
                  target="_blank"
                  color="blue"
                  class="linkSize"
                >
                  Resume
                </Link>
              </Menu.Item>
              <Menu.Item
                name="contact"
                active={activeItem === "contact"}
                onClick={this.handleItemClick}
              >
                <Link to={`contact`} class="linkSize">
                  Contact
                </Link>
              </Menu.Item>
              {/* This is a conditional that checks if a user is logged in */}
              {this.props.user ? (
                <Menu.Menu widths={3}>
                  <Modal
                    onClose={() => this.handleClose()}
                    onOpen={() => this.setState({ setOpen: true })}
                    open={this.state.setOpen}
                    trigger={
                      <Menu.Item
                        name="New Project"
                        active={activeItem === "new project"}
                        onClick={this.handleItemClick}
                        class="linkSize"
                      >
                        New Project
                      </Menu.Item>
                    }
                  >
                    <Modal.Content>
                      <CreateProject
                        user={this.props.user}
                        setNewProject={this.props.setNewProject}
                        msgAlert={this.props.msgAlert}
                        handleClose={this.handleClose}
                      />
                    </Modal.Content>
                  </Modal>

                  <Menu.Item
                    name="sign out"
                    active={activeItem === "sign out"}
                    onClick={this.handleItemClick}
                  >
                    <Link to="sign-out" class="linkSize">
                      Sign Out
                    </Link>
                  </Menu.Item>
                  <Menu.Item
                    name="change password"
                    active={activeItem === "change password"}
                    onClick={this.handleItemClick}
                  >
                    <Link to="change-password" class="linkSize">
                      Change Password
                    </Link>
                  </Menu.Item>
                </Menu.Menu>
              ) : null}
            </Menu>
          ) : (
            <Menu attached="top" color="grey" id="mobileMenu">
              <Dropdown
                item
                icon={<Icon name="globe" size="large" inverted />}
                simple
              >
                <DropdownMenu size="huge" inverted>
                  <DropdownItem>
                    <Link
                      to={`/`}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      <Icon name="globe"></Icon>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to={`/about-me`}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      About me
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to={`/projects`}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Projects
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link
                      to={`skills `}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Skills
                    </Link>
                  </DropdownItem>

                  <DropdownItem>
                    <Link
                      to={`//drive.google.com/file/d/1Wu11jcnVA7FKj9V0A8x17vlcG6i3r8Bi/view`}
                      target="_blank"
                      color="blue"
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Resume
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    {/* <Icon name="dropdown" /> */}
                    <span
                      className="text"
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Other Sites
                    </span>

                    <DropdownMenu>
                      <DropdownItem>
                        <a href="https://github.com/hewinsonj" class="linkSize">
                          Github
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="https://www.linkedin.com/in/justin-hewinson/"
                          class="linkSize"
                        >
                          LinkedIn
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              {/* <MenuMenu position="right">
                <div className="ui right aligned category search item">
                  <div className="ui transparent icon input">
                    <input
                      className="prompt"
                      type="text"
                      placeholder="Search animals..."
                    />
                    <i className="search link icon" />
                  </div>
                  <div className="results" />
                </div>
              </MenuMenu> */}
            </Menu>
          )}
        </Sticky>
      </>
    );
  }
}
