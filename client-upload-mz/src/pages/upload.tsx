"use client";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import AwsS3 from "@uppy/aws-s3";
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

import SidebarWithHeader from "../components/dashboard";

import { useEffect } from "react";
import SocketIo from "../infraestructure/ws.connection";
import { getAwsSignedUrl } from "../aws-service";

import { useToast } from '@chakra-ui/react'


export default function Home() {
  const socket = new SocketIo();
  const toast = useToast()

  useEffect(() => {
    socket.on("processComplete", (data: any) => {
      toast({
        title: 'Arquivo processado com sucesso.',
        description: "Seus relatórios estão disponíveis",
        status: 'success',
        duration: 9000,
        isClosable: true,
        position: 'top-right',
      })
    });
  }, [socket]);

  const handlerPublish = async (file: any) => {
    return {
      method: "PUT",
      url: await getAwsSignedUrl({
        name: file.name,
      }),
      fields: {},
      headers: {
        "Content-Type": file.type,
      },
    };
  };

  const uppy = new Uppy().use(AwsS3, {
    getUploadParameters(file) {
      return handlerPublish(file).then();
    },
  });

  uppy.on("complete", (result) => {
    toast({
      title: 'Arquivo importado com sucesso.',
      description: "Seu arquivo foi importado. Efetuando processamento....",
      status: 'success',
      duration: 9000,
      isClosable: true,
      position: 'top-right',
    })
  });

  return (
    <>
      <SidebarWithHeader children={<Dashboard uppy={uppy} />} />
    </>
  );
}