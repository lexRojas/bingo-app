// import { IncomingMessage } from "http";
// import { Duplex } from "stream";
// import { WebSocketServer } from "ws";

// let wss: WebSocketServer | null = null;

// const handler = (
//   req: {
//     socket: {
//       server: {
//         on: (
//           arg0: string,
//           arg1: (request: IncomingMessage, socket: Duplex, head: Buffer) => void
//         ) => void;
//       };
//     };
//   },
//   res: {
//     status: (arg0: number) => {
//       (): any;
//       new (): any;
//       end: { (): void; new (): any };
//     };
//   }
// ) => {
//   if (!wss) {
//     wss = new WebSocketServer({ noServer: true });

//     wss.on("connection", (ws) => {
//       console.log("Client connected");

//       // Listener for messages from the client
//       ws.on("message", (message) => {
//         console.log("Received:", message.toString());

//         // Echo the message back to all connected clients
//         wss?.clients.forEach((client) => {
//           if (client.readyState === 1) {
//             client.send(`Server echo: ${message}`);
//           }
//         });
//       });

//       // On close
//       ws.on("close", () => {
//         console.log("Client disconnected");
//       });
//     });

//     // Handle WebSocket upgrade
//     req.socket.server.on(
//       "upgrade",
//       (request: IncomingMessage, socket: Duplex, head: Buffer) => {
//         wss?.handleUpgrade(request, socket, head, (ws) => {
//           wss?.emit("connection", ws, request);
//         });
//       }
//     );
//   }

//   res.status(200).end();
// };

// export default handler;
