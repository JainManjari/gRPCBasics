const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.todoPackage;

const port = 8000;

const text = process.argv[2];

const client = new todoPackage.Todo(
  `localhost:${port}`,
  grpc.credentials.createInsecure()
);

client.createTodo(
  {
    id: -1,
    text: text === undefined || text === null ? "Doing laundry" : text,
  },
  (err, response) => {
    console.log("Recieved from createTodos " + JSON.stringify(response));
  }
);

client.getTodos({}, (err, response) => {
  console.log("Recieved from getTodos " + JSON.stringify(response));
});
 