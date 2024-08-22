export const useFoo = () => {
  console.log("useFoo");
  return useState('foo', () => 'bar');
}
