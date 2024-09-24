import React from 'react'

interface Contact {
    name: string
    phone: string
}

const contacts: Contact[] = [
    { name: 'Somesh Karmakar', phone: '7001407545' },
    { name: 'Souvik Ghosh', phone: '9038509030' },
    { name: 'Soumodip Das', phone: '9163065159' },
    { name: 'Rohan Sinha', phone: '8640000158' },
]

const ContactInfo: React.FC = () => {
    return (
        <div
            style={{
                color: 'white',
                backgroundColor: 'black',
                padding: '20px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <h3>Call:</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {contacts.map((contact, index) => (
                    <li key={index}>
                        <div className="text-xl font-bold">{contact.name}</div>
                        <a
                            href={`tel:+91${contact.phone}`}
                            style={{ color: 'white' }}
                        >
                            +91 {contact.phone}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactInfo
