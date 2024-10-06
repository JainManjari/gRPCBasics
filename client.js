const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const port = 8000;

const client = new todoPackage.Todo(
  `localhost:${port}`,
  grpc.credentials.createInsecure()
);

client.createTodo(
  {
    id: -1,
    text: "doing laundry",
  },
  (err, response) => {
    console.log("Recieved from server " + JSON.stringify(response));
  }
);
