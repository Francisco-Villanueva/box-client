import React from "react";

interface SwitchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; //void: No retorna nada la función
}

export function Switch({ onChange }: SwitchProps) {
  return (
    <input
      type="checkbox"
      className="appearance-none w-9 focus:outline-none checked:bg-darkGreen h-5 bg-lightGrey rounded-full before:inline-block before:rounded-full before:bg-yellow before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
      onChange={onChange}
    />
  );
}

/* Ejemplo de uso en el componente en el cual se importe Switch:

  const [usuarioHabilitado, setUsuarioHabilitado] = useState(false);

  const handleSwitchChange = () => {
    setUsuarioHabilitado(!usuarioHabilitado);
  };

  return (
    <div>
      <Switch onChange={handleSwitchChange} />
      <p>{usuarioHabilitado ? "Habilitado" : "Deshabilitado"}</p>
    </div>
  ); */
