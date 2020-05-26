import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({ title, id, index }) => (
  <Draggable draggableId={id} index={index}>
    {(provided) => (
      <article
        className={styles.component}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {title}
      </article>
    )}
  </Draggable>
);
Card.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.number,
  id: PropTypes.string,
};

export default Card;
