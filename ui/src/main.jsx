import React from 'react';
import LearnerApp from './Time2Code/learner-view';
import InstructorApp from './Time2Code/instructor-view';


let component = (<InstructorApp />);

if (window.location.search.indexOf('learner') !== -1) {
	component = (<LearnerApp />);
}

React.render( component, document.getElementById('content'));
