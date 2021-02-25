import PropTypes from 'prop-types'
import styles from './text-input.module.scss'

TextInput.propTypes = {
  label: PropTypes.node.isRequired,
}

export default function TextInput({ label, ...props }) {
  return (
        <>
            <label className={styles.label}>{label}</label>
            <input className={styles.input}{...props}/>
        </>
  )
}
