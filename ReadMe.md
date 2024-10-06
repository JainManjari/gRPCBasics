# gRPC - Google Remote Procedure Call


## What is gRPC?
gRPC is basically a framework that allows a program to execute another program (maybe in different language) on the server.

- gRPC uses HTTP/2 as its transfer protocol because of binary framing, header compression


## Commands
```
npm i @grpc/grpc-js @grpc/proto-loader
npm install -g grpc-tools
```

### Use protoc to generate files
- Java
```
protoc --java_out=./java --proto_path=./ ./todo.proto
```
- Javascript
```
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:./js_out \
  --grpc_out=./js_out \
  --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` \
  --proto_path=./ \     
  ./todo.proto 
```