const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

const packageDev = protoLoader.loadSync("todo.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDev);

const todoPackage = grpcObject.todoPackage;

const port = 8000;

const server = new grpc.Server();

function createTodo(call, callback) {
  console.log("call ", call);
}

function getTodos() {}

server.addService(todoPackage.Todo.service, {
  createTodo: createTodo,
  getTodos: getTodos,
});

server.bindAsync(
  `0.0.0.0:${port}`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.log(`Error in starting the grpc server on ${port} with ${err}`);
      return;
    }
    console.log(`gRPC server on ${port}`);
  }
);
