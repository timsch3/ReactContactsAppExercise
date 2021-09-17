const Contact = (props) => {
    return (
        <tr>
            <td><img src={props.picture} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>{props.popularity}</td>
            <td>{props.deleteButton}</td>
        </tr>
    );
}

export default Contact;