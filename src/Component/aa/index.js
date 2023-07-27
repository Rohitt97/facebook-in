export default function getIdFunctions() {
  let value = 0;

  function id() {
    value++;
    return value;
  }

  function reset() {
    value = 0;
  }
  return id, reset;
}
