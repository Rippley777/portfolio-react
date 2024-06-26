import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useWebSocket from '../../../shared/hooks/useWebSocket';
import Button from '../buttons';
interface CustomWsProps {
  // Define your props here
}

const CustomWs: React.FC<CustomWsProps> = (props) => {
  // Destructure props here if needed
  // const { messages, sendMessage, status } = useWebSocket(
  const { sendMessage } = useWebSocket(
    process.env.REACT_APP_WEBSOCKET_URL ?? 'ws://localhost:8080',
  );
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const { type, ...rest } = data;
    sendMessage({ type, ...rest });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="type"
        control={control}
        defaultValue=""
        render={({ field }) => <input placeholder="Type" {...field} />}
      />
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field }) => <input placeholder="Username" {...field} />}
      />
      <Button type="submit">Send Message</Button>
      {/* Your component JSX goes here */}
    </form>
  );
};

export default CustomWs;
