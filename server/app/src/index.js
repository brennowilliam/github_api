import app from "./server"
import { createServer } from 'http'

const port = process.env.PORT || 3001

const server = createServer(app)
let currentApp = app
server.listen(port, () => console.log(`Server running on port ${port}`))

if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}
