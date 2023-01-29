import './feature.scss'
import Content from '../../components/Content/Content'

const contents = [
	{
		id: 1,
		title: 'Free, open, simple',
		content: 'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.',
		size: 'normal',
		color: 'normal'
	},
	{
		id: 2,
		title: 'Powerful tooling',
		content: 'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.',
		size: 'normal',
		color: 'normal'
	}
]

const Feature = () => {
	return (
		<div id="feature">
			<div className="container">

				<div className="feature-content-wrapper">

					<div className="feature-image__wrapper">
						<div className="feature-image__image">

						</div>
					</div>

					<div className="feature-contents">
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

export default Feature