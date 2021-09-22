import React, { useReducer, useEffect, useState } from 'react';
import classes from './Form.module.css';
import validator from 'validator';

const USER_PASSWORD = 'USER_PASSWORD';
const INPUT_BLUR = 'INPUT_BLURT';
const USER_EMAIL = 'USER_EMAIL';

const checkEmaildValidity = (value) => {
	return validator.isEmail(value);
};
const checkPasswordValidity = (value) => {
	return value.length >= 8;
};

const passwordReducer = (state, action) => {
	switch (action.type) {
		case USER_PASSWORD:
			return {
				value: action.value,
				isValid: checkPasswordValidity(action.value),
				passwordIsTouched: true
			};
		case INPUT_BLUR:
			return {
				value: state.value,
				isValid: checkPasswordValidity(state.value),
				passwordIsTouched: true
			};
		default:
			return { value: '', isValid: false };
	}
};

const emailReducer = (state, action) => {
	switch (action.type) {
		case USER_EMAIL:
			return {
				value: action.value,
				isValid: setTimeout(() => checkEmaildValidity(action.value), 5000),
				emailIsTouched: true
			};
		case INPUT_BLUR:
			return {
				value: state.value,
				isValid: checkEmaildValidity(state.value),
				emailIsTouched: true
			};
		default:
			return { value: '', isValid: false };
	}
};
const Form = () => {
	const [ passwordState, dispatchPassword ] = useReducer(passwordReducer, {
		value: '',
		isValid: null,
		isTouched: false
	});
	const [ emailState, dispatchEmail ] = useReducer(emailReducer, {
		value: '',
		isValid: '',
		emailIsTouched: false
	});
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ formValidity, setFormValidity ] = useState(false);
	const [ firstNameIsTouched, setFirstNameIsTouched ] = useState(false);
	const [ lastNameIsTouched, setLastNameIsTouched ] = useState(false);

	//handle paassword
	const passwordChangeHandler = (e) => {
		setTimeout(() => dispatchPassword({ type: USER_PASSWORD, value: e.target.value }), 2000);
	};
	const validatePassword = (e) => {
		setTimeout(() => dispatchPassword({ type: INPUT_BLUR, value: e.target.value }), 5000);
	};

	//hande email
	const emailChangeHandler = (e) => {
		dispatchEmail({ type: USER_EMAIL, value: e.target.value });
	};
	const validateEmail = (e) => {
		dispatchEmail({ type: INPUT_BLUR, value: e.target.value });
	};

	// make sure it's not a number
	const numberHandler = (name) => {
		for (let char of name) {
			if (!isNaN(char)) {
				// alert('Name can not be a number');
				return 'Name can not include a number.';
			}
		}
	};

	//handle first name
	const firstNameChangeHandler = (e) => {
		setFirstNameIsTouched(true);
		setFirstName(e.target.value.trim());
	};

	//handle last name
	const lastNameChangeHandler = (e) => {
		setLastNameIsTouched(true);
		setLastName(e.target.value.trim());
	};

	//handle overal form

	const cleanUp = () => {
		window.location.reload();
	};

	const formSubmitonHandle = (e) => {
		e.preventDefault();
		setLastNameIsTouched(true);
		setFirstNameIsTouched(true);
		dispatchEmail({ type: INPUT_BLUR });
		dispatchPassword({ type: INPUT_BLUR });

		if (formValidity) {
			cleanUp();
		}
	};

	useEffect(
		() => {
			const userInputIdentifier = setTimeout(() => {
				setFormValidity(
					emailState.isValid && passwordState.isValid && firstName && lastName
				);
			}, 600);

			return () => {
				clearTimeout(userInputIdentifier);
			};
		},
		[ emailState, passwordState, firstName, lastName ]
	);

	return (
		<section className={classes['form-wrapper']}>
			<button className={`${classes.button} ${classes['trial-button']}`}>
				<span> Try it free 7 days </span>then <br /> $20/mo. thereafter{' '}
			</button>
			<form onSubmit={formSubmitonHandle} className={`${classes.form}`}>
				<input
					onBlur={() => setFirstNameIsTouched(true)}
					className={`${!firstName && firstNameIsTouched
						? classes.invalid
						: classes.input}`}
					onChange={firstNameChangeHandler}
					type="text"
					placeholder="First Name"
					id="firs-name"
					name="first-name"
				/>
				{!firstName &&
				firstNameIsTouched && (
					<p className={classes.error}>First name can not be empty</p>
				)}
				{<p className={classes.error}>{numberHandler(firstName)}</p>}
				<input
					onBlur={() => setLastNameIsTouched(true)}
					className={`${!lastName && lastNameIsTouched
						? classes.invalid
						: classes.input}`}
					onChange={lastNameChangeHandler}
					type="text"
					placeholder="Last Name"
					id="last-name"
					name="last-name"
				/>
				{!lastName &&
				lastNameIsTouched && (
					<p className={classes.error}>Last name can not be empty</p>
				)}
				{<p className={classes.error}>{numberHandler(lastName)}</p>}

				<input
					onChange={emailChangeHandler}
					onBlur={validateEmail}
					type="email"
					placeholder="Email"
					id="email"
					name="email"
					className={`${!emailState.isValid && emailState.emailIsTouched
						? classes.invalid
						: classes.input}`}
				/>
				{!emailState.isValid &&
				emailState.emailIsTouched && (
					<p className={classes.error}>Looks like this is not an email</p>
				)}
				<input
					className={`${!passwordState.isValid &&
					passwordState.passwordIsTouched
						? classes.invalid
						: classes.input}`}
					onChange={passwordChangeHandler}
					onBlur={validatePassword}
					type="password"
					placeholder="Password"
					id="password"
					name="password"
				/>

				{!passwordState.isValid &&
				passwordState.passwordIsTouched && (
					<p className={classes.error}>
						Passwords should be more than 8 characters
					</p>
				)}
				<button className={`${classes.button} ${classes['submit-button']}`}>
					CLAIM YOUR FREE TRIAL
				</button>

				<p className={classes.p}>
					By clicking the button, you are agreeing to our{' '}
					<a href="/"> Terms and Services </a>
				</p>
			</form>
		</section>
	);
};

export default Form;
