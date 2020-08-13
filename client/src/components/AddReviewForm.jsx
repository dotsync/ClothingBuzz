/* eslint-disable max-len */
/** Justification: Creates a form with these **required** specification fields below.
 * **Specifications**
        * Nickname: input field
        * Email: input field
        * Do you recomend this product?: (yes/no radio buttons)
        * Over all rating: (5 star radio buttons)
        * Add photos(low priority)
        * Characterisitics(an array of 5 radio buttons representing a 1-5 score for the below catagories)
 * Characteristics
 * ****************---1---*****************---2---********************---3---***************---4---*****************---5**************
 * ****SIZE----a size too small--------1/2 size too small-------------Perfect
 *
 * ****WIDTH------Too narrow-----------Slightly Narrow----------------Perfect--------------Slightly wide-------------Too wide
 *
 * ****COMFORT---Uncomfortable------Slightly uncomfortable--------------Ok-----------------Comfortable---------------Perfect
 *
 * ****QUALITY------Poor---------------Below average---------------What i expected---------Pretty great--------------Perfect
 *
 * ****LENGTH----Runs Short---------Runs slightly short---------------Perfect-----------Runs slightly long-----------Runs long
 *
 * ****FIT-------Runs tight----------Runs slightly tight--------------Perfect-----------Runs slightly long-----------Runs long
 * ***********************************************************************************************************************************
 */

import React from 'react';

function AddReviewForm(props) {
  return (
    <div>
      <h1>Hello from addReviewForm i was triggered by modal click</h1>
      <h2>Organize me into the form you want to see</h2>
    </div>
  );
}
export default AddReviewForm;
