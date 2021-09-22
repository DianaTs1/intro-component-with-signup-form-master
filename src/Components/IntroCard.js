import React from 'react';
import Form from './Form';
import classes from './IntroCard.module.css';

const IntroCard = () => {
	return (
		<div className={classes.wrapper}>
			<main className={classes.main}>
				<section className={classes.texts}>
					<h1>Learn to code by watching others</h1>
					<p>
						See how experienced developers solve problems in real-time.
						Watching scripted tutorials is great, but understanding how
						developers think is invaluable.
					</p>
				</section>
				<Form />
			</main>
		</div>
	);
};

export default IntroCard;
