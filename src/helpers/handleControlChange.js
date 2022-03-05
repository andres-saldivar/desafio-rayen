export const handleControlChange = (evt, values, setValues) => {

    const { target } = evt;
    const { name, value } = target;
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues( newValues );

}