import Link from 'next/link'
export const Footer = () => {
	return (
		<>
	<div className="w-full shadow-xl z-50 flex flex-wrap fixed bottom-0 bg-gray-500 py-2 justify-center items-center">
				<div className="w-full flex flex-wrap justify-between items-center p-1 m-auto">				
				<a href="https://github.com/SparshKesari" target="_parent" className="mr-auto">
				&nbsp;&nbsp;&nbsp;	<span className="fab fa-github" href="https://github.com/SparshKesari"></span>&nbsp;Github
				</a>
				<div>Made by Sparsh Kesari&nbsp;&nbsp;&nbsp;&nbsp;</div>
			</div>
			</div>
		</>
	)
}