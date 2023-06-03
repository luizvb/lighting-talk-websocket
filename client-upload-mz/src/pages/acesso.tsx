"use client";
import { useEffect } from "react";
import SocketIo from "../infraestructure/ws.connection";

export default function Home() {
  const socket = new SocketIo();

    useEffect(() => {
        socket.emit('pong', {})
    }, [socket]);

  return (
    <>
    <img src="https://farm1.static.flickr.com/35/101665997_40f424268d_o.jpg"/>
    </>
  );
}
