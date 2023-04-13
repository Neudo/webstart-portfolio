import React, {FC} from "react";
const ContactComponent: FC = () =>
    (
        <div className=" mt-5 w-full md:w-1/2 m-auto">
            <form  data-netlify="true" name="contact" className="flex flex-wrap form-add-work p-8 bg-lightBlueSecondary-0">
                <label className="flex flex-col w-full " htmlFor="email"> Votre mail
                    <input id="email" name="email" type="text"/>
                </label>

                <label className="flex flex-col w-full mt-5 " htmlFor="email"> Votre Message
                    <textarea/>
                </label>

                <input type="hidden" name="form-name" value="contact"/>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )

export default ContactComponent