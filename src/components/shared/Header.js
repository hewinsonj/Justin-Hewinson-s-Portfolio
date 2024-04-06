import React, { Component } from "react";
import { getUserInfo } from "../../api/user";
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

  // constructor(user) {
  //   super();
  //   user = this.props.user;
  // }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  handleClose = () => {
    this.setState({ setOpen: false });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("load", this.updateDimensions);
    // console.log(this.props.user, 'user')
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
              widths={8}
            >
              <Menu.Item
                name="Landing"
                active={activeItem === "Landing"}
                onClick={this.handleItemClick}
              >
                <Link to={`/`} class="linkSizeBig">
                  <Icon name="globe"></Icon>
                </Link>
              </Menu.Item>
              <Menu.Item
                name="about me"
                active={activeItem === "about me"}
                onClick={this.handleItemClick}
              >
                <Link to={`/about-me`} class="linkSizeBig">
                  About me
                </Link>
              </Menu.Item>
              <Menu.Item
                name="search"
                active={activeItem === "search"}
                onClick={this.handleItemClick}
              >
                <Link to={`/projects`} class="linkSizeBig">
                  Projects
                </Link>
              </Menu.Item>
              <Menu.Item
                name="skills"
                active={activeItem === "skills"}
                onClick={this.handleItemClick}
              >
                <Link to={`skills `} class="linkSizeBig">
                  Skills
                </Link>
              </Menu.Item>
              <Menu.Item
                name="contact"
                active={activeItem === "contact"}
                onClick={this.handleItemClick}
              >
                <Link to={`contact`} class="linkSizeBig">
                  Contact
                </Link>
              </Menu.Item>
              <Menu.Item
                name="experience"
                active={activeItem === "experience"}
                onClick={this.handleItemClick}
              >
                <Link to={`experience`} class="linkSizeBig">
                  Experience
                </Link>
              </Menu.Item>
              <Menu.Item
                name="education"
                active={activeItem === "education"}
                onClick={this.handleItemClick}
              >
                <Link to={`education`} class="linkSizeBig">
                  Education
                </Link>
              </Menu.Item>
              <Menu.Item
                name="documents"
                active={activeItem === "documents"}
                onClick={this.handleItemClick}
              >
                <Link to={`documents`} class="linkSizeBig">
                  Documents
                </Link>
              </Menu.Item>

              {/* This is a conditional that checks if a user is logged in */}
            </Menu>
          ) : (
            <Menu attached="top" color="grey" id="mobileMenu">
              <Dropdown
                item
                icon={<Icon name="globe" size="big" inverted />}
                simple
              >
                <DropdownMenu size="medium" inverted>
                  <DropdownItem>
                    <Link
                      to={`/`}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      <Icon name="globe"></Icon>
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`/about-me`}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      About me
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`/projects`}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Projects
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`skills `}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Skills
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />

                  {/* <DropdownItem>
                    <Link
                      to={`/projectDetail/:projectId`}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      ProjDetail
                    </Link>
                  </DropdownItem> */}
                  <DropdownItem>
                    <Link
                      to={`experience`}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Experience
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`education`}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Education
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`contact`}
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Contact
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    {/* <Icon name="dropdown" /> */}

                    <span
                      className="text"
                      class="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Documents
                    </span>

                    <DropdownMenu>
                      <DropdownItem>
                        <Link
                          to={`//drive.google.com/file/d/1Wu11jcnVA7FKj9V0A8x17vlcG6i3r8Bi/view`}
                          target="_blank"
                          color="blue"
                          class="linkSize link link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        >
                          Resume
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="//drive.google.com/file/d/12GACq2BBciISgyVBFPUZazc3ggfUEZeR/view?usp=sharing"
                          class="linkSize"
                          color="blue"
                        >
                          OutSystems Certification
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </DropdownItem>

                  {this.props.user ? (
                    <DropdownMenu>
                      <DropdownItem>
                        <Link to="sign-out" class="linkSize">
                          Sign Out
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="change-password" class="linkSize">
                          Change Password
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  ) : null}
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
            </Menu>
          )}
          {this.props.user ? (
            <Menu>
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
            </Menu>
          ) : null}
        </Sticky>
      </>
    );
  }
}
