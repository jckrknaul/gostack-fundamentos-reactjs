const formatValue = (value: number): string =>
  // Intl.NumberFormat().format(value); // TODO
  new Intl.NumberFormat('de-DE').format(value);

export default formatValue;
