const jsonServer = require("json-server")
const server = jsonServer.create()
const router = jsonServer. router('data.json')
const middleware = jsonServer.defaults()
server.use(middleware)
server.use(router)

const port = process.env.PORT || 4000
server.listen(port,()=>{
    console.log("esta shit esta corriendo")
})

