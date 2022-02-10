export default function Button({ value, handle }) {
  return <button onClick={() => handle(value)}>{value}</button>;
}
