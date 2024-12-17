// import { useState } from "react";
// import useWebSocket from "../hooks/useWebSocket";

// const Chat = () => {
//   const [input, setInput] = useState("");
//   const { sendMessage, messages } = useWebSocket(
//     "ws://localhost:3000/api/socket"
//   );

//   const handleSend = () => {
//     sendMessage(input);
//     setInput("");
//   };

//   return (
//     <div>
//       <h1>WebSocket Chat</h1>
//       <div>
//         {messages.map((msg, index) => (
//           <p key={index}>{msg}</p>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <button onClick={handleSend}>Send</button>
//     </div>
//   );
// };

// export default Chat;
