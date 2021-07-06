import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  InputGroup,
  Label,
  Input,
  Col
} from 'reactstrap';

const AddMovie = ({ handleAdd }) => {
    const [showModal, setShowModal] = useState(false);
    const [newMovie, setNewMovie] = useState({
        title: ``,
        description: ``,
        posterURL: ``,
        rating: 0,
      });
      const onChangeHandler = (e) =>
        setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
      const handleClick = (e) => {
        e.preventDefault();
        handleAdd(newMovie);
      };
    return (
      <div>
       <Button className='btn btn-warning  text-uppercase rounded-pill shadow-sm' onClick={() => setShowModal(true)}>Add Movie</Button>
       <Modal isOpen={showModal} fade={false} toggle={() => setShowModal(false)}>
       <ModalHeader toggle={() => setShowModal(false)}>Add new movie</ModalHeader>
       <ModalBody >
       <InputGroup row  className="mt-3">
            <Col md={3}>
            <Label for='Title'>
              Title:
            </Label>
            </Col>
            <Col md={9}>
            <Input
            className="rounded-pill"
              type='text'
              name='title'
              placeholder='movie title'
              onChange={onChangeHandler}
            />
            </Col>
        
          </InputGroup>
          <InputGroup row className="mt-3">
            <Col md={3}>
            <Label for='Poster URL' >Poster:</Label>
            </Col>
            <Col md={9}>
            <Input className="rounded-pill"
              type='url'
              name='posterURL'
              placeholder='poster Url '
              onChange={onChangeHandler}
            />
            </Col>
        
          </InputGroup>
          <InputGroup row className="mt-3">
          <Col md={3}>
            <Label for='Description' >
              Description:
            </Label>
            </Col>
            <Col md={9}>
            <Input className="rounded-pill"
              type='textarea'
              name='description'
              placeholder='movie description '
              onChange={onChangeHandler}
            />
            </Col>
          </InputGroup>
          <InputGroup row className="mt-3">
          <Col md={3}>
            <Label for='rate' >
              Rate:
            </Label>
            </Col>
            <Col md={9}>
            <Input className="rounded-pill"
              type='text'
              name='rating'
              placeholder='rate the movie '
              onChange={onChangeHandler}
            />
            </Col>
          </InputGroup>
       </ModalBody>
       <ModalFooter>
          <Button color='warning' onClick={(e) => { handleClick(e); setShowModal(false); }} > Add </Button>{' '}
          <Button color='secondary' onClick={() => setShowModal(false)}> Close </Button>
        </ModalFooter>
      </Modal>
      </div>
    );
  };
  AddMovie.propTypes = {
    handleAdd: PropTypes.func.isRequired,
  };
  export default AddMovie;