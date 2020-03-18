// pomocna funkcija za react Componentu u teriji

export function handleInputChange(e, property) {
  const { name, value } = e.target;
  this.setState(prevState =>
    ({
      [property]: {
        ...prevState[property],
        [name]: value,
      },
    }));
}
