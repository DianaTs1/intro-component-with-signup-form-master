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

I changed the design and colors a little bit. I feel like background images that are so repetitive overdates.

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

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

I am kinda proud to be able to change the responsiveness with just this piece of media query thank to Mobile first workflow.

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
