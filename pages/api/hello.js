// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function helloAPI(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function (req, res) {
	console.log(req)
	res.status(200).json('JOhn')
}