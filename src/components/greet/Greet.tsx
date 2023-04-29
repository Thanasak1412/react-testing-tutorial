import { GreetProps } from './Greet.types';

export default function Greet({ name = 'Guest' }: GreetProps) {
  return <div>Hello {name}</div>;
}
