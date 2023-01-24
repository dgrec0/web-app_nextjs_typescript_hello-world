import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { AppError } from "../models/app-error";
import { Message } from "../models/message";

export const useMessage = (config: AxiosRequestConfig) => {
  const [message, setMessage] = useState<string>("");

  const fetcher = async (config: AxiosRequestConfig) =>
    await axios(config).then((res) => res.data);

  const {
    data,
    error,
    isLoading: isApiResponseLoading,
  } = useSWR<Message, AppError>(config, fetcher);

  useEffect(() => {
    if (isApiResponseLoading) {
      return;
    }

    if (error) {
      setMessage(error.message);
    }

    if (data) {
      setMessage(JSON.stringify(data, null, 2));
    }
  }, [data, error, isApiResponseLoading]);

  return { message };
};
