import { HiUser } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactCard}>
      <div className={css.contactData}>
        <p>
          <HiUser size="20" />
          {name}
        </p>
        <p>
          <HiPhone size="20" />
          {number}
        </p>
      </div>
      <button className={css.btn} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
