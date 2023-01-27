
import './App.css'
import Header from './containers/Header/Header'
import Introduction from './containers/Introduction/Introduction'
import State from './containers/State/State'

const App = () => {
	return (
		<div className='app'>
			<Header/>

			<Introduction/>

			<State/>

			{/* <Feature/>

			<Footer/> */}
		</div>
	)
}

export default App