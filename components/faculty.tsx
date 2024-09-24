import React from 'react'
import { BioCards } from './admins'
import { hackFonts } from '@/config/fonts'

export default function FacultyCoOrdinators() {
    return (
        <div className="flex justify-center items-center flex-wrap gap-4">
            <BioCards
                img="/kaustav.jpg"
                name={
                    <pre className={hackFonts.className}>
                        Prof. Kaustav Sarkar
                    </pre>
                }
                linkedin="https://www.linkedin.com/"
                // role_="Logistics"
            />
            <BioCards
                img="https://bca.iem.edu.in/assets/images/FacultyPhoto/Biswajit%20Maity.png"
                name="Prof. Dr. Biswajit Maity"
                linkedin="https://www.linkedin.com/in/biswajit-maity-29a18713a/"
                // role_="Logistics"
            />
            <BioCards
                img="https://bca.iem.edu.in/assets/images/FacultyPhoto/Rupam%20Bhattacharya.jpeg"
                name="Prof. Dr. Rupam Bhattacharya"
                linkedin="https://www.linkedin.com/in/dr-rupam-bhattacharya-4a485350/"
                // role_="Logistics"
            />
        </div>
    )
}
