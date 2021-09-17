import React from 'react';
import contacts from '../data/contacts.json'
import Contact from './Contact';

class ContactsList extends React.Component {
    state = {
        topContacts: contacts.slice(0, 5),
        allContacts: contacts
    }
    removeFromTopContacts = (popularity) => {
        let tempArr = this.state.topContacts.filter(contact => popularity !== contact.popularity)
        this.setState({ topContacts: tempArr })
    }
    addRandomContact = () => {
        let randomContactsIndex = Math.floor(Math.random() * contacts.length);
        let topContactsCopy = this.state.topContacts.slice()
        topContactsCopy.unshift(this.state.allContacts[randomContactsIndex])
        this.setState({ topContacts: topContactsCopy })
    }
    sortByName = () => {
        let topContactsCopy = this.state.topContacts.slice()
        topContactsCopy.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        console.log(topContactsCopy)
        this.setState({ topContacts: topContactsCopy })
    }
    sortByPopularity = () => {
        let topContactsCopy = this.state.topContacts.slice()
        topContactsCopy.sort((a, b) => (b.popularity - a.popularity))
        console.log(topContactsCopy)
        this.setState({ topContacts: topContactsCopy })
    }
    render() {
        return <div>
            <div id='buttonsContainer'>
                <button onClick={this.addRandomContact}>Add random contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPopularity}>Sort by popularity</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Popularity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.topContacts.map((e, i) => <Contact key={i}
                        picture={e.pictureUrl}
                        name={e.name}
                        popularity={e.popularity.toFixed(2)}
                        deleteButton={<button onClick={() => this.removeFromTopContacts(e.popularity)}>Delete</button>} />)}
                </tbody>
            </table>
        </div>;
    }
}

export default ContactsList;