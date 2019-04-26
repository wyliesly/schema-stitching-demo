import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			minimised: false,
		};

		this.changeMinimise = this.changeMinimise.bind(this);
	}

	changeMinimise() {
		this.setState({ minimised: !this.state.minimised });
	}

	render() {
		const { minimised } = this.state;
		const { title, top } = this.props;
		const styles = {
			width: minimised ? '300px' : '200px',
			top: `${top}px`,
		};

		return (
			<div
				className="card text-white"
				style={styles}
				onClick={() => this.props.changeFocus(title)}
				onMouseEnter={() => this.changeMinimise()}
				onMouseLeave={() => this.changeMinimise()}
			>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	text: PropTypes.string,
	links: PropTypes.arrayOf(PropTypes.shape({})),
	type: PropTypes.string,
	data: PropTypes.arrayOf(PropTypes.shape({})),
};

Card.defaultProps = {
	title: '',
	subtitle: '',
	text: '',
	links: [],
	type: '',
	data: [],
};

export default Card;
