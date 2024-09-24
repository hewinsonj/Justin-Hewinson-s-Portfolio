import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Container,
  Icon,
  Grid,
} from "semantic-ui-react";

const ProjectForm = (props) => {
  const { project, handleChange, handleSubmit, heading } = props;

  return (
    <Container className="justify-content-center">
      <h3>{heading}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            required
            name="projTitle"
            id="projTitle"
            label="Project Title"
            placeholder="Project title"
            defaultValue={project.projTitle}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Input
          name="priority"
          required
          id="priority"
          label="priority"
          placeholder="(a), (b), (c), (d), (e), (f)"
          defaultValue={project.priority}
          onChange={handleChange}
        />
        <Form.Input
          name="img1"
          id="img1"
          label="img1"
          placeholder="img1"
          defaultValue={project.img1}
          onChange={handleChange}
        />

        <Form.Input
          name="img2"
          id="img2"
          label="img2"
          placeholder="img2"
          defaultValue={project.img2}
          onChange={handleChange}
        />
        <Form.Input
          name="img3"
          id="img3"
          label="img3"
          placeholder="img3"
          defaultValue={project.img3}
          onChange={handleChange}
        />
        <Form.Input
          required
          // width={6}
          type="description"
          name="description"
          id="description"
          label="description"
          placeholder="description"
          fluid
          value={project.description}
          onChange={handleChange}
        />
        <Form.Group inline>
          <Form.Input
            name="finishDate"
            id="finishDate"
            label="finishDate"
            placeholder="finishDate"
            defaultValue={project.finishDate}
            onChange={handleChange}
          />
          <Form.Input
            required
            name="startDate"
            id="startDate"
            label="startDate"
            placeholder="startDate"
            defaultValue={project.startDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Input
          name="link1"
          id="link1"
          label="link1"
          placeholder="link1"
          defaultValue={project.link1}
          onChange={handleChange}
        />
        <Form.Input
          name="link2"
          id="link2"
          label="link2"
          placeholder="link2"
          defaultValue={project.link2}
          onChange={handleChange}
        />
        <Form.Input
          name="link3"
          id="link3"
          label="link3"
          placeholder="link3"
          defaultValue={project.link3}
          onChange={handleChange}
        />
        <Form.Input
          required
          name="role"
          id="role"
          label="role"
          placeholder="role"
          defaultValue={project.role}
          onChange={handleChange}
        />
        <Form.Input
          required
          name="client"
          id="client"
          label="Technologies"
          placeholder="client"
          defaultValue={project.client}
          onChange={handleChange}
        />
        <Form.Input
          required
          width={6}
          type="number"
          name="progress"
          id="progress"
          label="Progress"
          value={project.progress}
          onChange={handleChange}
        />

        <Form.Field>
          <Checkbox
            label="Mark Project as Private"
            name="private"
            defaultChecked={project.private}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit" color="yellow">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ProjectForm;
