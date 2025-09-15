import React, { useEffect, useState } from "react";
import { List, Modal, Button } from "semantic-ui-react";
import { getProject } from "../../api/project";
import LoadingScreen from "../shared/LoadingPage";
import Note from "./Note";

const NotesModal = ({ project, user, msgAlert }) => {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState(null);
  const [anUpdate, setAnUpdate] = useState(false);

  //grab notes
  useEffect(() => {
    if (open) {
      getProject(user, project.id)
        .then((res) => setNotes(res.data.project.notes))
        .catch((error) => {
          msgAlert({
            heading: "Error",
            message: "Could not get notes",
            variant: "danger",
          });
        });
    }
  }, [open, anUpdate, msgAlert, project.id, user]);

  let modalContent;
  if (!notes) {
    modalContent = <LoadingScreen />;
  } else if (notes.length === 0) {
    modalContent = <p>There are no notes for this project</p>;
  } else {
    modalContent = (
      <List>
        {notes.map((note) => (
          <Note
            key={note._id}
            user={user}
            project={project}
            note={note}
            triggerRefresh={() => setAnUpdate((prev) => !prev)}
            msgAlert={msgAlert}
          />
        ))}
      </List>
    );
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Notes</Button>}
      size="large"
    >
      <Modal.Header>Notes for {project.projTitle}</Modal.Header>
      <Modal.Content scrolling>{modalContent}</Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default NotesModal;
