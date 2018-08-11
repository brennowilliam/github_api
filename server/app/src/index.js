import app from "./server"
import { createServer } from 'http'

const server = createServer(app)

server.listen(3001, () => console.log(`listening on port 3000`))

if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', app)
		server.on('request', app)
	})
}
