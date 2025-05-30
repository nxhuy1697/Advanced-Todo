import React from 'react';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Todo() {
  return (
    <div className='Todo'>
      <p>go to school</p>
      <div>
       <FontAwesomeIcon icon={faTrashCan} />;
      </div>
    </div>
  )
}
