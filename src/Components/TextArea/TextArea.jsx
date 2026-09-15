

export const TextArea = ({value, id, label, name, onChange, placeholder}) => {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <textarea value={value} id={name} onCHange={onChange} name={name}>{placeholder}</textarea>
    </div>
  )
}
