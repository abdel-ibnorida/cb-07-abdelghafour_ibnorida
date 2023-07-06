import styles from './input.module.scss'

const InputText = (props) => {
    const {
        label,
        name,
        placeholder,
        id,
        handleChange,
        error
    } = props || null;
    return (

        <form className={`${styles.inputForm} ${error ? styles.error : ""}`} onSubmit={(e) => {e.preventDefault()}} >
            <label htmlFor={id}>
                {label && <span>{label}</span>}
                <input
                    type="text"
                    placeholder={placeholder}
                    name={name}
                    onChange={(e) => handleChange(e.target.value)}
                />
            </label>
        </form>
    )
}

export default InputText;