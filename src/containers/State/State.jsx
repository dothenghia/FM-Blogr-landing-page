
import './state.scss'
import Content from '../../components/Content/Content'

const contents = [
	{
		id: 1,
		title: 'State of the Art Infrastructure',
		content: 'With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.',
		size: 'large',
		color: 'white'
	}
]

const State = () => {
	return (
		<div id='state'>
			<div className="container">

				<div className="state-content-wrapper">

					<div className="state-image__wrapper">
						<div className="state-image__image">

						</div>
					</div>

					<div className="state-contents">
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

export default State