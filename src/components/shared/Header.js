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
import CreateProject from "../projects/CreateProject";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {
    activeItem: "home",
    setOpen: false,
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

    if (window.innerWidth > 1536) {
      this.handleWindowBig();
    } else {
      this.handleWindowSmall();
    }
  };

  handleWindowBig = () => {
    this.setState({ bigMenu: true });
  };
  handleWindowSmall = () => {
    this.setState({ bigMenu: false });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Sticky id="stickyHeader">
          {this.state.bigMenu ? (
            <Menu
              inverted
              secondary
              pointing
              className="linkSize"
              id="header"
              widths={8}
            >
              <Menu.Item
                as={Link}
                to="/"
                name="Landing"
                active={activeItem === "Landing"}
                onClick={this.handleItemClick}
                className="linkSizeBig"
              >
                <Icon name="globe" />
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/about-me"
                name="about me"
                active={activeItem === "about me"}
                onClick={this.handleItemClick}
                className="linkSizeBig"
              >
                About me
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/projects"
                name="search"
                active={activeItem === "search"}
                onClick={this.handleItemClick}
                className="linkSizeBig"
              >
                Projects
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/skills"
                name="skills"
                active={activeItem === "skills"}
                onClick={this.handleItemClick}
                className="linkSizeBig"
              >
                Skills
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/contact"
                name="contact"
                active={activeItem === "contact"}
                onClick={this.handleItemClick}
                className="linkSizeBig"
              >
                Contact
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/experience"
                name="experience"
                active={activeItem === "experience"}
                onClick={this.handleItemClick}
                className="linkSizeBig"
              >
                Experience
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/education"
                name="education"
                active={activeItem === "education"}
                onClick={this.handleItemClick}
                className="linkSizeBig"
              >
                Education
              </Menu.Item>
              <Menu.Item
                as={Link}
                to="/documents"
                name="documents"
                active={activeItem === "documents"}
                onClick={this.handleItemClick}
                className="linkSizeBig"
              >
                Documents
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
                      className="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      <Icon name="globe"></Icon>
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`/about-me`}
                      className="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      About me
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`/projects`}
                      className="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Projects
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`skills `}
                      className="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Skills
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`experience`}
                      className="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Experience
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`education`}
                      className="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Education
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <Link
                      to={`contact`}
                      className="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Contact
                    </Link>
                  </DropdownItem>
                  <DropdownDivider />
                  <DropdownItem>
                    <span
                      className="text"
                      className="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Documents
                    </span>

                    <DropdownMenu>
                      <DropdownItem>
                        <Link
                          to={`//drive.google.com/file/d/1Wu11jcnVA7FKj9V0A8x17vlcG6i3r8Bi/view`}
                          target="_blank"
                          color="blue"
                          className="linkSize link link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                        >
                          Resume
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="//drive.google.com/file/d/12GACq2BBciISgyVBFPUZazc3ggfUEZeR/view?usp=sharing"
                          className="linkSize"
                          color="blue"
                        >
                          OutSystems Certification
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="//drive.google.com/file/d/1sR_wR8siTJVva1Bv6qcGf7dJ6GoILf_z/view?usp=sharing"
                          className="linkSize"
                          color="blue"
                        >
                          General Assembly Course Completion Certificate
                        </a>
                      </DropdownItem>
                    </DropdownMenu>
                  </DropdownItem>

                  {this.props.user ? (
                    <DropdownMenu>
                      <DropdownItem>
                        <Link to="sign-out" className="linkSize">
                          Sign Out
                        </Link>
                      </DropdownItem>
                      <DropdownItem>
                        <Link to="change-password" className="linkSize">
                          Change Password
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  ) : null}
                  <DropdownDivider />
                  <DropdownItem>
                    <span
                      className="text"
                      className="linkSize link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      Other Sites
                    </span>

                    <DropdownMenu>
                      <DropdownItem>
                        <a href="https://github.com/hewinsonj" className="linkSize">
                          Github
                        </a>
                      </DropdownItem>
                      <DropdownItem>
                        <a
                          href="https://www.linkedin.com/in/justin-hewinson/"
                          className="linkSize"
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
                    className="linkSize"
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
                as={Link}
                to="/sign-out"
                name="sign out"
                active={activeItem === "sign out"}
                onClick={this.handleItemClick}
                className="linkSize"
              />
              <Menu.Item
                as={Link}
                to="/change-password"
                name="change password"
                active={activeItem === "change password"}
                onClick={this.handleItemClick}
                className="linkSize"
              />
            </Menu>
          ) : null}
        </Sticky>
      </>
    );
  }
}
