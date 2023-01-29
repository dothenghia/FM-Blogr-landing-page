import './introduction.scss'
import Content from '../../components/Content/Content'

const contents = [
	{
		id: 1,
		title: 'Introducing an extensible editor',
		content: 'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.',
		size: 'normal',
		color: 'normal'
	},
	{
		id: 2,
		title: 'Robust content management',
		content: 'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.',
		size: 'normal',
		color: 'normal'
	}
]

const Introduction = () => {
	return (
		<div id='introduction'>
			<div className="container">

				<h1 className="introduction-title">Designed for the future</h1>

				<div className="introduction-content-wrapper">

					<div className="introduction-image">
						<div className="introduction-image__images">
							
						</div>
					</div>

					<div className="introduction-contents">
						{
							contents.map((content) => (
								<Content
									key={content.id}
									content = { content }
								/>
							))
						}
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default Introduction