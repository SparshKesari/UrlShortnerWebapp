import Link from 'next/link'
import { LoginButton } from './LoginButton/LoginButton'

export const IndexNav = () => {
  
	return (
		<>
			<div className="w-full shadow-xl z-50 flex flex-wrap fixed top-0 bg-gray-500 py-2 justify-center items-center">
				<div className="w-full flex flex-wrap justify-between items-center p-1 m-auto">
					{/* <div><i className="fas fa-route"></i></div> */}
					<div className="px-2 mr-auto text-2xl font-bold font-sans transition-all duration-500 ease-in-out hover:underline">Minirls</div>
			
					{/* <LoginButton /> */}
				</div>
			</div>
		</>
	)
}
