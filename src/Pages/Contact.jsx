import styles from "./Contact.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

function Contact() {
    const submitHandler = (event) => {
        console.log(event);

        event.preventDefault()
    }
    return ( <
        div className = { styles.container } >
        <
        h2 > Contact < /h2> <
        hr / >
        <
        p > Proin eu ante vel mauris molestie dignissim non eget nunc.Integer ac massa orci.Suspendisse vulputate semper nunc eget rhoncus. < /p> <
        div className = { styles.form } >
        <
        div className = { styles.touch } >
        <
        h2 >
        Get in touch <
        /h2> <
        p className = { styles.description } > Lorem ipsum dolor sit amet, consectetur adipiscing elit.Ut id leo tempor, congue justo at, lobortis orci. < /p> <
        div className = { styles.icons } >
        <
        div >
        <
        FaLocationDot / >
        <
        p > 123 Fifth Avenue, New York, NY 10160 < /p> < /
        div > <
        div >
        <
        FaEnvelope / >
        <
        p > contact.ifon @gmail.com < /p>

        <
        /div> 

        <
        div >
        <
        FaPhoneAlt / >
        <
        p > 9 - 334 - 7565 - 9787 < /p> < /
        div > <
        /div> 

        <
        /div> <
        form onSubmit = { submitHandler } >
        <
        div >
        <
        input type = "text"
        placeholder = "First Name" / >
        <
        input type = "text"
        placeholder = "Last Name" / >

        <
        /div> <
        input type = "text"
        placeholder = "Your email address" / >
        <
        textarea rows = { 4 }
        cols = { 6 }
        placeholder = "Message..." /
        >
        <
        button type = "submit" > send < /button> < /
        form >

        <
        /div>


        <
        /div>
    )
}

export default Contact