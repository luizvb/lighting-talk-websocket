"use client";
import { useEffect, useState } from "react";
import SidebarWithHeader from "../components/dashboard";
import SocketIo from "../infraestructure/ws.connection";

import {
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
  Divider,
  Image,
} from "@chakra-ui/react";

export default function Home() {
  const socket = new SocketIo();
  const [acessos, setAcessos] = useState(0);
  const [lastDate, setLastDate] = useState(0);

  useEffect(() => {
    socket.on("acessos", (data: any) => {
      setAcessos(data.clients);
      setLastDate(data.date);
    });
  }, []);

  return (
    <>
      <SidebarWithHeader
        children={
          <>
            <Card maxW="sm">
              <CardBody>
                <Image
                  src="https://farm1.static.flickr.com/35/101665997_40f424268d_o.jpg"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Qtd de pessoas acessando</Heading>
                  <Text>
                    Entrem ai seus nerds!!!!!!!!!! AQUI VAI ATUALIZAR ASSIM QUE
                    VCS ENTRAREM! #SEDEUSQUISER
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {acessos}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {lastDate}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
            </Card>
          </>
        }
      />
    </>
  );
}
