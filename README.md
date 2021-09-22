# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. )

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Note

I changed the design and colors a little bit. I feel like background images that are so eye catching and repetitive overdate.

### Screenshot

<img width="1267" alt="Screen Shot 2021-09-22 at 12 07 22 AM" src="https://user-images.githubusercontent.com/73934231/134284307-f455d416-8769-4d35-a72d-2e44f1911c12.png">

<img width="1264" alt="Screen Shot 2021-09-22 at 12 08 17 AM" src="https://user-images.githubusercontent.com/73934231/134284505-3774a53d-fcd1-4dc5-86df-f7cb30dd2fba.png">

<img width="1270" alt="Screen Shot 2021-09-22 at 12 08 46 AM" src="https://user-images.githubusercontent.com/73934231/134284522-c1583d33-c492-44c8-a0bd-41428a982706.png">


<img width="1268" alt="Screen Shot 2021-09-22 at 12 08 58 AM" src="https://user-images.githubusercontent.com/73934231/134284540-ce8dfda1-54ed-43f6-bbfa-f6486cc670a4.png">

<img width="325" alt="Screen Shot 2021-09-22 at 12 35 51 AM" src="https://user-images.githubusercontent.com/73934231/134284550-f775d18e-b33e-4e8e-b129-e3d49f4a6e79.png">

<img width="633" alt="Screen Shot 2021-09-22 at 12 36 23 AM" src="https://user-images.githubusercontent.com/73934231/134284560-e1bfec95-aca4-4df6-9258-eb0daec6df1e.png">



### Links

- Solution URL: https://github.com/DianaTs1/intro-component-with-signup-form-master
- Live Site URL: https://dianats1.github.io/intro-component-with-signup-form-master/

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I practices working with hooks such as useEffect, useState and useReducer. Also have practiced with input validation which seems one of the main features of the front-end development. Used the validator package first time as well.

```html
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
```


```js
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
```


I have been able to change the responsiveness with just this piece of media query thank to Mobile first workflow.

``` CSS
@media screen and (min-width: 1140px) {
	.form,
	.trial-button {
		min-width: 100%;
	}
	.form-wrapper {
		min-width: 35%;
	}
}
```
