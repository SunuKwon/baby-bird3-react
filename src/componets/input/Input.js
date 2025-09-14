
export default function Input ({ type, value, onChange } ) {

    return (
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value) }
        ></input>
    )
}