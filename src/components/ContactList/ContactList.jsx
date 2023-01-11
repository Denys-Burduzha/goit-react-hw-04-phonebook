import styles from './ContactList.module.css';
import PropTypes from 'prop-types'

const ContactList = ({ contacts, onRemove, children }) => {
  return (
    <div className={styles.contacts}>
      <h2>Contacts</h2>
      {children}
      <ul>
        {contacts.length === 0 ? null : (
          <>
            {contacts.map(contact => {
              return (
                <li key={contact.id}>
                  <p>
                    <span>{contact.name} : </span>
                    {contact.number}
                  </p>
                  <button
                    onClick={() => {
                      onRemove(contact.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
   }),
  ),

  onRemove: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
