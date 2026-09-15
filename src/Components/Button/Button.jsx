

export const Button = ({type="button", onClick, text, className}) => {
  return (
    <div>
      <button type={type} onClick={onClick} className={className}>{text}</button>
    </div>
  )
}
