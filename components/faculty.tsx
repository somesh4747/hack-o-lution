import React from 'react'
import { BioCards } from './admins'

export default function FacultyCoOrdinators() {
    return (
        <div className="flex justify-center items-center flex-wrap gap-4">
            <BioCards
                img="https://bca.iem.edu.in/assets/images/FacultyPhoto/KS.jpg"
                name="Prof. Kaustav Sarkar"
                linkedin="https://www.linkedin.com/in/rohan-sinha-0b926225a/"
                // role_="Logistics"
            />
            <BioCards
                img="https://bca.iem.edu.in/assets/images/FacultyPhoto/Biswajit%20Maity.png"
                name="Prof. Dr. Biswajit Maity"
                linkedin="https://www.linkedin.com/in/rohan-sinha-0b926225a/"
                // role_="Logistics"
            />
            <BioCards
                img="https://bca.iem.edu.in/assets/images/FacultyPhoto/Rupam%20Bhattacharya.jpeg"
                name="Prof. Dr. Rupam Bhattacharya"
                linkedin="https://www.linkedin.com/in/rohan-sinha-0b926225a/"
                // role_="Logistics"
            />
        </div>
    )
}
