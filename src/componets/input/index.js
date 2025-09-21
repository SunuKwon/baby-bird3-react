import './index.css'

export default function Input ({ type, value, onChange, placeholder } ) {

    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value) }
            placeholder={placeholder}
        ></input>
    )
}