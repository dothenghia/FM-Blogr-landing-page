
import './content.scss'

const Content = ({ key, content }) => {

	return (
		<div className={`content-container ${content.size}`}>
			<h1>{content.title}</h1>
			<p>{content.content}</p>
		</div>
	)

}

export default Content;
