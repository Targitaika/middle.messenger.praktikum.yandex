export default function trim(string: String, symbol: String = '\\s'): String {
  const sl = `${symbol}`;

  const reg1 = new RegExp(`^[${sl}]+`, 'i');
  const reg2 = new RegExp(`[${sl}]+$`, 'i');

  let result = string.replace(reg1, '');
  result = result.replace(reg2, '');
  return result;
}
