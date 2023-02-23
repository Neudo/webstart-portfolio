import {FC} from "react";

const ContactComponent: FC = () =>
    (
        < form action="">
            <input
                id="email" name="email"
                style={ {
                border: '1px solid black',
                borderRadius: '4px',
            } } type="text"/>
        </form>
    )

export default ContactComponent