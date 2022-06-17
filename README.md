### TEST DOCUMENTATON

  FILE STRUCTURE :

	src/
	    component/
		  registereduser.js
	    redux/
		  projectmembership/
			actions.js
			reducers.js
			sagas.js
		   unregistereduser/
			actions.js
			reducers.js
			sagas.js
		   users/
			actions.js
			reducers.js
			sagas.js
	        reducers.js
	        sagas.js
	        store.js
	    utils/
		constants.js
	    App.js
	
 

 ### src/component/registereduser.js
	
	Get all data's from given three api's and display the output.
	Use useSelector for get the api data's.
	Use useDispatch for dispatch the actions.

 ### src/redux/projectmembership/actions.js
	
	Define the action type and actions for projectmembership api.
	Action types are used to identify the corresponding reducer from the action.

 ### src/redux/projectmembership/reducers.js
	
	Implement the behavior of the actions for projectmembership api.
	Reducers are functions that take the current state and an action as arguments, and return a new state result.

 ### src/redux/projectmembership/sagas.js

	 It connect it to the Redux Store using the redux-saga middleware.
	 It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

 ### src/redux/unregistereduser/actions.js

	Define the actions for unregistereduser api.

 ### src/redux/unregistereduser/reducers.js

	Implement the behavior of the actions for unregistereduser api.

###  src/redux/unregistereduser/sagas.js

	connect it to the Redux Store using the redux-saga middleware.

 ### src/redux/users/actions.js

	Define the actions for registereduser api.

 ### src/redux/users/reducers.js

	Implement the behavior of the actions for registereduser api.

 ### src/redux/users/sagas.js

	connect it to the Redux Store using the redux-saga middleware.

 ### src/redux/reducers.js

	Combine all reducers in one file.
 
 ### src/redux/sagas.js

	Combine all sagas in one file.

 ### src/redux/store.js

	create redux store.
	Holds the current application state inside.
	The Redux store brings together the state, actions, and reducers 

 ### utils/constants.js

	Export the url.

 ### src/App.js

	Provide the redux store to all components using Provider tag.

 ### INSTALLED PACKAGES :
		
	1. React
	2. react-redux
	3. redux
	4. redux-saga
	5. react-router-dom
	6. axios

